import axios from "axios";
const baseUrl = "https://jsonplaceholder.typicode.com";

export class UserService{

    /**
     * List of users
     * @returns {Promise<AxiosResponse<any>>}
     */
    static async list(){
        let response = await axios.get(`${baseUrl}/users`);
        let users = response.data;

        for (let user of users) {
            let responseTask = await axios.get(`${baseUrl}/users/${user.id}/todos`);
            let tasks = responseTask.data;
            user.nbrTasks = tasks.length;
        }
        return users;
    }

    /**
     * Details of user
     * @param id
     * @returns {Promise<AxiosResponse<any>>}
     */
    static async details(id){
        let response = await axios.get(`${baseUrl}/users/${id}`);

        let responseTask = await axios.get(`${baseUrl}/users/${id}/todos`);
        let tasks = responseTask.data;
        response.data.nbrTasks = tasks.length;

        console.log(response);

        for (let task of tasks) {
            if(task.completed === true)
                response.data.taskCompleted += 1;
        }

        return response;
    }

    /**
     * Create user
     * @param data
     * @returns {Promise<AxiosResponse<any>>}
     */
    static async create(data){
        return await axios.post(`${baseUrl}/users`, data);
    }

    /**
     * Update one user
     * @param id
     * @param data
     * @returns {Promise<AxiosResponse<any>>}
     */
    static async update(id, data){
        return await axios.put(`${baseUrl}/users/${id}`, data);
    }

    /**
     * Delete one user
     * @param id
     * @returns {Promise<AxiosResponse<any>>}
     */
    static async delete(id){
        return await axios.delete(`${baseUrl}/users/${id}`);
    }
}
