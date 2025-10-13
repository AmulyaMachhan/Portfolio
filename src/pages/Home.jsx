import { Suspense } from "react";
import Hero from "../components/Hero";

function Home() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-screen flex items-center justify-center bg-black text-white text-xl">
          Initializing Hyperspeed...
        </div>
      }
    >
      <Hero />
    </Suspense>
  );
}

export default Home;
