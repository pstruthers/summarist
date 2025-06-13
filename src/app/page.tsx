import Image from "next/image";
import Nav from "./components/Nav";
import Landing from "./components/Landing";

export default function Home() {
  return (
    <div>
      <Nav />
      <Landing />
    </div>
  );
}
