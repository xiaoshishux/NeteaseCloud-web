import request from "@/utils/request";


// 获取歌单评论
export const getPlayComment = (queryInfo) => {
    return request({
        methods: 'get',
        url: '/comment/playlist',
        params: queryInfo
    })
}