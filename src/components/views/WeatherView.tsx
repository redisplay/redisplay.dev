interface WeatherViewProps {
  data: {
    location: {
      name: string;
      subtext?: string;
    };
    background?: {
      type: string;
      from: string;
      to: string;
    };
  };
}

const WeatherView = ({ data }: WeatherViewProps) => {
  // Simulated weather data
  const weatherData = {
    temperature: 22,
    condition: "Partly Cloudy",
    icon: "⛅",
    humidity: 65,
    windSpeed: 12,
  };

  const backgroundStyle = data.background?.type === "gradient"
    ? {
        background: `linear-gradient(135deg, ${data.background.from} 0%, ${data.background.to} 100%)`,
      }
    : { backgroundColor: "#90EE90" };

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center text-white p-4"
      style={backgroundStyle}
    >
      <div className="text-center">
        <div className="text-4xl mb-1">{weatherData.icon}</div>
        <div className="text-5xl font-bold mb-1">{weatherData.temperature}°</div>
        <div className="text-base mb-4 opacity-90">{weatherData.condition}</div>
        <div className="mt-4 flex gap-4 text-xs">
          <div>
            <div className="opacity-75">Humidity</div>
            <div className="font-semibold">{weatherData.humidity}%</div>
          </div>
          <div>
            <div className="opacity-75">Wind</div>
            <div className="font-semibold">{weatherData.windSpeed} km/h</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherView;

