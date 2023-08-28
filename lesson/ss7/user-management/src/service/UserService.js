import axios from "axios";
export const getAll = async () => {
    try {
        const result = await axios.get(`http://localhost:4444/users`);
        return result.data;
    }
    catch (e) {
        console.log(e);
    }
}
export const removeUser = async (id) => {
    try {
        const result = await axios.delete(`http://localhost:4444/users/${id}`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
}