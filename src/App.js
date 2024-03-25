import { useDispatch } from 'react-redux';
import { saveKey } from './store/gameSlice';
import Board from './components/Board';
import Status from './components/Status';
import Header from './components/Header';

function App() {
	const dispatch = useDispatch();

	const keyDownHandler = (event) => {
		dispatch(saveKey(event.key));
	};

	return (
		<div className="App" onKeyDownCapture={keyDownHandler}>
			<Header />
			<Board />
			<Status />
		</div>
	);
}

export default App;
