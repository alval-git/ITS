
import axiosInstance from "../components/axios";

export default class CatPostService {
    static async getAll() {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/categories/')
            return response.json()
        }catch (e){
            console.log(e)
        }
    }
}