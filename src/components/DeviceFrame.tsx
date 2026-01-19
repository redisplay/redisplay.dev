import { useEffect, useState } from "react";
import ClockView from "./views/ClockView";
import WeatherView from "./views/WeatherView";
import StaticTextView from "./views/StaticTextView";
import ImageView from "./views/ImageView";

interface View {
  id: string;
  type: string;
  data: any;
  rotateAfter: number;
}

const sampleViews: View[] = [
  {
    id: "clock-1",
    type: "clock",
    rotateAfter: 6000,
    data: {
      timezone: "Europe/Rome",
      background: {
        type: "gradient",
        from: "#000000",
        to: "#0f9b0f",
      },
    },
  },
  {
    id: "weather-1",
    type: "weather",
    rotateAfter: 7000,
    data: {
      location: {
        name: "Milano",
        subtext: "Lombardia, Italy",
        lat: 45.4642,
        lon: 9.1914,
      },
      hoursToShow: 6,
      background: {
        type: "gradient",
        from: "#90EE90",
        to: "#ff6600",
      },
    },
  },
  {
    id: "static-1",
    type: "static_text",
    rotateAfter: 6000,
    data: {
      title: "Welcome to Redisplay",
      text: "Transform your old devices into smart displays",
      background: {
        type: "gradient",
        from: "#1e3c72",
        to: "#2a5298",
      },
    },
  },
  {
    id: "clock-2",
    type: "clock",
    rotateAfter: 6000,
    data: {
      timezone: "America/New_York",
      background: {
        type: "gradient",
        from: "#667eea",
        to: "#764ba2",
      },
    },
  },
  {
    id: "static-2",
    type: "static_text",
    rotateAfter: 6000,
    data: {
      title: "100% Open Source",
      text: "Free, customizable, and community-driven",
      background: {
        type: "gradient",
        from: "#f093fb",
        to: "#f5576c",
      },
    },
  },
];

const DeviceFrame = () => {
  const [currentViewIndex, setCurrentViewIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const currentView = sampleViews[currentViewIndex];
    if (!currentView) return;

    const timer = setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentViewIndex((prev) => (prev + 1) % sampleViews.length);
        setIsTransitioning(false);
      }, 500); // Transition duration
    }, currentView.rotateAfter);

    return () => clearTimeout(timer);
  }, [currentViewIndex]);

  const currentView = sampleViews[currentViewIndex];

  const renderView = () => {
    if (!currentView) return null;

    switch (currentView.type) {
      case "clock":
        return <ClockView data={currentView.data} />;
      case "weather":
        return <WeatherView data={currentView.data} />;
      case "static_text":
        return <StaticTextView data={currentView.data} />;
      case "image":
        return <ImageView data={currentView.data} />;
      default:
        return null;
    }
  };

  return (
    <div className="relative">
      {/* Wooden Frame */}
      <div 
        className="relative p-3 md:p-4 rounded-lg shadow-2xl"
        style={{
          background: `linear-gradient(135deg, 
            hsl(var(--wood-light)) 0%, 
            hsl(var(--wood)) 25%,
            hsl(var(--wood-light)) 50%,
            hsl(var(--wood)) 75%,
            hsl(var(--wood-light)) 100%
          )`,
          boxShadow: `
            inset 0 2px 4px rgba(0,0,0,0.1),
            inset 0 -2px 4px rgba(0,0,0,0.1),
            0 8px 16px rgba(0,0,0,0.3),
            0 0 0 1px rgba(0,0,0,0.1)
          `,
        }}
      >
        {/* Inner Wooden Border */}
        <div 
          className="p-2 rounded"
          style={{
            background: `linear-gradient(135deg, 
              hsl(var(--wood)) 0%, 
              hsl(var(--wood-light)) 50%,
              hsl(var(--wood)) 100%
            )`,
            boxShadow: `
              inset 0 1px 2px rgba(255,255,255,0.2),
              inset 0 -1px 2px rgba(0,0,0,0.2)
            `,
          }}
        >
          {/* White Padding/Mat */}
          <div className="bg-white p-4 md:p-5 lg:p-6 shadow-inner">
            {/* Device Frame - Horizontal/Tablet */}
            <div className="relative w-[280px] md:w-[360px] lg:w-[420px] aspect-[16/9] bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 rounded-xl p-2 shadow-inner">
              {/* Screen Bezel */}
              <div className="w-full h-full bg-black rounded-lg overflow-hidden relative">
                {/* Screen Content */}
                <div className="w-full h-full relative overflow-hidden">
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      isTransitioning ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    {renderView()}
                  </div>
                  
                  {/* Physical Device Details - Overlaid on Screen */}
                  {/* Right Side Speaker Slit - Centered */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 z-30">
                    <div className="w-1 h-12 bg-black rounded-full"></div>
                  </div>
                  {/* Power Button (right side) */}
                  <div className="absolute right-0 top-1/4 z-30 w-1 h-14 bg-black rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent rounded-lg blur-xl -z-10 animate-pulse"></div>
    </div>
  );
};

export default DeviceFrame;

