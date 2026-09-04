import { BrowserRouter, createBrowserRouter, Route, Routes } from "react-router"
import FindTrainers from "./components/FindTrainers"
import MyList from "./components/MyList"
import ThemeProvider from "./components/providers/ThemeProvider"
import ComponentsPage from "./components/ComponentsPage"
import ExternalData from "./components/ExternalData"
import Header from "./components/Header"
import EventHandling from "./components/EventHandling"
import StatePage from "./components/StatePage"
import LiftingState from "./components/LiftingState"
import "./App.css"
import RootLayout from "./components/RootLayout"
import SingleTrainer from "./components/SingleTrainer"


function App() {

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<h1>React Demo</h1>} />
            <Route path="/components" element={<ComponentsPage />} />
            <Route path="/external" element={<ExternalData />} />
            <Route path="/events" element={<EventHandling />} />
            <Route path="/state" element={<StatePage />} />
            <Route path="/lifting" element={<LiftingState />} />
            <Route path="/list" element={<MyList>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </MyList>} />
            <Route path="/trainer/:id" element={<SingleTrainer />} />
            <Route path="/find" element={<FindTrainers />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App
