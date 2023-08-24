import { useEffect, useState } from "react";
import * as bookService from "../services/BookService";
import { BrowserRouter, Link } from "react-router-dom";
export const BookList = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        getAll();
    }, [])
    const getAll = async () => {
        const result = await bookService.getAll();
        setBooks((prev) => result);
    }
    const bookDelete = async (id) => {
        await bookService.deleteBook(id);
        alert("Delete success! ")
        getAll();
    }
    return (
        <>
            <div className="mx-auto mt-4" style={{ width: "50%" }}>
                <div className="d-flex justify-content-center">
                    <h1 style={{ marginRight: "10%" }}>Library</h1>
                    <Link to={"/create"} className="btn btn-outline-primary">add</Link>
                </div>
                <table className="table table-dark table-bordered table-striped-columns table-hover table-responsive-sm text-center ">
                    <tbody>
                        <tr>
                            <th>Title</th>
                            <th>Quantity</th>
                            <th>Edit</th>
                            <th>Delete</th>

                        </tr>
                        {
                            books.map((book) => (
                                <tr key={book.id}>
                                    <td>{book.title}</td>
                                    <td>{book.quantity}</td>
                                    <td><Link to={`/edit/${book.id}`} >Edit</Link>
                                    </td>
                                    <td><button onClick={() =>
                                        bookDelete(`${book.id}`)
                                    } className="btn btn-outline-danger">Delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </>
    );

}