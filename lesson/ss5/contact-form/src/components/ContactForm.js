import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
const ContactForm = () => {
    return (
        <> <Formik
            initialValues={{
                name: '',
                email: '',
                phone: '',
                message: ''

            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .required("Name is not empty, please !")
                    .matches(/^[a-z A-Z ]+$/, "Name invalid"),
                email: Yup.string().required("Email is not empty, please !").matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Email invalid"),
                phone: Yup.string().required("Phone is not empty, please !"),
                message: Yup.string().required("message is not empty, please !")
            })}
            onSubmit={(values, { setSubmitting }) => {
               
                    setSubmitting(false);
                    alert(`Create ${values.name}  success`)
                
            }}>
            {
                <div className="mx-auto mt-5 shadow-lg rounded" style={{ width: "50%" }}>
                    <Form className="mx-auto p-3" style={{ width: "90%" }}>
                        <div className="mb-1  d-flex justify-content-center ">
                            <h1>Contact form</h1>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">
                                Name
                            </label>
                            <Field
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder=""
                                name="name"
                            />
                            <ErrorMessage name="name" component='span' className="form-error" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">
                                Email
                            </label>
                            <Field
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput"
                                placeholder=""
                                name="email"
                            />
                            <ErrorMessage name="email" component='span' className="form-error" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">
                                Phone
                            </label>
                            <Field
                                type="text"
                                className="form-control"
                                id="exampleFormControlInp"
                                placeholder=""
                                name="phone"
                            />
                            <ErrorMessage name="phone" component='span' className="form-error" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">
                                Message
                            </label>
                            <Field as='textarea'
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows={3}
                                defaultValue={""}
                                name= "message"
                            />
                            <ErrorMessage name="message" component='span' className="form-error" />

                        </div>
                        <div className="d-flex">
                            <button className="me-3 btn btn-outline-primary" type="submit">Submit</button>
                            <button className="btn btn-outline-danger" type="button">Cancel</button>
                        </div>
                    </Form>
                </div>
            }

        </Formik></>
    );
}
export default ContactForm;