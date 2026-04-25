import next from "next";
import Navbar from "./NavBar/page";
import Link from "next/link";
import Hero from "./components/hero";
import Animation from "./components/animation";
import grid from "./components/grid";
import ServiceAnimation from "./components/serviceanimation";

export default function Home() {
  return(
    <div className="flex flex-col min-h-screen">
       
    <div className="sticky top-0 z-50">
      <Navbar/>
      </div>

      <div>
        <Hero/>
      </div>

        <div>
          <Animation/>
          </div>
      </div>
  )
};