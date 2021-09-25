import axios from 'axios'

axios.defaults.baseURL = "http://1.117.165.21:7002"

axios.interceptors.request.use(config=>{
    return config
})

axios.interceptors.response.use(config=>{
    return config
})


export default axios