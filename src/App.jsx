import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router"
import TrainerPage from "./components/pages/TrainerPage"
import MyList from "./components/MyList"
import ThemeProvider from "./components/providers/ThemeProvider"
import ComponentsPage from "./components/pages/ComponentsPage"
import ExternalData from "./components/ExternalData"
import EventHandling from "./components/EventHandling"
import StatePage from "./components/pages/StatePage"
import "./App.css"
import RootLayout from "./components/pages/RootLayout"
import trainerLoader from "./loaders/trainer-loader"
import Loading from "./components/Loading"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<h1>React Demo</h1>} />
      <Route path="components" element={<ComponentsPage />} />
      <Route path="external" element={<ExternalData />} />
      <Route path="events" element={<EventHandling />} />
      <Route path="state" element={<StatePage />} />
      <Route
        path="lifting"
        loader={trainerLoader}
        lazy={async () => {
          const { default: Component } = await import("./components/LiftingState")
          return {
            Component,
          }
        }}
        HydrateFallback={<Loading />}
      />
      <Route path="trainer/:id" element={<TrainerPage />} />
      <Route
        path="list"
        element={(
          <MyList>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </MyList>
        )}
      />
    </Route>,
  ),
)

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
