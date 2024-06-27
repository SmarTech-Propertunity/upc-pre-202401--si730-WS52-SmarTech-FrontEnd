import axios from "axios";

export class UserApiService {
    static async getAll() {
        return await axios.get('http://localhost:3000/users')
    }

    static async getUserById(id) {
        return await axios.get(`http://localhost:3000/users?id=${id}`)
    }

}