import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import FloatingChat from "./components/FloatingChat";
import { ThemeProvider } from "./components/theme-provider";
import { Route, Routes } from "react-router-dom";
import AllStacksPage from "./pages/AllStacksPage";
import AllProjectsPage from "./pages/AllProjectsPage";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="flex flex-col min-h-screen w-full items-center bg-background text-foreground">
        <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8 xl:px-4 flex min-h-screen flex-col">
          <div className="flex-1">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Header />
                    <Content />
                  </>
                }
              />
              <Route
                path="/stacks"
                element={
                  <>
                    <AllStacksPage />
                  </>
                }
              />
              <Route
                path="/projects"
                element={
                  <>
                    <AllProjectsPage />
                  </>
                }
              />
            </Routes>
          </div>
          <Footer />
        </div>
        <FloatingChat />
      </div>
    </ThemeProvider>
  );
}

export default App;
