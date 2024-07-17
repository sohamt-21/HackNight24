import "./App.css";
import "./index.css";
import Home from "./Pages/Home/Home";
import { ThemeProvider } from "./components/theme-provider";
import { ReactLenis, useLenis } from "lenis/react";
import Dashboard from "./Pages/Dashboard";

function App() {
  const lenis = useLenis(({ scroll }) => {});

  return (
    <ReactLenis root>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        {/* <Home /> */}
        <Dashboard/>
      </ThemeProvider>
    </ReactLenis>

  );
}

export default App;
