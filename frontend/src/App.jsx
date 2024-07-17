import "./App.css";
import "./index.css";
import Home from "./Pages/Home/Home";
import { ThemeProvider } from "./components/theme-provider";
import { ReactLenis, useLenis } from "lenis/react";
import Dashboard from "./Pages/Dashboard";
import Retrive from "./components/Retrive/Retrive"

// import Retrive from "./components/Retrive/Retrive";
import  Signup  from "./components/Portfoliosignup/Signup";

function App() {
  const lenis = useLenis(({ scroll }) => {});

  return (
    <ReactLenis root>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        {/* <Home /> */}
        <Dashboard/>
        {/* <Retrive/>
        <Signup/> */}
      </ThemeProvider>
      
    </ReactLenis>

    

  );
}

export default App;
