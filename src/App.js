import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Box from "./Box";

function App() {
  const count = useSelector((state) => state.count);
  const id = useSelector((state) => state.id);
  const password = useSelector((state) => state.password);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT", payload: { num: 5 } });
        }}
      >
        증가
      </button>
      <Box></Box>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT", payload: { num: 5 } });
        }}
      >
        감소
      </button>
      <div>
        {id},{password}
      </div>
      <button
        onClick={() => {
          dispatch({
            type: "LOGIN",
            payload: { id: "noona", password: "1234" },
          });
        }}
      >
        login
      </button>
    </div>
  );
}

export default App;
