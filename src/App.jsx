import Serticate from "./components/certificat/Serticate";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Topik from "./components/topik/Topik";

export default function App() {
  return (
    <div className="container mx-auto space-y-14">
      <Navbar />
      <Header />
      <Topik />
      <Serticate />
    </div>
  );
}
