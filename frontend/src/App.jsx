import "./App.css";
import "./index.css";
import Home from "./Pages/Home/Home";
import { ThemeProvider } from "./components/theme-provider";
import { ReactLenis, useLenis } from "lenis/react";
import Dashboard from "./Pages/Dashboard";
import Signup from "./components/CustomComponents/Forms/DashSignForm";
import BeforeSign from "./Pages/Home/BeforeSign";


function App() {
  const lenis = useLenis(({ scroll }) => {});

  return (
    <ReactLenis root>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <BeforeSign/>
        {/* <Home /> */}
        {/* <Dashboard/> */}
        {/* <Signup/> */}
        {/* <Retrive/> */}
        {/* <Signup/> */}
      </ThemeProvider>
    </ReactLenis>

    

  );
}

export default App;
