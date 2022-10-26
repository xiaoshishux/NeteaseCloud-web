import request from "../utils/request.js"

// 获取新碟详细
export const getNewSongInfo = (id) => {
    return request({
        methods: 'get',
        url: '/album',
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

// 获取歌单分类
export const getPlaylistCat = () => {
    return request({
        methods: 'get',
        url: `/playlist/catlist`,
    })
}

// 获取歌单（网友精选单）
export const getPlaylistTop = (queryInfo) => {
    return request({
        methods: 'get',
        url: `/top/playlist`,
        params: queryInfo
    })
}

// 获取歌单详情 
export const getPlaylistDet = (value) => {
    return request({
        methods: 'get',
        url: `/playlist/detail`,
        params: {
            id: value
        }
    })
}
// 获取歌曲详情
export const getSongsDet = (ids) => {
    return request({
        methods: 'get',
        url: `/song/detail`,
        params: { ids }
    })
}

// 获取歌词
export const getLyric = (id) => {
    return request({
        methods: 'get',
        url: `/lyric`,
        params: { id }
    })
}