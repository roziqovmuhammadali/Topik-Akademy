import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";

export default function App() {
  return (
    <div className="container mx-auto space-y-14">
      <Navbar />
      <Header />
    </div>
  );
}
