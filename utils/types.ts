export type WebSocketData = {
  type: string;
  message: any;
};

export type SocketStatus = 'connecting' | 'connected' | 'error' | 'closed';
