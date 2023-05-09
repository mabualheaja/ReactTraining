import Clock from "./components/clock";
import useTime from "./hooks/useTime";


function App() {
  const time = useTime();
  return <Clock time={time}/>;
}

export default App;
