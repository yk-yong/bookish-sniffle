import { addEventListener, fetch, NetInfoSubscription } from "@react-native-community/netinfo";
import { Logger } from "../logger";

class NetworkInfo {
  static TAG = "NetworkInfo";
  private static unsubscribeEventListener: NetInfoSubscription | null = null;

  static onConnectivityChange?: (isConnected: boolean) => void = () => {};

  static init() {
    // Initialize network info
    this.unsubscribeEventListener = addEventListener(state => {
      Logger.log(this.TAG, "Initialize Network Event Listener:", state);
      const isConnected = state.isConnected;

      if (NetworkInfo.onConnectivityChange) {
        NetworkInfo.onConnectivityChange(Boolean(isConnected));
      }
    });
  }

  static async isConnected(): Promise<boolean> {
    // Check if the device is connected to the network
    return new Promise(async resolve => {
      try {
        const state = await fetch();
        Logger.log(this.TAG, "NetworkInfo isConnected:", state.isConnected);
        resolve(Boolean(state.isConnected));
      } catch (error) {
        Logger.error(this.TAG, "NetworkInfo isConnected error:", error);
        resolve(false);
      }
    });
  }

  static unsubscribe() {
    if (this.unsubscribeEventListener) {
      this.unsubscribeEventListener();
      this.unsubscribeEventListener = null;
    }
  }
}

export default NetworkInfo;
