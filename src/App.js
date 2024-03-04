import { UseSelector, useDispatch, useSelector } from "react-redux";
import { setStatus } from "./store/gameSlice";
import Board from "./components/Board";

function App() {

  const {buttonStatus} = useSelector(store=> store.game);
  const dispatch = useDispatch();

  const clickHandler = ()=>{
    dispatch(setStatus('Resume'))
  }

  return (
    <div className="App">
      <Board/>
    <button className="startBtn" onClick={clickHandler}>{buttonStatus}</button>
    </div>
  );
}

export default App;
