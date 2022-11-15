
import axios from 'axios'

export const getCategories = async () => {
    // const proba = (await axios.get(process.env.REACT_APP_BACKEND_ROUTE + 'category')).data;
    // console.log("OVO TREBA ISPISAT" + proba);
    return (await axios.get(process.env.REACT_APP_BACKEND_ROUTE + 'category')).data;
};