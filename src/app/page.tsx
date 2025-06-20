import Image from "next/image";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Features from "./components/features/Features";
import Reviews from "./components/reviews/Reviews";
import Numbers from "./components/numbers/Numbers";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Nav />
      <Landing />
      <Features />
      <Reviews />
      <Numbers />
      <Footer />
    </div>
  );
}
