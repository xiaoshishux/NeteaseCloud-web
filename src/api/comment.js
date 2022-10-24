import request from "@/utils/request";


// 获取歌单评论
export const getPlayComment = (queryInfo) => {
    return request({
        methods: 'get',
        url: '/comment/playlist',
        params: queryInfo
    })
}

// 获取专辑评论
export const getAlbumComment = (queryInfo) => {
    return request({
        methods: 'get',
        url: '/comment/album',
        params: queryInfo
    })
}
