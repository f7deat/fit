import axios from "axios";

export async function apiArticleList(params: { current: number; pageSize: number, categoryId?: number }) {
    return axios(`https://dhhp.edu.vn/api/article/list`, { 
        params: {
            ...params,
            departmentId: 4
        }
     });
}

export async function apiGetArticleByUrl(slug: string) {
    return axios.get(`https://dhhp.edu.vn/api/article/${slug}`);
}

export async function apiGetMetaArticle(slug: string) {
    return axios.get(`https://dhhp.edu.vn/api/post/meta/${slug}`);
}