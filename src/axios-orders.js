import axios from 'axios';

const instance = axios.create({
  baseURL: "https://react-my-kingdom-default-rtdb.firebaseio.com/"
});

export default instance;