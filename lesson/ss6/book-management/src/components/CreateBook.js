import { Field, Form, Formik,ErrorMessage } from 'formik';
import { useEffect } from "react";
import * as bookService from "../services/BookService";
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup"

export const CreateBook = () => {
  const navigate = useNavigate();
 

  const bookCreate = async (values) => {
    await bookService.addBook(values);
    navigate("/");
  }
  return (
    <>
      <Formik
        initialValues={{
          title: '',
          quantity: ""
        }}
        validationSchema={Yup.object({
          title: Yup.string()
            .required("Please is not empty!"),
          quantity: Yup.number()
            .required("Please is not empty!")
        })}
        onSubmit={
          async (values) => {
            await bookCreate(values);
          }
        }
      >
        <Form className="mx-auto mt-5 " style={{ width: "50%" }}>
          <div className="mb-3 d-flex justify-content-center">
            <h1>Add a new book</h1>
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
            Add
          </button>
        </Form>
      </Formik>
    </>
  );

}
