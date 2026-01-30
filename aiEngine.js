export function aiApproveTrade(trade) {
  const aiScore = Math.random();
  console.log(`AI Score for ${trade.strategy}: ${aiScore.toFixed(2)}`);
  return aiScore > 0.6;
}
