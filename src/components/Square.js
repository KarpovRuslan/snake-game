import { useSelector } from 'react-redux';

function Square({ square }) {
	const { x, y } = square;
	const snake = useSelector((store) => store.game.snake);
	const apple = useSelector((store) => store.game.apple);

	let buttonStyle = '';

	for (let s of snake) {
		if (s.x === x && s.y === y) buttonStyle = 'snake';
	}

	if (x === apple.x && y === apple.y) buttonStyle = 'apple';

	function handleKeyDown(event) {
		if (event.key === 'ArrowRight') {
			console.log('clicked Right');
		}
		if (event.key === 'ArrowLeft') {
			console.log('clicked Left');
		}
		if (event.key === 'ArrowUp') {
			console.log('clicked Up');
		}
		if (event.key === 'ArrowDown') {
			console.log('clicked Down');
		}
	}

	return (
		<span className="square" onKeyDown={handleKeyDown}>
			<button className={buttonStyle}></button>
		</span>
	);
}

export default Square;
