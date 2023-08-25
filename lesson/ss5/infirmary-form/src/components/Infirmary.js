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
                    phone: Yup.string().required("Vui lòng không bỏ trống số điện thoại").matches(/^(0|84)(2(0[3-9]|1[0-6|8|9]|2[0-2|5-9]|3[2-9]|4[0-9]|5[1|2|4-9]|6[0-3|9]|7[0-7]|8[0-9]|9[0-4|6|7|9])|3[2-9]|5[5|6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])([0-9]{7})$/, "Vui lòng nhập đúng định dạng số điện thoại "),
                    email: Yup.string().required("VUi lòng không bỏ trống email").matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, "Vui lòng nhập đúng định dạng email")
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
                                        <label htmlFor="name" className="form-label">
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
                                        <label htmlFor="indentity" className="form-label">
                                            Số hộ chiếu /CMND
                                        </label>
                                        <Field
                                            type="text"
                                            className="form-control"
                                            id="indentity"
                                            placeholder=""
                                            name='indentity'
                                        />
                                        <ErrorMessage name="indentity" component='span' className="form-error" />

                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="birthDay" className="form-label">
                                            Năm sinh
                                        </label>
                                        <Field type="date" className="form-control" id="birthDay" placeholder="" name='birthDay' />
                                        <ErrorMessage name="birthDay" component='span' className="form-error" />
                                    </div>
                                    <div className="mb-1 ">
                                        <label style={{ marginRight: "0.5rem" }}>Giới tính</label>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="gender"
                                                id="gender"
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
                                                id="gender"
                                                value="Nữ"
                                            />
                                            <label className="form-check-label" htmlFor="gender">
                                                Nữ
                                            </label>
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <label
                                            htmlFor="country"
                                            className="form-label"
                                        >
                                            Quốc tịch
                                        </label>
                                        <Field
                                            className="form-control"
                                            id="country"
                                            rows={3}
                                            name="country"
                                        />
                                        <ErrorMessage name="country" component='span' className="form-error" />

                                    </div>
                                    <div className="mb-2">
                                        <label
                                            htmlFor="company"
                                            className="form-label"
                                        >
                                            Công ty làm việc
                                        </label>
                                        <input
                                            className="form-control"
                                            id="company"
                                            rows={3}
                                            name="company"
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="department" className="form-label">
                                            Bộ phận làm việc{" "}
                                        </label>
                                        <input
                                            className="form-control"
                                            id="department"
                                            rows={3}
                                        />
                                    </div>
                                    <div className="mb-2 form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="medicalCard"
                                        />
                                        <label className="form-check-label" htmlFor="medicalCard">
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
                                        <label htmlFor="city" className="form-label">
                                            Tỉnh thành
                                        </label>
                                        <Field
                                            type="text"
                                            className="form-control"
                                            id="city"
                                            placeholder=""
                                            name='city'
                                        />
                                        <ErrorMessage name="city" component='span' className="form-error" />

                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="district" className="form-label">
                                            Quận/ huyện
                                        </label>
                                        <Field
                                            type="text"
                                            className="form-control"
                                            id="district"
                                            placeholder=""
                                            name='district'
                                        />
                                        <ErrorMessage name="district" component='span' className="form-error" />

                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="wards" className="form-label">
                                            Phường/xã
                                        </label>
                                        <Field
                                            type="text"
                                            className="form-control"
                                            id="wards"
                                            placeholder=""
                                            name='wards'
                                        />
                                        <ErrorMessage name="wards" component='span' className="form-error" />

                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="address" className="form-label">
                                            Số nhà tổ dân phố/thôn/đội
                                        </label>
                                        <Field className="form-control" id="address" name='address' />
                                        <ErrorMessage name="address" component='span' className="form-error" />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="phone" className="form-label">
                                            Điện thoại
                                        </label>
                                        <Field
                                            className="form-control"
                                            id="phone"
                                            name='phone'
                                        />
                                        <ErrorMessage name="phone" component='span' className="form-error" />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="email" className="form-label">
                                            Email
                                        </label>
                                        <Field className="form-control" id="email" name='email' />
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
                                            <input type="checkbox" className="form-check-input" id="nb" />
                                            <label className="form-check-label" htmlFor="nb">
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