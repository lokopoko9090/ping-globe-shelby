# Global Ping Monitor + Shelby

Visual monitoring of latency (pings) to servers around the world using a 3D globe (globe.gl).

## Features
- Real ICMP pings via a Node.js backend
- 3D globe with animated arcs (green <80 ms, yellow <150 ms, red >150 ms)
- Automatic ping execution every 45 seconds
- History of recent pings stored in local storage
- Labels with exact latency values displayed on the points
- Prepared for integration with Shelby (decentralized storage)
- Export results in JSON format

## How to Run
1. Go to the `backend` folder:
# Global Ping Monitor + Shelby Integration (WIP)

This is a demo project for monitoring global latency using a 3D globe (globe.gl) + preparation for storing results in **Shelby** (verifiable storage on Aptos).

### Concept
- Collect real ICMP pings from Ukraine (Ivano-Frankivsk) to various locations.
- Display on the globe with colored arcs and latency labels.
- Store results (JSON with locations + latencies) as verifiable data in Shelby (testnet).
- Sign transactions via **Petra Wallet** (Aptos) to generate commitments and on-chain proofs.

### Current Status
- Globe, pings, history, JSON export — fully working.
- **Petra Wallet** connection — in progress (localhost restrictions, waiting for Early Access testnet approval).
- Shelby upload/download — simulated (will be replaced with real SDK after access is granted).

### How to Run

1. Backend (pings):
   ```bash
   cd backend
   node server.js
