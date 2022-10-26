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


// 获取歌手详细及单曲
export const getArtists = (id) => {
    return request({
        methods: 'get',
        url: '/artists',
        params: { id: id }
    })
}
// 获取歌手专辑
export const getSingerAl = (queryInfo) => {
    return request({
        methods: 'get',
        url: '/artist/album',
        params: queryInfo
    })
}


// 获取歌手MV
export const getSingerMv = (id) => {
    return request({
        methods: 'get',
        url: '/artist/mv',
        params: {
            id,
            limit: 50
        }
    })
}

// 获取歌手MV
export const getSingerDesc = (id) => {
    return request({
        methods: 'get',
        url: '/artist/desc',
        params: {
            id
        }
    })
}