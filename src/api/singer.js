import request from "@/utils/request";


// 获取歌手
export const getSingerType = (queryInfo) => {
    return request({
        methods: 'get',
        url: '/artist/list',
        params: queryInfo,
    })
}
// 获取热门歌手
export const getHotSinger = (queryInfo) => {
    return request({
        methods: 'get',
        url: '/top/artists',
        params: queryInfo,
    })
}