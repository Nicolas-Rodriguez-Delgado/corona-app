const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

// Health Check Endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'Healthy' });
});

// API Endpoint to Fetch Covid-19 Data
app.get('/api/data', async (req, res) => {
  try {
    const response = await axios.get(`https://api.corona-zahlen.org/germany`);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching data from the API' });
  }
});

app.get('/api/data/:state', async (req, res) => {
    const state = req.params.state;
    const stateAbbreviation = req.params.state.toUpperCase();
    try {
      const response = await axios.get(`https://api.corona-zahlen.org/states/${stateAbbreviation}`);
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching data from the API' });
    }
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
