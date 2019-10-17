import {getRequest, postRequest} from './axios'

export const getList = () => {
    return getRequest('/users/get_json')
}

export const getJson = (data) => {
    return postRequest('/users/list', data)
}