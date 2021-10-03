import React from "react";
import {
   TagOutlined,
   ClockCircleOutlined,
   QuestionCircleOutlined,
   EditOutlined,
} from "@ant-design/icons";
import { Divider, Button, Input } from "antd";
import "./style.css";

const Exam = () => {
   const { Search } = Input;
   return (
      <div className="exam">
         <div className="exam-container">
            <p className="exam__name">
               Trắc nghiệm 15 phút văn học lớp 12 - Chủ đề Tiếng Việt - Đề số 1
            </p>
            <p className="exam__des">
               Trắc nghiệm 15 phút Chủ đề Tiếng Việt - văn học lớp 12 - Đề số 1
               trong loạt bài trắc nghiệm ôn luyện kiến thức về môn văn học lớp
               12 do cungthi.vn biên soạn. Ngoài ra các bạn có thể tham khảo
               thêm các loại bài, đề trắc nghiệm văn học khác trên hệ thống
               cungthi.vn. Các bạn có thể tham khảo thêm các bài giảng về các
               chuyên đề trong sách giáo khoa văn học lớp 12 để việc ôn luyện
               đạt kết quả tốt nhất
            </p>
            <div className="exam__info">
               <p className="info__time">
                  <ClockCircleOutlined style={{ marginRight: "5px" }} />
                  15 Phút
               </p>
               <p className="info__question">
                  <QuestionCircleOutlined style={{ marginRight: "5px" }} />
                  10 Câu
               </p>
               <p className="info__tag">
                  <TagOutlined style={{ marginRight: "5px" }} />
                  <ul>
                     <li>Văn học</li>
                  </ul>
               </p>
            </div>
            <Divider />
            <ul className="question-list">
               <li className="question-item">
                  <p className="question__title">Câu 1:</p>
                  <p className="question__des">
                     Từ nào không phải là thuật ngữ khoa học của chuyên ngành
                     nghiên cứu văn học trong văn bản về "vần luật bằng trắc của
                     thơ Đường luật" sau đây: "Thơ Đường luật buộc phải theo sự
                     quy định về thanh bằng, thanh trắc trong từng câu và trong
                     cả bài. Hệ thống thanh bằng, thanh trắc được tính từ chữ
                     thứ hai của câu thứ nhất. Nếu chữ này thanh bằng thì bài
                     thơ thuộc loại luật bằng (và ngược lại). Sự sắp xếp các
                     thanh bằng trắc trong thơ Đường chẳng qua chỉ làm cho điệu
                     thơ không đơn điệu." (Từ điển thuật ngữ văn học - Lê Bá
                     Hán, Trần Đình Sử, Nguyễn Khắc Phi)
                  </p>
                  <ul className="answer-list">
                     <li className="answer-item">
                        <strong>A. </strong>
                        <span>"Thanh bằng".</span>
                     </li>
                     <li className="answer-item">
                        <strong>B. </strong>
                        <span>"Hệ thống".</span>
                     </li>
                     <li className="answer-item">
                        <strong>C. </strong>
                        <span>"Luật bằng".</span>
                     </li>
                     <li className="answer-item">
                        <strong>D. </strong>
                        <span>"Thơ Đường luật".</span>
                     </li>
                  </ul>
               </li>
               <li className="question-item">
                  <p className="question__title">Câu 2:</p>
                  <p className="question__des">
                     Từ nào không phải là thuật ngữ khoa học của chuyên ngành
                     nghiên cứu văn học trong văn bản về "vần luật bằng trắc của
                     thơ Đường luật" sau đây: "Thơ Đường luật buộc phải theo sự
                     quy định về thanh bằng, thanh trắc trong từng câu và trong
                     cả bài. Hệ thống thanh bằng, thanh trắc được tính từ chữ
                     thứ hai của câu thứ nhất. Nếu chữ này thanh bằng thì bài
                     thơ thuộc loại luật bằng (và ngược lại). Sự sắp xếp các
                     thanh bằng trắc trong thơ Đường chẳng qua chỉ làm cho điệu
                     thơ không đơn điệu." (Từ điển thuật ngữ văn học - Lê Bá
                     Hán, Trần Đình Sử, Nguyễn Khắc Phi)
                  </p>
                  <ul className="answer-list">
                     <li className="answer-item">
                        <strong>A. </strong>
                        <span>"Thanh bằng".</span>
                     </li>
                     <li className="answer-item">
                        <strong>B. </strong>
                        <span>"Hệ thống".</span>
                     </li>
                     <li className="answer-item">
                        <strong>C. </strong>
                        <span>"Luật bằng".</span>
                     </li>
                     <li className="answer-item">
                        <strong>D. </strong>
                        <span>"Thơ Đường luật".</span>
                     </li>
                  </ul>
               </li>
               <li className="question-item">
                  <p className="question__title">Câu 3:</p>
                  <p className="question__des">
                     Từ nào không phải là thuật ngữ khoa học của chuyên ngành
                     nghiên cứu văn học trong văn bản về "vần luật bằng trắc của
                     thơ Đường luật" sau đây: "Thơ Đường luật buộc phải theo sự
                     quy định về thanh bằng, thanh trắc trong từng câu và trong
                     cả bài. Hệ thống thanh bằng, thanh trắc được tính từ chữ
                     thứ hai của câu thứ nhất. Nếu chữ này thanh bằng thì bài
                     thơ thuộc loại luật bằng (và ngược lại). Sự sắp xếp các
                     thanh bằng trắc trong thơ Đường chẳng qua chỉ làm cho điệu
                     thơ không đơn điệu." (Từ điển thuật ngữ văn học - Lê Bá
                     Hán, Trần Đình Sử, Nguyễn Khắc Phi)
                  </p>
                  <ul className="answer-list">
                     <li className="answer-item">
                        <strong>A. </strong>
                        <span>"Thanh bằng".</span>
                     </li>
                     <li className="answer-item">
                        <strong>B. </strong>
                        <span>"Hệ thống".</span>
                     </li>
                     <li className="answer-item">
                        <strong>C. </strong>
                        <span>"Luật bằng".</span>
                     </li>
                     <li className="answer-item">
                        <strong>D. </strong>
                        <span>"Thơ Đường luật".</span>
                     </li>
                  </ul>
               </li>

               <li className="question-item">
                  <p className="question__title">Câu 4:</p>
                  <p className="question__des">
                     Từ nào không phải là thuật ngữ khoa học của chuyên ngành
                     nghiên cứu văn học trong văn bản về "vần luật bằng trắc của
                     thơ Đường luật" sau đây: "Thơ Đường luật buộc phải theo sự
                     quy định về thanh bằng, thanh trắc trong từng câu và trong
                     cả bài. Hệ thống thanh bằng, thanh trắc được tính từ chữ
                     thứ hai của câu thứ nhất. Nếu chữ này thanh bằng thì bài
                     thơ thuộc loại luật bằng (và ngược lại). Sự sắp xếp các
                     thanh bằng trắc trong thơ Đường chẳng qua chỉ làm cho điệu
                     thơ không đơn điệu." (Từ điển thuật ngữ văn học - Lê Bá
                     Hán, Trần Đình Sử, Nguyễn Khắc Phi)
                  </p>
                  <ul className="answer-list">
                     <li className="answer-item">
                        <strong>A. </strong>
                        <span>"Thanh bằng".</span>
                     </li>
                     <li className="answer-item">
                        <strong>B. </strong>
                        <span>"Hệ thống".</span>
                     </li>
                     <li className="answer-item">
                        <strong>C. </strong>
                        <span>"Luật bằng".</span>
                     </li>
                     <li className="answer-item">
                        <strong>D. </strong>
                        <span>"Thơ Đường luật".</span>
                     </li>
                  </ul>
               </li>
               <li className="question-item">
                  <p className="question__title">Câu 5:</p>
                  <p className="question__des">
                     Từ nào không phải là thuật ngữ khoa học của chuyên ngành
                     nghiên cứu văn học trong văn bản về "vần luật bằng trắc của
                     thơ Đường luật" sau đây: "Thơ Đường luật buộc phải theo sự
                     quy định về thanh bằng, thanh trắc trong từng câu và trong
                     cả bài. Hệ thống thanh bằng, thanh trắc được tính từ chữ
                     thứ hai của câu thứ nhất. Nếu chữ này thanh bằng thì bài
                     thơ thuộc loại luật bằng (và ngược lại). Sự sắp xếp các
                     thanh bằng trắc trong thơ Đường chẳng qua chỉ làm cho điệu
                     thơ không đơn điệu." (Từ điển thuật ngữ văn học - Lê Bá
                     Hán, Trần Đình Sử, Nguyễn Khắc Phi)
                  </p>
                  <ul className="answer-list">
                     <li className="answer-item">
                        <strong>A. </strong>
                        <span>"Thanh bằng".</span>
                     </li>
                     <li className="answer-item">
                        <strong>B. </strong>
                        <span>"Hệ thống".</span>
                     </li>
                     <li className="answer-item">
                        <strong>C. </strong>
                        <span>"Luật bằng".</span>
                     </li>
                     <li className="answer-item">
                        <strong>D. </strong>
                        <span>"Thơ Đường luật".</span>
                     </li>
                  </ul>
               </li>
            </ul>
            <Divider />
            <Button type="primary" htmlType="submit">
               <EditOutlined />
               Làm bài
            </Button>
            <Divider />
            <div className="comment">
               <p className="comment__title">Bình luận</p>
               <ul className="comment-list">
                  <li className="comment-item">
                     <p>
                        <span className="comment__name">Louis Phan:</span>
                        <span className="comment__content">Good!</span>
                     </p>
                  </li>
                  <li className="comment-item">
                     <p>
                        <span className="comment__name">Louis Phan:</span>
                        <span className="comment__content">
                           This Exam Very Good!
                        </span>
                     </p>
                  </li>
               </ul>
               <Search
                  placeholder="Nhận xét của bạn..."
                  allowClear
                  enterButton="Bình luận"
                  size="default"
                  style={{ maxWidth: 500 }}
               />
            </div>
         </div>
      </div>
   );
};

export default Exam;
