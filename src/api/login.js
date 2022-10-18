import request from "../utils/request.js"


// 手机号登录
export const loginPh = (ph, md5_pw) => {
    return request({
        methods: 'get',
        url: `/login/cellphone`,
        params: {
            phone: ph,
            md5_password: md5_pw
        }
    })
}