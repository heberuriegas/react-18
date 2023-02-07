import AutomaticBatching from "./components/AutomaticBatching";
import Concurrency from "./components/Concurrency";
import Transitions from "./components/Transitions";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>React 18 New features</h1>
      <Concurrency />
      <hr />
      <AutomaticBatching />
      <hr />
      <Transitions />
    </div>
  );
}
