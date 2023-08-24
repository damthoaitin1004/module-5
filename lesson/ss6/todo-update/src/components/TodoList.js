import { useEffect, useState } from "react";
import * as todoService from "../services/TodoService";
import { Form, Formik, Field } from 'formik';
export const TodoList = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        getAll();
    }, [])
    const getAll = async () => {
        const result = await todoService.getAll();
        setTodos((prev) => result);
    }
    const todoCreate = async (values) => {
        await todoService.addTodo(values);
        getAll();
    }
    return (
        <>
            <div
                className="mx-auto shadow-lg p-3 mb-5 bg-body rounded"
                style={{ width: "80%", marginTop: "2rem" }}
            >
                <div className="d-flex align-items-center justify-content-center">
                    <h1>Todo</h1>
                </div>
                <Formik
                    initialValues={{
                        userId: 1,
                        title: '',
                        completed: false
                    }}
                    onSubmit={
                        async (values) => {
                            await todoCreate(values);
                        }
                    }
                >
                    <Form className="d-flex justify-content-center mb-3" role="search">
                        <Field
                            className="form-control "
                            style={{ width: "30%" }}
                            type="text"
                            name="title"
                        />
                        <button className="btn btn-outline-primary" type="submit">
                            Add
                        </button>
                    </Form>
                </Formik>
                <div
                    className="d-flex align-items-center justify-content-center mx-auto"
                    style={{ width: "70%" }}
                >
                    <table className="table table-light table-bordered table-striped-columns table-hover table-responsive-sm text-center">
                        <tbody>
                            <tr>
                                <th>UserId</th>
                                <th>Title</th>
                                <th>Completed</th>
                            </tr>
                            {
                                todos.map((todo) => (
                                    <tr key={todo.id}>
                                        <td>{todo.userId}</td>
                                        <td>{todo.title}</td>
                                        <td>{todo.completed ? 'true' : 'false'}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
}
