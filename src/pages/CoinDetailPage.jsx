import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactApexChart from "react-apexcharts";
import mockData from "../utils/mockData.json";

const CoinDetailPage = () => {
  const { id } = useParams();
  const [coinData, setCoinData] = useState(null);
  const [candleData, setCandleData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timeframe, setTimeframe] = useState("1d");

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const coinId = parseInt(id);
        const coin = mockData.cryptocurrencies.find((c) => c.id === coinId);
        const candles = mockData.candle_data
          .filter((c) => c.crypto_id === coinId && c.timeframe === timeframe)
          .sort((a, b) => new Date(b.open_time) - new Date(a.open_time))
          .slice(0, 300);

        setCoinData(coin);
        setCandleData(candles);
        setLoading(false);
      } catch (error) {
        console.error("Veri alınamadı:", error);
        setLoading(false);
      }
    };

    fetchCoinData();
  }, [id, timeframe]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[80vh]">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#14C2A3]" />
      </div>
    );
  }

  if (!coinData) {
    return (
      <div className="container mx-auto p-8">
        <p className="text-2xl text-red-500 font-bold">Coin bulunamadı</p>
      </div>
    );
  }

  const chartSeries = [
    {
      data: candleData.map((candle) => ({
        x: new Date(candle.open_time),
        y: [
          candle.open_price,
          candle.high_price,
          candle.low_price,
          candle.close_price,
        ],
      })),
    },
  ];

  const chartOptions = {
    chart: {
      type: "candlestick",
      height: 600,
      toolbar: {
        show: true,
        tools: {
          zoom: true,
          zoomin: true,
          zoomout: true,
          reset: true,
          pan: true,
        },
        autoSelected: "zoom",
      },
      zoom: {
        type: "xy",
        enabled: true,
        autoScaleYaxis: true,
      },
    },
    title: {
      text: "Fiyat Grafiği",
      align: "left",
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
    theme: {
      mode: "dark",
    },
  };

  const latestCandle = candleData[0];
  const previousCandle = candleData[1];
  const priceChange = previousCandle
    ? ((latestCandle.close_price - previousCandle.close_price) /
        previousCandle.close_price) *
      100
    : 0;

  return (
    <div className="w-full min-h-screen bg-[#0c1226] py-10">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-3 w-full">
        <div className="bg-[#141A31] rounded-xl shadow-lg w-full p-4">
          <h1 className="text-3xl font-bold text-white mb-4">
            {coinData.name}{" "}
            <span className="text-[#14C2A3]">
              ({coinData.symbol.toUpperCase()})
            </span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-[#12203a] rounded-lg p-4 flex flex-col items-start">
              <span className="text-gray-400 text-sm">Son Fiyat</span>
              <span className="text-2xl font-bold text-white">
                ${latestCandle?.close_price.toFixed(2)}
              </span>
            </div>
            <div className="bg-[#12203a] rounded-lg p-4 flex flex-col items-start">
              <span className="text-gray-400 text-sm">24s Değişim</span>
              <span
                className={`text-2xl font-bold ${
                  priceChange > 0 ? "text-green-400" : "text-red-400"
                }`}
              >
                {priceChange > 0 ? "+" : ""}
                {priceChange.toFixed(2)}%
              </span>
            </div>
            <div className="bg-[#12203a] rounded-lg p-4 flex flex-col items-start">
              <span className="text-gray-400 text-sm">24s Hacim</span>
              <span className="text-2xl font-bold text-white">
                ${latestCandle?.volume.toLocaleString()}
              </span>
            </div>
            <div className="bg-[#12203a] rounded-lg p-4 flex flex-col items-start">
              <span className="text-gray-400 text-sm">Son Güncelleme</span>
              <span className="text-lg text-white">
                {new Date(coinData.updated_at).toLocaleString("tr-TR")}
              </span>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#141A31] rounded-xl shadow-lg p-6">
          <div className="flex item-start justify-between">
            {" "}
            <h2 className="text-xl font-bold text-white mb-4">
              Candlestick Grafik
            </h2>
            <div className=" ">
              <label className="block text-gray-300 mb-2 font-bold">
                Zaman Dilimi
              </label>
              <select
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
                className="w-full md:w-64 p-2 rounded bg-[#12203a] text-white border border-[#14C2A3] focus:outline-none focus:ring-2 focus:ring-[#14C2A3] mb-4"
              >
                <option value="1m">1 Dakika</option>
                <option value="5m">5 Dakika</option>
                <option value="15m">15 Dakika</option>
                <option value="1h">1 Saat</option>
                <option value="4h">4 Saat</option>
                <option value="1d">1 Gün</option>
              </select>
            </div>
          </div>

          <div className="mb-4 border-b border-[#14C2A3]/30"></div>
          <ReactApexChart
            options={chartOptions}
            series={chartSeries}
            type="candlestick"
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default CoinDetailPage;
