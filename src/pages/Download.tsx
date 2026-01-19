import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Download = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the APK file
    window.location.href = "/apk/app-release.apk";
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Redirecting to download...</p>
    </div>
  );
};

export default Download;

