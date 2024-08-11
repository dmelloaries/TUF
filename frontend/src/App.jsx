
import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar";

export default function App() {
  return (
    <div className="bg-black">

   
    <div className="flex flex-col md:flex-row">
      <Sidebar className="w-full md:w-64 fixed md:relative h-screen md:h-auto" />
      <div className="md:ml-64 flex-1 p-4">
        <Navbar />
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
    </div>
    </div>
  );
}
