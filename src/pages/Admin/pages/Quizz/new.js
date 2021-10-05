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
import { SmileOutlined, DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { quizActions, tagActions } from "../../slice";
import { getAllCategory } from "../../slice/categorySlice";
import { useHistory } from "react-router-dom";

const { TextArea } = Input;
const { TreeNode } = TreeSelect;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const validateMessages = {
  required: "${label} không thể để trống",
  types: {
    number: "${label} phải là số!",
    integer: "${label} không hợp lệ!",
  },
  number: {
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
  }, [visible]);
};

const AddQuestionModal = ({ visible, onCancel }) => {
  const [form] = Form.useForm();

  useResetFormOnCloseModal({
    form,
    visible,
  });

  const onOk = () => {
    form.submit();
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
const NewQuizz = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const categories = useSelector((state) => state.category.categories);
  const tags = useSelector((state) => state.tag.tags);
  const showUserModal = () => {
    setVisible(true);
  };

  const hideUserModal = () => {
    setVisible(false);
  };

  const onFinish = (values) => {
    const {
      categoryId,
      tagIdList,
      questionList,
      title,
      description,
      duration,
    } = values || {};
    setIsLoading(true);
    dispatch(
      quizActions.createQuiz(
        {
          categoryId,
          tagIdList,
          questionList,
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
  useEffect(() => {
    dispatch(getAllCategory());
    dispatch(tagActions.getAllTag());
  }, []);
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
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Thêm đề thi </h1>
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
          onFinish={onFinish}
          initialValues={{ tagIdList: [] }}
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
              dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
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
              const onChange = (index) =>
                setFieldsValue({
                  questionList: [
                    ...questionList.slice(0, index),
                    ...questionList.slice(index + 1),
                  ],
                });
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

        <AddQuestionModal visible={visible} onCancel={hideUserModal} />
      </Form.Provider>
    </>
  );
};

export default NewQuizz;
