interface StaticTextViewProps {
  data: {
    title?: string;
    text?: string;
    background?: {
      type: string;
      from: string;
      to: string;
    };
  };
}

const StaticTextView = ({ data }: StaticTextViewProps) => {
  const backgroundStyle = data.background?.type === "gradient"
    ? {
        background: `linear-gradient(135deg, ${data.background.from} 0%, ${data.background.to} 100%)`,
      }
    : { backgroundColor: "#1e3c72" };

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center text-white p-4"
      style={backgroundStyle}
    >
      <div className="text-center max-w-xs">
        {data.title && (
          <h2 className="text-2xl md:text-3xl font-bold mb-2">{data.title}</h2>
        )}
        {data.text && (
          <p className="text-sm md:text-base opacity-90 leading-relaxed">{data.text}</p>
        )}
      </div>
    </div>
  );
};

export default StaticTextView;

