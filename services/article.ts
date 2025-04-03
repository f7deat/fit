import axios from "axios";

export async function apiArticleList(params: { current: number; pageSize: number }) {
    return axios(`https://dhhp.edu.vn/api/article/list`, { 
        params: {
            ...params,
            type: 2
        }
     });
}