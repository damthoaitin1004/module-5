import { Field, Form, Formik, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import { Await, BrowserRouter, Link, useNavigate, useParams } from "react-router-dom";
import * as bookService from "../services/BookService";
import * as Yup from "yup"


export const EditBook = () => {
    const navigate = useNavigate();

    const { id } = useParams();

    const [book, setBook] = useState();
    const getById = async () => {
        const currentBook = await bookService.getById(id);
        setBook(prev => ({...prev,...currentBook}));
        console.log(currentBook);
    }
    useEffect(() => {
        if(book === undefined) {
            getById();
        }
    
    }, [book])


    const update = async (values) => {
        const result = await bookService.editBook(id, values);
        console.log(result)
        navigate("/");
    }
    return (
        <> {book !== undefined ?
            <Formik
                initialValues={
                    {
                        title: book.title,
                        quantity: book.quantity
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
            </Formik>: ""}
        </>
    );
}