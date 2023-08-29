import axios from "axios";
export const getAll = async () => {
    try {
        const result = await axios.get('http://localhost:4444/patient');
        return result.data;
    } catch (e) {
        console.log(e);
    }

}