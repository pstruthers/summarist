import Image from "next/image";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Features from "./components/features/Features";

export default function Home() {
  return (
    <div>
      <Nav />
      <Landing />
      <Features />
    </div>
  );
}
