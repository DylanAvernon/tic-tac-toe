const Square = ({id, win, newState}) => {
    const [color, setColor] = React.useState('green');
    const [status, setStatus] = React.useState(2);
    const xo = ['O', 'X', '+'];
    const palet = ['red', 'blue', 'green'];

    return (
        <button onClick={e => {
            if (status === 2 && win === 2) { 
                let nextPlayer = newState(id);
                let col = palet[nextPlayer];
                setStatus(nextPlayer);
                setColor(col)
                e.target.style.background = col;
            }
        }}>
        {xo[status]}
        </button>
    );
};