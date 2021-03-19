import axios from "axios";
const baseUrl = "https://jsonplaceholder.typicode.com";

export default class TaskService{

    /**
     * Get list of tasks
     * @returns {Promise<AxiosResponse<any>>}
     */
    static async list(limit = null){
        let call = await axios.get(`${baseUrl}/todos`);
        //Récupération des tasks (https://jsonplaceholder.typicode.com/todos)
        let tasks = limit !== null ? call.data.slice(0, limit) : call.data;
        //Récupération des utilisateurs (https://jsonplaceholder.typicode.com/users)
        let users = await axios.get(`${baseUrl}/users`);

        //Correspondance entre les tasks et les utilisateurs
        for (let task of tasks) {
            for (const user of users.data) {
                if(user.id === task.userId)
                    task.user = user;
            }
        }

        return tasks
        /*return tasks.map(task => {
            task.user = users.data.find(user => user.id === task.userId);
            return task;
        });*/
    }

    /**
     * Create task
     * @param data
     * @returns {Promise<AxiosResponse<any>>}
     */
    static async create(data){
        return await axios.post(`${baseUrl}/todos`, data);
    }

    /**
     * Details of task
     * @param id
     * @returns {Promise<AxiosResponse<any>>}
     */
    static async details(id){
        return await axios.get(`${baseUrl}/todos/${id}`);
    }

    /**
     * Update task
     * @param id
     * @param data
     * @returns {Promise<AxiosResponse<any>>}
     */
    static async update(id, data){
        return await axios.put(`${baseUrl}/todos/${id}`, data);
    }

    /**
     * Delete one task
     * @param id
     * @returns {Promise<AxiosResponse<any>>}
     */
    static async delete(id){
        return await axios.delete(`${baseUrl}/todos/${id}`);
    }
}

