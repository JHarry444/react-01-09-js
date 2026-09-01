import ExternalData from "./components/ExternalData"
import Input from "./components/Input"
import Trainer from "./components/Trainer"

function App() {
  return (
    <div style={{ color: "red" }}>
      <h1>React Demo</h1>
      <div>
        <h2>Components</h2>
        <input type="text" minLength={1} maxLength={10} />
        <br />
        <Input />
        <br />
        <Input />
        <br />
        <Input />
        <br />
        <Trainer name="JH" age={32} specialty={"Java".toUpperCase()} />
        <Trainer name="CG" age={33} specialty="Web" />
        <Trainer name="PB" age={28} />
        <p>1 + 1</p>
        <p>{1 + 1}</p>
      </div>
      <div>
        <ExternalData />
      </div>
    </div>
  )
}

export default App
