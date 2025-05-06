import axios from "axios";

export async function apiLecturerList() {
    return axios("https://dhhp.edu.vn/api/user/lecturer/list", {
        params: {
            pageSize: 1000,
            departmentId: 4,
            current: 1
        }
    });
}
