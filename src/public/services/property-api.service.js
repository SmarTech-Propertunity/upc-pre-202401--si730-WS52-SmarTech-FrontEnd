import axios from "axios";

export class PropertyApiService {
    static async getAll() {
        return await axios.get('http://localhost:3000/properties')
    }
    static async getFiltered() {
        return await axios.get('http://localhost:3000/properties?_start=0&_limit=5')
    }
}

