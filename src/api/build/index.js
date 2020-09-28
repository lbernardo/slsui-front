import axios from 'axios';
export default {
    build: async (d) => {
        if (process.env.NODE_ENV != "development") {
            const {data} = await axios.post(`/api/build`, d);
            return data;
        }
        return "development frontend";
    }
}