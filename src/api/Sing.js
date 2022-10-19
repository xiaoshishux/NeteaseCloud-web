import request from "../utils/request.js"

// 获取新碟详细
export const getNewSongInfo = (id) => {
    return request({
        methods: 'get',
        url: "/album",
        params: { id }
    })
}
// 获取专辑歌手描述
export const getAlbumDet = value => {
    return request({
        methods: 'get',
        url: `/artist/desc`,
        params: {
            id: value
        }
    })
}
// 获取相似歌手
export const getSimiSinger = (value) => {
    return request({
        methods: 'get',
        url: `/simi/artist`,
        params: {
            id: value
        }
    })
}