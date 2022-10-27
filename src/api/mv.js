import request from "@/utils/request";


// 获取 mv 详细
export const getMvDet = id => {
    return request({
        methods: 'get',
        url: '/mv/detail',
        params: {
            mvid: id
        }
    })
}

// 获取 mv 详细
export const getMvUrl = id => {
    return request({
        methods: 'get',
        url: '/mv/url',
        params: {
            id
        }
    })
}

// 获取 mv 评论
export const getMvComment = queryInfo => {
    return request({
        methods: 'get',
        url: '/comment/mv',
        params: queryInfo
    })
}

// 获取 相关 mv
export const getSimiMv = id => {
    return request({
        methods: 'get',
        url: '/simi/mv',
        params: {
            mvid: id
        }
    })
}