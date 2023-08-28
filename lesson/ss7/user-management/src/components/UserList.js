import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { GET_ALL_USER_LIST,DELETE_USER } from '../Types';

const UserList = () => {
    const users = useSelector(state => state.userList)
    const dispatch = useDispatch();
    const getUserList = () => {
        dispatch({
            type: GET_ALL_USER_LIST,

        })
    }
    const deleteUser = (id) => {
        dispatch({
            type: DELETE_USER,
            payload: id
        })
    }

    return (
        <div>
            <h1>User list</h1>
            <button onClick={() => getUserList()}  type="button">Get users</button>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Webside</th>
                    <th>Action</th>
                </tr>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.website}</td>
                        <td><button onClick={() => deleteUser(`${user.id}`)}>Delete</button></td>
                    </tr>
                ))}
            </table>
        </div>
    );
}
export default UserList;