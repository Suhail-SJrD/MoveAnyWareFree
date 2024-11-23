import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Component/NavBar";
import HeroSection from "./Component/HeroSection";
import ResponsiveTable from "./Component/ResponsiveTable";
import FAQ from "./Component/FAQ";

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <ResponsiveTable />
      <FAQ />
    </div>
  );
}

export default App;
