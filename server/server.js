const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Define a route to fetch data from the API
app.get('/api/data', async (req, res) => {
  try {
    const response = await axios.get('https://disease.sh/v3/covid-19/all');
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching data from the API' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
