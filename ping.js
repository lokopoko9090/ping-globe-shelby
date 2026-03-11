// api/ping.js
import ping from 'ping';

export default async function handler(req, res) {
  const host = req.query.host || '8.8.8.8';

  try {
    const result = await ping.promise.probe(host, { timeout: 5 });
    const latency = result.alive ? Math.round(result.time) : -1;

    res.status(200).json({ host, latency, alive: result.alive });
  } catch (err) {
    res.status(500).json({ error: 'Ping error', details: err.message });
  }
}
