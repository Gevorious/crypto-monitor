🪙 Crypto Order Monitor
A real-time WebSocket-powered monitoring dashboard for BTC/USDT orders on Binance. This project listens to streaming data from CryptoCompare, categorizes high-impact orders, and triggers alerts based on customizable thresholds.

---

🔧 Tech Stack
Next.js (App Router)

Zustand for state management

Tailwind CSS for UI styling

TypeScript for type safety

CryptoCompare WebSocket API for real-time market data

---

🚀 Features
✅ Live order stream with price, volume, and side (Buy/Sell)

✅ Categorized alerts:

✅ Alerts auto-expire after 1 minute

✅ Start/stop WebSocket stream globally

✅ Adjustable refresh rate

✅ Clean and responsive UI with alert highlighting

---

📁 Project Structure
bash
Copy
Edit
.
├── app/
│ ├── monitor/ # Live order monitoring UI
│ ├── alerts/ # Categorized alert display
│ └── layout.tsx # Shared layout (includes global nav)
├── components/ # Reusable UI components
├── stores/
│ ├── socketStore.ts # WebSocket connection & order stream
│ ├── orderStore.ts # order stream data
│ └── alertStore.ts # Alert handling & expiration logic
├── utils/
│ └── websocket.ts # WebSocketManager class
│ └── ...

---

How It Works
The app connects to CryptoCompare's WebSocket feed (TYPE 8).

Orders are pushed into local state via Zustand.

Matching logic categorizes alerts and stores them with timestamps.

A cleanup interval removes alerts older than 1 minute.

Navigation bar allows users to toggle the stream on/off.

---

🛠️ Setup & Development

1. Install dependencies
   npm install
2. Add environment variables
   Create .env.local file in root dir
   Add the following variables
   NEXT_PUBLIC_CRYPTOCOMPARE_API_KEY=549cb1b581930d63d1b2c41199379a46cc5877a8dfbb9cced34e763b8af16345
   NEXT_PUBLIC_CRYPTOCOMPARE_API=wss://streamer.cryptocompare.com/v2
3. Run the app
   npm run dev
