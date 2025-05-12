export type SocketStore = {
  shouldConnect: boolean;
  setShouldConnect: (value: boolean) => void;
  toggleConnection: () => void;
};
