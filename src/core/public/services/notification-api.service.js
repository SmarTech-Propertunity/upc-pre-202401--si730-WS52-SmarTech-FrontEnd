import axios from "axios";

export class NotificationApiService {
    static async getAll() {
        return await axios.get('http://localhost:3000/notifications')
    }

    static async getNotificationById(user) {
        return await axios.get(`http://localhost:3000/notifications?user_receiver=${user}`)
    }

}
