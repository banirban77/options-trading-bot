import { connectWebSocket } from "./websocket.js";
import { startTrading } from "./strategyEngine.js";
import { monitorPortfolio } from "./portfolioManager.js";
import express from "express";
import client from "prom-client";

const app = express();
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(await client.register.metrics());
});

app.listen(3000, () => console.log("API running on port 3000"));
connectWebSocket();
startTrading();
monitorPortfolio();
