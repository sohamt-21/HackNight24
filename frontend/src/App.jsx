import "./App.css";
import "./index.css";
import Home from "./Pages/Home/Home";
import { ThemeProvider } from "./components/theme-provider";
import { ReactLenis, useLenis } from "lenis/react";
<<<<<<< HEAD
import Dashboard from "./Pages/Dashboard";
=======
import Retrive from "./components/Retrive/Retrive"

// import Retrive from "./components/Retrive/Retrive";
import  Signup  from "./components/Portfoliosignup/Signup";
>>>>>>> b77fcec7520148d8b9f92645890102ba8673d3b9

function App() {
  const lenis = useLenis(({ scroll }) => {});

  return (
    <ReactLenis root>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        {/* <Home /> */}
<<<<<<< HEAD
        <Dashboard/>
=======
        <Retrive/>
        <Signup/>
>>>>>>> b77fcec7520148d8b9f92645890102ba8673d3b9
      </ThemeProvider>
      
    </ReactLenis>
<<<<<<< HEAD

=======
    
>>>>>>> b77fcec7520148d8b9f92645890102ba8673d3b9
  );
}

export default App;
