import Image from "next/image";
import HomePageContents from "./home/page";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <main>
      <Navbar />
      <HomePageContents />
      <Footer></Footer>
    </main>
  );
}
