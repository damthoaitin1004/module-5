import { GET_LIST_POST } from "../Types"
export const getListPost = (payload) => {
    return {
        type: GET_LIST_POST,
        payload,
    }
}