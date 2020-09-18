import axios from 'axios';
export default {
    build: async (d) => {
        if (process.env.NODE_ENV != "development") {
            const {data} = await axios.post(`${process.env.VUE_APP_API_URL}/api/build`, d);
            return data;
        }
        return "development frontend";
    }
}