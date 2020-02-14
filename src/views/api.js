import request from './request';
export function getGreetings(data) {
    return request({
        url: 'http://localhost:3002/server',
        method: 'post',
        data,
    });
}
export function getdata(data) {
    return request({
        url: '/news/index',
        method: 'post',
        data,
    });
}
export function getdata2(data) {
    return request({
        url: '/route1',
        method: 'post',
        data,
    });
}