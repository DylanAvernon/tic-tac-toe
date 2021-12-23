const Board = () => {
    const [player, setPlayer] = React.useState(1);
    const [state, setState] = React.useState(Array(9).fill(2));
    const [reset, setReset] = React.useState(false);
    console.log('render')
    let status = `Player ${player}`;
    let winner = checkWinner(state);
    if(winner !== 2) {
        status = `Player ${winner} wins`;
    }
    else {
        state.forEach(square => {
            if (square === 0 || square === 1) {
                status = 'Its a tie';
            }
        })
    }
    const newState = idSquare => {
        let thePlayer = player;
        state[idSquare] = player; 
        setState(state);
        let nextPlayer = Number(!player);
        setPlayer(nextPlayer);
        return thePlayer;
    };
    const renderSquare = (id) => {
        return <Square id={id} win={winner} newState={newState} />;
    };

    return (
        <div className='game-board'>
            <div className='grid-row'>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className='grid-row'>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className='grid-row'>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
            <div id='info'>
                <h1>{status}</h1>
            </div>
        </div>
    )
}

ReactDOM.render(<Board />, document.getElementById('root'));