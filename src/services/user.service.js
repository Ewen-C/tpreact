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
            let responsePost = await axios.get(`${baseUrl}/users/${user.id}/posts`);
            let posts = responsePost.data;
            user.nbrPosts = posts.length;
        }
        return users;
    }

    /**
     * Details of user
     * @param id
     * @returns {Promise<AxiosResponse<any>>}
     */
    static async details(id){
        return await axios.get(`${baseUrl}/users/${id}`);
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
