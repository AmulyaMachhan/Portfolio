import { useEffect, useState } from "react";
import Loader from "../components/Loader";

export default function PageWrapper({ children }) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className={`transition-opacity duration-700 ${
          showLoader ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </div>

      {showLoader && <Loader />}
    </>
  );
}
