import Input from "./Input"
import Trainer from "./Trainer"

function App() {
  return (
    <div>
      <h1>React Demo</h1>
      <div>
        <h2>Components</h2>
        <input type="text" />
        <br />
        <Input />
        <br />
        <Input />
        <br />
        <Input />
        <br />
        <Trainer />
        <p>1 + 1</p>
        <p>{1 + 1}</p>
      </div>
    </div>
  )
}

export default App
