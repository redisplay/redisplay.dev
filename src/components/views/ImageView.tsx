interface ImageViewProps {
  data: {
    url?: string;
    scaleType?: string;
  };
}

const ImageView = ({ data }: ImageViewProps) => {
  // Use a placeholder image if no URL provided
  const imageUrl = data.url || "https://via.placeholder.com/400x800/667eea/ffffff?text=Image+View";

  const scaleTypeClass = data.scaleType === "centerCrop"
    ? "object-cover"
    : data.scaleType === "center"
    ? "object-contain"
    : "object-contain";

  return (
    <div className="w-full h-full bg-gray-900 flex items-center justify-center overflow-hidden">
      <img
        src={imageUrl}
        alt="Display"
        className={`w-full h-full ${scaleTypeClass}`}
      />
    </div>
  );
};

export default ImageView;

