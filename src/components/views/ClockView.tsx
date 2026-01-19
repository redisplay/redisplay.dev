import { useEffect, useState } from "react";

interface ClockViewProps {
  data: {
    timezone?: string;
    background?: {
      type: string;
      from: string;
      to: string;
    };
  };
}

const ClockView = ({ data }: ClockViewProps) => {
  const [time, setTime] = useState(new Date());
  const [date, setDate] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now);
      
      // Format date
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      setDate(now.toLocaleDateString("en-US", options));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  };

  const backgroundStyle = data.background?.type === "gradient"
    ? {
        background: `linear-gradient(135deg, ${data.background.from} 0%, ${data.background.to} 100%)`,
      }
    : { backgroundColor: "#000000" };

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center text-white p-4"
      style={backgroundStyle}
    >
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold mb-2 font-mono">
          {formatTime(time)}
        </div>
        <div className="text-sm md:text-base opacity-90">{date}</div>
      </div>
    </div>
  );
};

export default ClockView;

