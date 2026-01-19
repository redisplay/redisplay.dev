import { useEffect } from "react";

const Download = () => {
  useEffect(() => {
    // Redirect to GitHub releases page
    window.location.href = "https://github.com/redisplay/redisplay/releases/latest";
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Redirecting to download...</p>
    </div>
  );
};

export default Download;

