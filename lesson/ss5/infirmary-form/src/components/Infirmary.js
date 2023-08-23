import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from "yup";
const Infirmary = () => {
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    indentity: '',
                    birthDay: '',
                    gender: '',
                    country: '',
                    company: '',
                    department: '',
                    medicalCard: '',
                    city: '',
                    district: '',
                    wards: '',
                    address: '',
                    phone: '',
                    email: '',

                }}
                validationSchema={Yup.object({
                    name: Yup.string().required("Vui lòng không bỏ trống họ và tên"),
                    indentity: Yup.string().required("Vui lòng không để trống hộ chiếu /CMND"),
                    birthDay: Yup.string().required("Vui lòng không để trống ngày sinh"),
                    country: Yup.string().required("Vui lòng không để trống quốc tịch"),
                    city: Yup.string().required("Vui lòng không để trống tỉnh thành"),
                    district: Yup.string().required("Vui lòng không bỏ trống quận/huyện"),
                    wards: Yup.string().required("Vui lòng không bỏ trống phường xã"),
                    address: Yup.string().required("Vui lòng không bỏ trống địa chỉ"),
                    phone: Yup.string().required("Vui lòng không bỏ trống số điện thoại"),
                    email: Yup.string().required("VUi lòng không bỏ trống email").matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
                    , "Vui lòng nhập đúng định dạng email")
                })}
                onSubmit={(values) => {
                    alert(` ${values.name} đã được khai báo thành công !`);
                }}
            >
                {
                    <div className="mx-auto mt-5 shadow-lg rounded" style={{ width: "60%" }}>
                        <Form className="mx-auto p-3" style={{ width: "90%" }}>
                            <div className="mb-1  d-flex justify-content-center ">
                                <h1> Tờ khai y tế</h1>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="mb-2">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">
                                            Họ và tên
                                        </label>
                                        <Field
                                            type="text"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                            placeholder=""
                                            name='name'
                                        />
                                        <ErrorMessage name="name" component='span' className="form-error" />

                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">
                                            Số hộ chiếu /CMND
                                        </label>
                                        <Field
                                            type="text"
                                            className="form-control"
                                            id="exampleFormControlInput"
                                            placeholder=""
                                            name='indentity'
                                        />
                                        <ErrorMessage name="indentity" component='span' className="form-error" />

                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="dob" className="form-label">
                                            Năm sinh
                                        </label>
                                        <Field type="date" className="form-control" id="dob" placeholder="" name='birthDay' />
                                        <ErrorMessage name="birthDay" component='span' className="form-error" />
                                    </div>
                                    <div className="mb-1 ">
                                        <label style={{ marginRight: "0.5rem" }}>Giới tính</label>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="gender"
                                                id="exampleRadios1"
                                                value="Nam"
                                            />
                                            <label className="form-check-label" htmlFor="gender">
                                                Nam
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="gender"
                                                id="exampleRadios2"
                                                value="Nữ"
                                            />
                                            <label className="form-check-label" htmlFor="gender">
                                                Nữ
                                            </label>
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <label
                                            htmlFor="exampleFormControlTextarea1111"
                                            className="form-label"
                                        >
                                            Quốc tịch
                                        </label>
                                        <Field
                                            className="form-control"
                                            id="exampleFormControlTextarea1111"
                                            rows={3}
                                            name="country"
                                        />
                                        <ErrorMessage name="country" component='span' className="form-error" />

                                    </div>
                                    <div className="mb-2">
                                        <label
                                            htmlFor="exampleFormControlTextarea11111"
                                            className="form-label"
                                        >
                                            Công ty làm việc
                                        </label>
                                        <input
                                            className="form-control"
                                            id="exampleFormControlTextarea11111"
                                            rows={3}
                                            name="company"
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">
                                            Bộ phận làm việc{" "}
                                        </label>
                                        <input
                                            className="form-control"
                                            id="exampleFormControlTextarea1"
                                            rows={3}
                                        />
                                    </div>
                                    <div className="mb-2 form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="exampleCheck1"
                                        />
                                        <label className="form-check-label" htmlFor="exampleCheck1">
                                            Có thẻ bảo hiểm y tế
                                        </label>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="country" className="form-label">
                                            <h5>
                                                Trong vòng 14 ngày qua, anh/chị có đến quốc gia vùng lãnh thổ nào
                                                (Có thể đi qua nhiều quốc gia)
                                            </h5>
                                        </label>
                                        <textarea className="form-control" id="country" defaultValue={""} />
                                    </div>
                                    <div className="mb-2">
                                        <h5 className="form-label">
                                            Trong vòng 14 ngày qua, Anh/Chị có dấu hiệu nào sau đây?
                                        </h5>
                                        <div>
                                            <input type="checkbox" className="form-check-input" id="sot" />
                                            <label className="form-check-label" htmlFor="sot">
                                                Sốt
                                            </label>
                                        </div>
                                        <div>
                                            <input type="checkbox" className="form-check-input" id="ho" />
                                            <label className="form-check-label" htmlFor="ho">
                                                Ho
                                            </label>
                                        </div>
                                        <div>
                                            <input type="checkbox" className="form-check-input" id="khotho" />
                                            <label className="form-check-label" htmlFor="khotho">
                                                Khó thở
                                            </label>
                                        </div>
                                        <div>
                                            <input type="checkbox" className="form-check-input" id="viemphoi" />
                                            <label className="form-check-label" htmlFor="viemphoi">
                                                Viêm phổi
                                            </label>
                                        </div>
                                        <div>
                                            <input type="checkbox" className="form-check-input" id="dauhong" />
                                            <label className="form-check-label" htmlFor="sot">
                                                Đau họng
                                            </label>
                                        </div>
                                        <div>
                                            <input type="checkbox" className="form-check-input" id="metmoi" />
                                            <label className="form-check-label" htmlFor="sot">
                                                Mệt mỏi
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mb-4 mt-4">
                                        <h4 htmlFor="exampleFormControlInput1" className="form-label">
                                            Địa chỉ liên lạc tại Việt Nam
                                        </h4>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">
                                            Tỉnh thành
                                        </label>
                                        <Field
                                            type="text"
                                            className="form-control"
                                            id="exampleFormControlInput12"
                                            placeholder=""
                                            name='city'
                                        />
                                        <ErrorMessage name="city" component='span' className="form-error" />

                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">
                                            Quận/ huyện
                                        </label>
                                        <Field
                                            type="text"
                                            className="form-control"
                                            id="exampleFormControlInput12"
                                            placeholder=""
                                            name='district'
                                        />
                                        <ErrorMessage name="district" component='span' className="form-error" />

                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">
                                            Phường/xã
                                        </label>
                                        <Field
                                            type="text"
                                            className="form-control"
                                            id="exampleFormControlInpqqq"
                                            placeholder=""
                                            name='wards'
                                        />
                                        <ErrorMessage name="wards" component='span' className="form-error" />

                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">
                                            Số nhà tổ dân phố/thôn/đội
                                        </label>
                                        <Field className="form-control" id="exampleFormControlTextarea1aaa" name='address'/>
                                        <ErrorMessage name="address" component='span' className="form-error" />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">
                                            Điện thoại
                                        </label>
                                        <Field
                                            className="form-control"
                                            id="exampleFormControlTextarea1aaab"
                                            name='phone'
                                        />
                                         <ErrorMessage name="phone" component='span' className="form-error" />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">
                                            Email
                                        </label>
                                        <Field className="form-control" id="exampleFormControlTextarea1ava" name='email'/>
                                        <ErrorMessage name="email" component='span' className="form-error" />
                                    </div>
                                    <div className="mb-2">
                                        <h5 className="form-label">
                                            Trong vòng 14 ngày qua, Anh/Chị có tiếp xúc với?
                                        </h5>
                                        <div>
                                            <input type="checkbox" className="form-check-input" id="b" />
                                            <label className="form-check-label" htmlFor="b">
                                                Người bệnh nghi ngờ,mắc bệnh COVID-19
                                            </label>
                                        </div>
                                        <div>
                                            <input type="checkbox" className="form-check-input" id="c" />
                                            <label className="form-check-label" htmlFor="c">
                                                Người từ nước có bệnh COVID-19
                                            </label>
                                        </div>
                                        <div>
                                            <input type="checkbox" className="form-check-input" id="bh" />
                                            <label className="form-check-label" htmlFor="bh">
                                                Người có biểu hiện (Sốt,ho,khó thở,viêm phổi)
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex mt-4">
                                <button className="me-3 btn btn-outline-primary" type="submit">
                                    Submit
                                </button>
                                <button className="btn btn-outline-danger">Cancel</button>
                            </div>
                        </Form>
                    </div>

                }
            </Formik>
        </>
    );
} 
export default Infirmary;