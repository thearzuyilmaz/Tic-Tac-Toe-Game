export default function Log({ turns }) {
 
  return (


    <ol id="log">
      {turns.map((turn, index) => {
        const { square, player } = turn;
        const { row, col } = square;

        return (
          <li key={index}>
            {player} selected row: {row} & col: {col}{" "}
          </li>
        );
      })}
    </ol>
    
  );
}
