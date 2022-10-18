import request from "../utils/request.js";


// 获取轮播图

export const getBannerImg = () => {
    return request({
        method: 'get',
        url: '/banner?type=0',
    })
}


export const getNewSong = (info) => {
    return request({
        method: 'get',
        url: '/album/new',
        params: info
    })
}

