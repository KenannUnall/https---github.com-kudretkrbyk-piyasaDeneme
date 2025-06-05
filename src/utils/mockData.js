// Coin listesi
export const mockCoins = [
  {
    id: 1,
    symbol: "BTCUSDT",
    name: "Bitcoin",
    created_at: "2025-05-18T23:27:44.407000",
    updated_at: "2025-05-18T23:27:44.407000"
  },
  {
    id: 2,
    symbol: "ETHUSDT",
    name: "Ethereum",
    created_at: "2025-05-18T23:27:44.407000",
    updated_at: "2025-05-18T23:27:44.407000"
  },
  {
    id: 3,
    symbol: "ADAUSDT",
    name: "Cardano",
    created_at: "2025-05-18T23:27:44.407000",
    updated_at: "2025-05-18T23:27:44.407000"
  },
  {
    id: 4,
    symbol: "BNBUSDT",
    name: "Binance Coin",
    created_at: "2025-05-18T23:27:44.407000",
    updated_at: "2025-05-18T23:27:44.407000"
  }
];

// Mum verileri oluşturma fonksiyonu
export const generateMockCandles = (coinId, timeframe = '1d', count = 100) => {
  const candles = [];
  const now = new Date();
  const basePrice = {
    1: 40000, // BTC
    2: 2000,  // ETH
    3: 0.5,   // ADA
    4: 300    // BNB
  }[coinId] || 100;

  for (let i = 0; i < count; i++) {
    const date = new Date(now);
    date.setDate(date.getDate() - (count - i));

    // Rastgele fiyat değişimi (-%2 ile +%2 arası)
    const change = (Math.random() * 4 - 2) / 100;
    const openPrice = basePrice * (1 + change);
    const closePrice = openPrice * (1 + (Math.random() * 4 - 2) / 100);
    const highPrice = Math.max(openPrice, closePrice) * (1 + Math.random() * 0.02);
    const lowPrice = Math.min(openPrice, closePrice) * (1 - Math.random() * 0.02);
    const volume = basePrice * (Math.random() * 1000 + 500);

    candles.push({
      id: i + 1,
      crypto_id: coinId,
      timeframe,
      open_time: date.toISOString(),
      open_price: openPrice,
      high_price: highPrice,
      low_price: lowPrice,
      close_price: closePrice,
      volume: volume,
      created_at: date.toISOString()
    });
  }

  return candles.reverse(); // En eski veriden en yeniye sırala
};

// Tahmin verileri oluşturma fonksiyonu
export const generateMockPredictions = (coinId, timeframe = '1d', count = 24) => {
  const predictions = [];
  const models = ['LSTM', 'GRU', 'Transformer'];
  const lastCandle = generateMockCandles(coinId, timeframe, 1)[0];
  const basePrice = lastCandle.close_price;

  for (let i = 0; i < count; i++) {
    const date = new Date(lastCandle.open_time);
    date.setHours(date.getHours() + (i + 1));

    models.forEach(model => {
      // Her model için farklı tahminler
      const modelChange = (Math.random() * 4 - 2) / 100; // -%2 ile +%2 arası
      const predictedPrice = basePrice * (1 + modelChange);
      
      predictions.push({
        id: predictions.length + 1,
        crypto_id: coinId,
        model_name: model,
        target_timestamp: date.toISOString(),
        predicted_price: predictedPrice,
        mse: Math.random() * 0.01, // 0-0.01 arası MSE
        r2_score: 0.8 + Math.random() * 0.2, // 0.8-1.0 arası R²
        created_at: new Date().toISOString()
      });
    });
  }

  return predictions;
};

// Son mum verilerini oluştur
export const mockLatestCandles = mockCoins.map(coin => {
  const candles = generateMockCandles(coin.id, '1d', 1);
  return {
    ...candles[0],
    previous_candle: generateMockCandles(coin.id, '1d', 2)[1]
  };
}); 