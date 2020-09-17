import axios from 'axios';
export default {
    build(data) {
        if (process.env.NODE_ENV != "development") {
            axios.post(`${process.env.VUE_APP_API_URL}/api/build`, data);
        }
    }
}