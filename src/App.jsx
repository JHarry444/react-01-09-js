import { BrowserRouter, Route, Routes } from "react-router"
import ComponentsPage from "./components/ComponentsPage"
import ExternalData from "./components/ExternalData"
import Header from "./components/Header"
import EventHandling from "./components/EventHandling"
import StatePage from "./components/StatePage"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<h1>React Demo</h1>} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/external" element={<ExternalData />} />
        <Route path="/events" element={<EventHandling />} />
        <Route path="/state" element={<StatePage />} />
      </Routes>
      <footer style={{ position: "fixed", bottom: "0px" }}>{new Date().toISOString()}</footer>

    </BrowserRouter>
  )
}

export default App
