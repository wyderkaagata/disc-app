import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://disc-app-2500e.firebaseio.com/'
  });

  export default instance;