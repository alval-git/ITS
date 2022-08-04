
import axiosInstance from "../components/axios";



export default class PostService {
    static async getAll() {
    try{
        const response = await axiosInstance.get('/api/posts/')
        return response.data
    }catch (e){
        return e
    }

    }

    static async getByCat(id) {
    try{
        const response = await axiosInstance.get('/api/posts/?categories='+id)

        return response.data
    }catch (e){
        return e
    }

    }

    static async getBySlug(slug) {
    try{
        const response = await axiosInstance.get('/api/posts/'+ slug)
        return response.data

    }catch (e){
        console.log(e)
    }
    }

    static async getUser() {
        try {
            const response = await axiosInstance.get('/api/user/')
            return response


        } catch (e) {
            console.log(e)
        }
    }
    static async getNewPosts() {
        try {
            const response = await axiosInstance.get('/api/new/posts/')
            return response.data


        } catch (e) {
            console.log(e)
        }
    }
}