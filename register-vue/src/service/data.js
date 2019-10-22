import { getRequest, postRequest } from './axiosRequest'

export const getList = () => {
    return getRequest('/apis/users/get_json')
}

export const getJson = (data) => {
    return postRequest('/apis/users/list', data)
}

export const signData = (url, data) => {
    return postRequest(url, data)
}

export const userInfo = (userId) => {
    let id = userId
    var data = {
        'userId': userId
    }
    return postRequest('/apis/users/info', data)
}

export const login = (name, password, from, code) => {
    return postRequest('apis/users/login', { name: name, password: password, from: from, code: code })
}

export const verifyCode = () => {
    return postRequest('apis/users/verify_code')
}