import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 6, // Number of virtual users
  duration: '1s', // Duration of the test
};

export default function () {
  http.get('http://localhost:3001/api/data');
  sleep(0.2); // Sleep time to test 5 request per second
}