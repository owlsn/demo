// import {
//     baseUrl
// } from './env'
const axios = require('axios')
axios.defaults.withCredentials = true
// const config = require('../config/env')

export const getRequest = (url, params) => {
    return axios({
        method: 'get',
        url: url,
        params: params,
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        }
    })
}

export const postRequest = (url, params) => {
    return axios({
        method: 'post',
        url: url,
        data: params,
        // transformRequest: [function (data) {
        //   let ret = '';
        //   for (const it in data) {
        //     ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
        //   }
        //   return ret;
        // }],
        headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Type': 'application/json'
        }
    })
}

// axios.get(config.baseUrl + '/users/get_json')
//     .then(function (response) {
//         console.log(response.data);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

// axios.post(config.baseUrl + '/users/list')
//     .then(function (response) {
//         response.data.forEach(element => {
//             console.log(element)
//         });
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

// export default async(url = '', data = {}, type = 'GET') => {
//     type = type.toUpperCase()
//     url = baseUrl + url

//     if(type === 'GET'){
//         let dataList = [], dataStr = ''
//         Object.keys(data).forEach(element => {
//             dataList.push(element + '=' + data[element])
//         })

//         if(dataList.length > 0){
//             dataStr = '?' + dataList.join('&')
//         }
//         url = url + dataStr
//     }
//     else if(type === 'POST'){
//         let requestParams = {
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             method: type,
//             data: JSON.stringify(data),
//             dataType: 'json'
//         }
//     }
// }