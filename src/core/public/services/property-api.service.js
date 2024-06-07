import axios from "axios";

export class PropertyApiService {
    static async getAll() {
        return await axios.get('http://localhost:3000/properties')
    }

    static async getFiltered(minValue, maxValue, propertyType, propertyDistrict) {
        let url = `http://localhost:3000/properties?`;
        if (minValue !== null) {
            url += `&precio_dolares_gte=${minValue}`;
        }
        if (maxValue !== null) {
            url += `&precio_dolares_lte=${maxValue}`;
        }
        if (propertyDistrict !== "") {
            url += `&distrito=${propertyDistrict}`;
        }
        if (propertyType !== "") {
            url += `&tipo_propiedad=${propertyType}`;
        }
        console.log(url);
        return await axios.get(url)
    }


    static async getPropertyById(id) {
        return await axios.get(`http://localhost:3000/properties/${id_propiedad}`)
    }

    static async getImages(){
        return await axios.get('http://localhost:3000/properties/')
    }

    static GetResponse()
    {
        return axios.get('http://localhost:3000/properties/')
    }
}

