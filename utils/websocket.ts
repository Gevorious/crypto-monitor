import { SocketStatus, WebSocketData } from './types';

class WebSocketManager {
  private socket: WebSocket | null = null;
  private url: string;

  constructor(
    private apiKey: string,
    private onData: (data: WebSocketData) => void,
    private onStatusChange?: (status: SocketStatus) => void,
  ) {
    this.url = `${process.env.NEXT_PUBLIC_CRYPTOCOMPARE_API}?api_key=${this.apiKey}`;
  }

  connect() {
    if (this.socket) return;

    this.onStatusChange?.('connecting');
    this.socket = new WebSocket(this.url);

    this.socket.onopen = () => {
      this.onStatusChange?.('connected');
      const message = JSON.stringify({
        action: 'SubAdd',
        subs: ['8~Binance~BTC~USDT'],
      });

      this.socket!.send(message);
    };

    this.socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        this.onData({ message: data });
      } catch (err) {
        console.error('❌ Failed to parse WebSocket message');
      }
    };

    this.socket.onerror = () => {
      this.onStatusChange?.('error');
    };
  }

  disconnect() {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
      this.onStatusChange?.('closed');
    }
  }
}

export default WebSocketManager;
