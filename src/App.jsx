import Serticate from "./components/certificat/Serticate";
import Gks from "./components/gks/GKS";
import VideoPlayer from "./components/gksVideo/VideoPlayer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Topik from "./components/topik/Topik";

export default function App() {
  return (
    <div className="container mx-auto space-y-14 xs:px-1 sm:px-0">
      <Navbar />
      <Header />
      <Topik />
      <Serticate />
      <Gks />
      <VideoPlayer />
    </div>
  );
}
