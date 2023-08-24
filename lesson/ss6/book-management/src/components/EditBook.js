import { Field, Form, Formik,ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import { Await, BrowserRouter, Link, useNavigate, useParams } from "react-router-dom";
import * as bookService from "../services/BookService";
import * as Yup from "yup"


export const EditBook = () => {
    const navigate = useNavigate();

    const { id } = useParams()

    const [book, setBook] = useState({
        title: "",
        quantity: ""
    })
    useEffect(() => {
        loadBook();
    }, []);

    const loadBook = async () => {
        const result = await bookService.getById(id);
        console.log(result);
        setBook(result.data);
    }
//      useEffect(() => {
//     loadBook();
//   }, []);

//   const loadBook = async () => {
//     try {
//       const result = await bookService.getById(id);
//       setBook(result);
//     } catch (error) {
//       console.log(error);
//     }
//   };

    
    const update = async (values) => {
        const result = await bookService.editBook(id, values);
        console.log(result)
        navigate("/");
    }
    return (
        <>
            <Formik
                initialValues={
                    {
                        book
                    }
                }

                validationSchema={Yup.object({
                    title: Yup.string()
                        .required("Please is not empty!"),
                    quantity: Yup.number()
                        .required("Please is not empty!")
                })}
                onSubmit={async (values) => {
                    await update(values);
                }}
            >
                <Form className="mx-auto mt-5 " style={{ width: "50%" }}>
                    <div className="mb-3 d-flex justify-content-center">
                        <h1>Edit  book</h1>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Title
                        </label>
                        <Field
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            name="title"
                        />
                        <ErrorMessage name="title" component='span' className="form-error" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Quantity
                        </label>
                        <Field
                            type="number"
                            className="form-control"
                            id="exampleInputPassword1"
                            name="quantity"
                        />
                        <ErrorMessage name="quantity" component='span' className="form-error" />

                    </div>
                    <button type="submit" className="btn btn-primary">
                        Update
                    </button>
                </Form>
            </Formik>
        </>
    );
}