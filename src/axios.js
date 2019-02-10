import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080/'
});

instance.defaults.headers.common['x-auth'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzQ5Yzk1ODRhODM0MDFjZDFmYjI3NjQiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTQ4MzM5NjcwfQ.lrcCGKY7QR2nZBhAjc4FbLNHqT2OjnvAMVq1x9K_OI4';

// instance.interceptors.request...

export default instance;