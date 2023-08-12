import { createClient } from 'pocketbase';

const client = createClient({
  url: 'http://127.0.0.1:8090',
});

export default client;