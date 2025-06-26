import axios from "axios";

export async function apiCategoryPosts(params: { current: number; pageSize: number; categoryId: string }) {
    return axios.get(`https://dhhp.edu.vn/api/category/posts`, { 
        params: {
            ...params,
            departmentId: 4,
            categoryId: params.categoryId
        }
    });
}

export async function apiGetCategoryById(id: string) {
    return axios.get(`https://dhhp.edu.vn/api/category/${id}`);
}