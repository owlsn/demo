// 环境配置
// 根域名
let baseUrl = 'http://127.0.0.1:3000'
// 图片服务器域名
let imgBaseUrl = 'http://127.0.0.1:3000'

if (process.env.NODE_ENV === 'development') {
    baseUrl = 'http://127.0.0.1:3000/'
    imgBaseUrl = 'http://127.0.0.1:3000/'
} else if (process.env.NODE_ENV === 'production') {
    baseUrl = 'http://127.0.0.1:3000/'
    imgBaseUrl = 'http://127.0.0.1:3000/'
}

// let axiosConfig = {
//     // `url` 是请求的接口地址
//     url: '/',
  
//     // `method` 是请求的方法
//     method: 'get', // 默认值
  
//     // 如果url不是绝对路径，那么会将baseURL和url拼接作为请求的接口地址
//     // 用来区分不同环境，建议使用
//     baseURL: baseUrl,
  
//     // 用于请求之前对请求数据进行操作
//     // 只用当请求方法为‘PUT’，‘POST’和‘PATCH’时可用
//     // 最后一个函数需return出相应数据
//     // 可以修改headers
//     transformRequest: [function (data, headers) {
//       // 可以对data做任何操作
  
//       return data;
//     }],
  
//     // 用于对相应数据进行处理
//     // 它会通过then或者catch
//     transformResponse: [function (data) {
//       // 可以对data做任何操作
  
//       return data;
//     }],
  
//     // `headers` are custom headers to be sent
//     headers: {'X-Requested-With': 'XMLHttpRequest'},
  
//     // URL参数
//     // 必须是一个纯对象或者 URL参数对象
//     params: {
//       ID: 12345
//     },
  
//     // 是一个可选的函数负责序列化`params`
//     // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
//     paramsSerializer: function(params) {
//       return Qs.stringify(params, {arrayFormat: 'brackets'})
//     },
  
//     // 请求体数据
//     // 只有当请求方法为'PUT', 'POST',和'PATCH'时可用
//     // 当没有设置`transformRequest`时，必须是以下几种格式
//     // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
//     // - Browser only: FormData, File, Blob
//     // - Node only: Stream, Buffer
//     data: {
      
//     },
  
//     // 请求超时时间（毫秒）
//     timeout: 1000,
  
//     // 是否携带cookie信息
//     withCredentials: false, // default
  
//     // 统一处理request让测试更加容易
//     // 返回一个promise并提供一个可用的response
//     // 其实我并不知道这个是干嘛的！！！！
//     // (see lib/adapters/README.md).
//     adapter: function (config) {
//       /* ... */
//     },
  
//     // `auth` indicates that HTTP Basic auth should be used, and supplies credentials.
//     // This will set an `Authorization` header, overwriting any existing
//     // `Authorization` custom headers you have set using `headers`.
//     auth: {
//     },
  
//     // 响应格式
//     // 可选项 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
//     responseType: 'json', // 默认值是json
  
//     // `xsrfCookieName` is the name of the cookie to use as a value for xsrf token
//     xsrfCookieName: 'XSRF-TOKEN', // default
  
//     // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
//     xsrfHeaderName: 'X-XSRF-TOKEN', // default
  
//     // 处理上传进度事件
//     onUploadProgress: function (progressEvent) {
//       // Do whatever you want with the native progress event
//     },
  
//     // 处理下载进度事件
//     onDownloadProgress: function (progressEvent) {
//       // Do whatever you want with the native progress event
//     },
  
//     // 设置http响应内容的最大长度
//     maxContentLength: 2000,
  
//     // 定义可获得的http响应状态码
//     // return true、设置为null或者undefined，promise将resolved,否则将rejected
//     validateStatus: function (status) {
//       return status >= 200 && status < 300; // default
//     },
  
//     // `maxRedirects` defines the maximum number of redirects to follow in node.js.
//     // If set to 0, no redirects will be followed.
//     // 最大重定向次数？没用过不清楚
//     maxRedirects: 5, // default
  
//     // `httpAgent` and `httpsAgent` define a custom agent to be used when performing http
//     // and https requests, respectively, in node.js. This allows options to be added like
//     // `keepAlive` that are not enabled by default.
//     httpAgent: new http.Agent({ keepAlive: true }),
//     httpsAgent: new https.Agent({ keepAlive: true }),
  
//     // 'proxy' defines the hostname and port of the proxy server
//     // Use `false` to disable proxies, ignoring environment variables.
//     // `auth` indicates that HTTP Basic auth should be used to connect to the proxy, and
//     // supplies credentials.
//     // This will set an `Proxy-Authorization` header, overwriting any existing
//     // `Proxy-Authorization` custom headers you have set using `headers`.
//     // 代理
//     proxy: {
//       host: '127.0.0.1',
//       port: 9000,
//       auth: {
//       }
//     },
  
//     // `cancelToken` specifies a cancel token that can be used to cancel the request
//     // (see Cancellation section below for details)
//     // 用于取消请求？又是一个不知道怎么用的配置项
//     cancelToken: new CancelToken(function (cancel) {
//     })
//   }
  

module.exports = {
    baseUrl : baseUrl,
    imgBaseUrl : imgBaseUrl
    // axiosConfig : axiosConfig
}
