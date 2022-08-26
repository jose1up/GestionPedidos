import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const product = useSelector((state) => state.products);
  console.log(product);
  return <h1>App</h1>;
}

export default App;
