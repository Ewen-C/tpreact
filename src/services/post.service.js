import axios from "axios";
const baseUrl = "https://jsonplaceholder.typicode.com";

export default class PostService{

    /**
     * Get list of posts
     * @returns {Promise<AxiosResponse<any>>}
     */
    static async list(limit = null){
        let call = await axios.get(`${baseUrl}/posts`);
        //Récupération des posts
        let posts = limit !== null ? call.data.slice(0, limit) : call.data;
        //Récupération des utilisateurs
        let users = await axios.get(`${baseUrl}/users`);

        //Correspondance entre les posts et les utilisateurs
        for (let post of posts) {
            for (const user of users.data) {
                if(user.id === post.userId)
                    post.user = user;
            }
        }

        return posts
        /*return posts.map(post => {
            post.user = users.data.find(user => user.id === post.userId);
            return post;
        });*/
    }

    /**
     * Create post
     * @param data
     * @returns {Promise<AxiosResponse<any>>}
     */
    static async create(data){
        return await axios.post(`${baseUrl}/posts`, data);
    }

    /**
     * Details of post
     * @param id
     * @returns {Promise<AxiosResponse<any>>}
     */
    static async details(id){
        return await axios.get(`${baseUrl}/posts/${id}`);
    }

    /**
     * Update post
     * @param id
     * @param data
     * @returns {Promise<AxiosResponse<any>>}
     */
    static async update(id, data){
        return await axios.put(`${baseUrl}/posts/${id}`, data);
    }

    /**
     * Delete one post
     * @param id
     * @returns {Promise<AxiosResponse<any>>}
     */
    static async delete(id){
        return await axios.delete(`${baseUrl}/posts/${id}`);
    }
}

