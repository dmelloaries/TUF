import FlashCard from "./components/FlashCard";
import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-black flex flex-col md:flex-row">
        <Sidebar className="w-full md:w-64 fixed md:relative h-screen md:h-auto" />
        <div className="md:ml-64 flex-1">
          <Navbar />
        </div>
      </div>
      <div className="flex-1 bg-[#111] flex items-center justify-center">
        <FlashCard />
      </div>
    </div>
  );
}
