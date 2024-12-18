
export default function GameBoard({ onSelect, board }) {

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((colItem, colIndex) => (
              <li key={`${rowIndex}-${colIndex}`}>
                <button
                  onClick={() => onSelect(rowIndex, colIndex)}
                  disabled={colItem !== null}
                >
                  {colItem}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
