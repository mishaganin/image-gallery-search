import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 72a2ca284231755115720589c868be9c3caf5122bea2304c12cbdbefabffde1f'
  }
});