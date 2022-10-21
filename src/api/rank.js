import request from "@/utils/request";

// 获取所有榜单
export const getToplist = () => {
    return request({
        methods: "get",
        url: "/toplist"
    })
}

// 获取榜单概要 （非榜单详情）
export const getToplistDet = () => {
    return request({
        methods: "get",
        url: "/toplist/detail"
    })
}