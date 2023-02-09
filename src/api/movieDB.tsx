import axios from 'axios';

//a qui saque los parametros de posman
const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '30615a56d997ae776d691f810bf89430',
    language: 'es-ES',
    page: 1,
  },
});

export default movieDB;
