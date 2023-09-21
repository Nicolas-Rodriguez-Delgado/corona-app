import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 6, // Number of virtual users (concurrent requests)
  duration: '10s', // Duration of the test
};

export default function () {
  http.get('http://localhost:3001/api/data'); // Adjust the URL if needed
  sleep(0.2); // Adjust the sleep time to achieve the desired requests per second
}