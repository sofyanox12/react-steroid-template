import axios from 'axios'
import { appConfig } from 'shared/setups/appConfig'

const http = axios.create({
    baseURL: appConfig.API_BASE_URL,
})

http.interceptors.request.use((config) => {
    return config
})

export default http
