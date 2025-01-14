const apiConfig = {
    baseURL: process.env.NODE_ENV === 'production' 
      ? 'https://api.production.com/api'
      : 'http://localhost:5000/api',
  };
  
  export default apiConfig;