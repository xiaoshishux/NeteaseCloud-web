import request from "../utils/request.js";


// 获取轮播图

export const getBannerImg = () => {
    return request({
        method: 'get',
        url: '/banner?type=0',
    })
}