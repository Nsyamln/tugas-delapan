import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <header className="h-24 flex items-center px-4 text-white bg-c6">
        <img src="./icons-female-user-96.png" />
        <div className="text-3xl">NsBlog!</div>
      </header>
      <Outlet />
      <footer className="py-4 text-center  text-2xl h-10 text-white bg-c6 ">
        &copy; 2023 Nasya
      </footer>
    </>
  );
}
