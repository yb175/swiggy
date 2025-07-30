const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch'); // npm install node-fetch

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/restaurants', async (req, res) => {
  try {
    const swiggyURL = 'https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.69892&lng=77.1607391&carousel=true&third_party_vendor=1';

    const response = await fetch(swiggyURL, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
        'Accept': 'application/json',
      },
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('Error fetching Swiggy API:', err);
    res.status(500).json({ error: 'Failed to fetch data from Swiggy' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});