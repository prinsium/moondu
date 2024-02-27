import Contact from "@/components/Contact";
import HomePage from "@/components/HomePage";
import MidSec from "@/components/MidSec";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
<div className="scroll-smooth">
    <Navbar />
    <HomePage />
    <MidSec />
    <Contact />
    </div>
  );
}
