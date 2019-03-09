import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080'
});

instance.defaults.headers.common['x-auth'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzQ5Yzk1ODRhODM0MDFjZDFmYjI3NjQiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTQ4MzM5NTQ1fQ.eya8APZs5pYSUeb--UpuIajXHrlqOFT9_2wPd7xAM0M';
// instance.interceptors.request...

export default instance;