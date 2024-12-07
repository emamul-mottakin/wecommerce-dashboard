import Dashboard from "./components/dashboard";
import Menu from "./components/menu";
import SideBar from "./components/side-bar";

function App() {
  return (
    <main className="flex">
      <SideBar />

      <div className="w-full">
        <Menu />
        <section className="px-4">
          <Dashboard></Dashboard>
        </section>
      </div>
    </main>
  );
}

export default App;
