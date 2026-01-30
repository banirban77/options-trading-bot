import { aiApproveTrade } from "./aiEngine.js";
import { placeOrder } from "./brokerAngel.js";

export function startTrading() {
  console.log("Starting strategy engine...");
  setInterval(async () => {
    const trade = { symbol: "NIFTY23FEB", strategy: "IRON_FLY" };
    const approved = aiApproveTrade(trade);
    if (approved) {
      console.log("Trade approved by AI. Placing order...");
      await placeOrder(trade);
    } else {
      console.log("Trade rejected by AI.");
    }
  }, 5000);
}
