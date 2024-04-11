import axios from 'axios'

// const GOOD_API_BASE_URL = 'https://jsonplaceholder.typicode.com/posts'
const GOOD_API_BASE_URL = 'http://localhost:8080/goods'

class GoodService {
    getGoods() {
        return axios.get(GOOD_API_BASE_URL)
    }
}

export default new GoodService()