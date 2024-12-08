import { useState } from "react";
import Dashboard from "./components/dashboard";
import Menu from "./components/menu";
import SideBar from "./components/side-bar";

function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  return (
    <main className="flex">
      <SideBar
        sideBarStatus={isSideBarOpen}
        setSideBarStatus={setIsSideBarOpen}
      />

      <div className="w-full">
        <Menu
          sideBarStatus={isSideBarOpen}
          setSideBarStatus={setIsSideBarOpen}
        />
        <section className="px-4">
          <Dashboard></Dashboard>
        </section>
      </div>
    </main>
  );
}

export default App;
