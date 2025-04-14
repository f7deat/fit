import axios from "axios";

export async function apiGalleryList(params: { current: number; pageSize: number }) {
    return axios.get("https://dhhp.edu.vn/api/gallery/list", { 
        params: {
            ...params,
            departmentId: 4
        }
     });
}