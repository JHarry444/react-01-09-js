import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router"
import TrainerPage from "./components/pages/TrainerPage"
import MyList from "./components/MyList"
import ThemeProvider from "./components/providers/ThemeProvider"
import ComponentsPage from "./components/pages/ComponentsPage"
import ExternalData from "./components/ExternalData"
import Header from "./components/Header"
import EventHandling from "./components/EventHandling"
import StatePage from "./components/pages/StatePage"
import LiftingState from "./components/LiftingState"
import "./App.css"
import RootLayout from "./components/pages/RootLayout"


function App() {

  const trainerLoader = async () => {
    try {
      const res = await fetch("http://localhost:8080/trainers");
      const json = await res.json();
      return { initialTrainers: json }
    } catch (error) {
      console.error("Error fetching trainers:", error);
    }
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<h1>React Demo</h1>} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/external" element={<ExternalData />} />
        <Route path="/events" element={<EventHandling />} />
        <Route path="/state" element={<StatePage />} />
        <Route path="/lifting" loader={trainerLoader} element={<LiftingState />} />
        <Route path="/trainer/:id" element={<TrainerPage />} />
        <Route path="/list" element={<MyList>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </MyList>} />

      </Route>
    )
  );
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App
