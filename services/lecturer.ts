import axios from "axios";

export async function apiLecturerList() {
    return axios("https://dhhp.edu.vn/api/user/lecturer/list", {
        params: {
            pageSize: 100,
            departmentId: 4,
        }
    });
}
