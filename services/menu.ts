import axios from "axios";

export async function apiMenuList() {
    return axios.get(`https://dhhp.edu.vn/api/menu/list`, {
        params: {
            departmentId: 4,
            current: 1,
            pageSize: 1000,
            locale: 'vi-VN'
        }
    });
}