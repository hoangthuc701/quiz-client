/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Form,
  Input,
  InputNumber,
  Modal,
  Button,
  Typography,
  List,
  TreeSelect,
  Select,
} from "antd";
import { SmileOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { quizActions, tagActions, questionActions } from "../../slice/";
import { getAllCategory } from "../../slice/categorySlice";
import { useHistory, useParams } from "react-router-dom";
import { getQuiz } from "../../slice/quizzesSlice";

const { TextArea } = Input;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const validateMessages = {
  // eslint-disable-next-line no-template-curly-in-string
  required: "${label} không thể để trống",
  types: {
    // eslint-disable-next-line no-template-curly-in-string
    number: "${label} phải là số!",
    // eslint-disable-next-line no-template-curly-in-string
    integer: "${label} không hợp lệ!",
  },
  number: {
    // eslint-disable-next-line no-template-curly-in-string
    range: "${label} có giá trị từ ${min} đến ${max}",
  },
};
// reset form fields when modal is form, closed
const useResetFormOnCloseModal = ({ form, visible }) => {
  const prevVisibleRef = useRef();
  useEffect(() => {
    prevVisibleRef.current = visible;
  }, [visible]);
  const prevVisible = prevVisibleRef.current;

  useEffect(() => {
    if (!visible && prevVisible) {
      form.resetFields();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);
};

const AddQuestionModal = ({
  visible,
  onCancel,
  action,
  data,
  examId,
  onFinishUpdateQuestion,
  onFinishAddQuestion,
}) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  form.setFieldsValue(data);

  useResetFormOnCloseModal({
    form,
    visible,
  });

  const onOk = () => {
    let data_new = form.getFieldValue();

    if (action === "add") {
      data_new.exerciseId = examId;

      dispatch(
        questionActions.createQuestion(data_new, (res) => {
          data_new.id = res?.question?.id;
          delete data_new.exerciseId;
          onFinishAddQuestion(data_new);
        })
      );
    } else {
      data_new.questionId = data.id;
      dispatch(
        questionActions.updateQuestion(data_new, () => {
          data_new.id = data.id;
          onFinishUpdateQuestion(data.id, data_new);
        })
      );
    }
  };

  return (
    <Modal
      title="Thêm Câu Hỏi"
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
    >
      <Form
        form={form}
        layout="vertical"
        name="questionForm"
        validateMessages={validateMessages}
      >
        <Form.Item name="content" label="Câu hỏi" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        {[1, 2, 3, 4].map((answerIndex) => {
          return (
            <Form.Item
              name={`answer${answerIndex}`}
              label={`Đáp án ${answerIndex}`}
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          );
        })}
        <Form.Item
          name="correctAnswer"
          label="Đáp án đúng"
          rules={[
            {
              required: true,
            },
          ]}
          initialValue={1}
        >
          <Select style={{ width: "100%" }} placeholder="Chọn đáp án đúng">
            {[1, 2, 3, 4]?.map((answer) => {
              return <Select.Option key={answer}>{answer}</Select.Option>;
            })}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

const EditQuizz = () => {
  const history = useHistory();
  const [runOne, setRunOne] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const categories = useSelector((state) => state.category.categories);
  const tags = useSelector((state) => state.tag.tags);
  const [form] = Form.useForm();
  const [action, setAction] = useState("add");
  const [modalData, setModalData] = useState({});
  const showUserModal = () => {
    setAction("add");
    setModalData({});
    setVisible(true);
  };

  const hideUserModal = () => {
    setVisible(false);
  };

  const onFinish = (values) => {
    const {
      categoryId,
      tagIdList,
      title,
      description,
      duration,
    } = values || {};
    setIsLoading(true);
    dispatch(
      quizActions.updateQuiz(
        {
          id: exercise.id,
          categoryId,
          tagIdList,
          title,
          description,
          duration,
        },
        () => {
          setIsLoading(false);
          history.push("/admin/quizzes");
        },
        () => {
          setIsLoading(false);
        }
      )
    );
  };

  const examId = useParams().id;
  let exercise = { ...useSelector((state) => state.quizzes.exercise) };

  useEffect(() => {
    dispatch(getAllCategory());
    dispatch(tagActions.getAllTag());
    const data = { id: examId };
    dispatch(getQuiz(data, () => {}));
  }, []);

  if (runOne && exercise.id) {
    exercise.categoryId = exercise?.category?.id;
    exercise.tagIdList = exercise?.tags?.map((tag) => tag.id);
    exercise.questionList = exercise?.questions;
    form.setFieldsValue(exercise);
    setRunOne(false);
  }

  const categoriesCbo = useMemo(() =>
    categories?.map((cat) => ({
      title: cat.title,
      value: cat.id,
      children: cat.childs?.map((child) => ({
        title: child.title,
        value: child.id,
      })),
    }))
  );

  const onFinishUpdateQuestion = (questionId, data) => {
    setVisible(false);
    const questionList = form.getFieldValue("questionList") || [];
    let newList = questionList.map((question) => {
      if (question.id === questionId) {
        return data;
      }
      return question;
    });
    form.setFieldsValue({
      questionList: newList,
    });
  };

  const onFinishAddQuestion = (data) => {
    setVisible(false);
    const questionList = form.getFieldValue("questionList") || [];
    form.setFieldsValue({
      questionList: [...questionList, data],
    });
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Chỉnh sửa đề thi </h1>
      </div>
      <Form.Provider
        onFormFinish={(name, { values, forms }) => {
          const { mainForm } = forms;

          if (name === "questionForm") {
            const questionList = mainForm.getFieldValue("questionList") || [];
            mainForm.setFieldsValue({
              questionList: [...questionList, values],
            });
            setVisible(false);
          }
          if (name === "mainForm") {
            values.questionList = mainForm.getFieldValue("questionList");
          }
        }}
      >
        <Form
          {...layout}
          name="mainForm"
          form={form}
          onFinish={onFinish}
          initialValues={exercise}
          validateMessages={validateMessages}
        >
          <Form.Item
            name="title"
            label="Tên đề thi"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Mô tả"
            rules={[{ required: true }]}
          >
            <TextArea />
          </Form.Item>
          <Form.Item
            name="duration"
            label="Thời gian"
            rules={[{ required: true }]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            label="Nhãn"
            shouldUpdate={(prevValues, curValues) =>
              prevValues.tagIdList !== curValues.tagIdList
            }
            name="tagIdList"
            rules={[{ required: true }]}
          >
            <Select
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder="Chọn nhãn"
            >
              {tags?.map((tag) => {
                return <Select.Option key={tag.id}>{tag.title}</Select.Option>;
              })}
            </Select>
          </Form.Item>
          <Form.Item
            label="Danh mục"
            name="categoryId"
            shouldUpdate={(prevValues, curValues) =>
              prevValues.categoryId !== curValues.categoryId
            }
            rules={[{ required: true }]}
          >
            <TreeSelect
              showSearch
              style={{ width: "100%" }}
              dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
              placeholder="Chọn danh mục"
              allowClear
              treeData={categoriesCbo}
            />
          </Form.Item>
          <Form.Item
            label="Danh sách câu hỏi"
            shouldUpdate={(prevValues, curValues) =>
              prevValues.questionList !== curValues.questionList
            }
          >
            {({ getFieldValue, setFieldsValue }) => {
              const questionList = getFieldValue("questionList") || [];
              const onChange = (index) => {
                const question = questionList[index];
                dispatch(
                  questionActions.deleteQuestion({ id: question.id }, () => {
                    setFieldsValue({
                      questionList: [
                        ...questionList.slice(0, index),
                        ...questionList.slice(index + 1),
                      ],
                    });
                  })
                );
              };

              const handleEdit = (index) => {
                const question = questionList[index];
                setModalData(question);
                setVisible(true);
                setAction("edit");
              };
              return questionList.length ? (
                <List
                  style={{ textAlign: "left", padding: "10px" }}
                  itemLayout="horizontal"
                  dataSource={questionList}
                  renderItem={(item, itemIndex) => (
                    <List.Item>
                      <List.Item.Meta
                        title={`Câu ${itemIndex + 1}: ${item.content}`}
                        description={
                          <List
                            style={{ paddingLeft: 25 }}
                            itemLayout="horizontal"
                            dataSource={[1, 2, 3, 4]}
                            renderItem={(answerIndex) => {
                              const isCorrectAnswer =
                                parseInt(item.correctAnswer) === answerIndex;
                              const answer = `Đáp án ${answerIndex}: ${
                                item[`answer${answerIndex}`]
                              }`;
                              return (
                                <List.Item>
                                  <List.Item.Meta
                                    title={isCorrectAnswer && answer}
                                    description={!isCorrectAnswer && answer}
                                  />
                                </List.Item>
                              );
                            }}
                          />
                        }
                      />
                      <Button
                        type="primary"
                        shape="circle"
                        icon={<EditOutlined />}
                        onClick={() => handleEdit(itemIndex)}
                      ></Button>
                      <Button
                        type="danger"
                        shape="circle"
                        icon={<DeleteOutlined />}
                        onClick={() => onChange(itemIndex)}
                      ></Button>
                    </List.Item>
                  )}
                />
              ) : (
                <Typography.Text className="ant-form-text" type="secondary">
                  ( <SmileOutlined /> Chưa có câu hỏi )
                </Typography.Text>
              );
            }}
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button htmlType="submit" type="primary" loading={isLoading}>
              Lưu
            </Button>
            <Button
              htmlType="button"
              style={{ margin: "0 8px" }}
              onClick={showUserModal}
            >
              Thêm câu hỏi
            </Button>
          </Form.Item>
        </Form>

        <AddQuestionModal
          visible={visible}
          onCancel={hideUserModal}
          action={action}
          data={modalData}
          examId={exercise.id}
          onFinishUpdateQuestion={onFinishUpdateQuestion}
          onFinishAddQuestion={onFinishAddQuestion}
        />
      </Form.Provider>
    </>
  );
};

export default EditQuizz;
