const express = require('express');
const ping = require('ping');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());

const servers = [
  { name: 'Kyiv',        host: '8.8.8.8',        lat: 50.45, lng: 30.52 },
  { name: 'Frankfurt',   host: '8.8.8.8',        lat: 50.11, lng: 8.68 },
  { name: 'New York',    host: '1.1.1.1',        lat: 40.71, lng: -74.01 },
  { name: 'London',      host: '1.1.1.1',        lat: 51.51, lng: -0.13 },
  { name: 'Tokyo',       host: '8.8.8.8',        lat: 35.68, lng: 139.77 },
  { name: 'Singapore',   host: '1.1.1.1',        lat: 1.35,  lng: 103.82 },
  { name: 'Sydney',      host: '1.1.1.1',        lat: -33.87,lng: 151.21 },
  { name: 'San Francisco', host: '8.8.8.8',    lat: 37.77, lng: -122.42 }
];

app.get('/ping', async (req, res) => {
  const results = await Promise.all(
    servers.map(async s => {
      try {
        const res = await ping.promise.probe(s.host, { timeout: 3 });
        return { ...s, latency: res.alive ? Math.round(res.time) : 'ERR' };
      } catch {
        return { ...s, latency: 'ERR' };
      }
    })
  );
  res.json(results);
});

app.listen(PORT, () => console.log(`Backend on http://localhost:${PORT}`));