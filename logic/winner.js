const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 5, 6],
];
function checkWinner(state) {
    for (let i = 0; i < win.length; i++) {
        const [a, b, c] = win[i];
        if (state[a] == state[b] && state[a] == state[c] && state[a] !== 2) {
            console.log('state:', state[a]);
            return state[a];
        }
    }
    return 2;
}
const checkForWinner = (gameState) => {
// get array of box id's
// can't be a winner in less than 5 turns
if (gameState.length < 5) return "No Winner Yet";
let p0 = gameState.filter((item) => {
    if (item.player == 0) return item;
});
p0 = p0.map((item) => item.id);
let px = gameState.filter((item) => {
    if (item.player == 1) return item;
});
px = px.map((item) => item.id);
if (p0 != null && px != null) {
    var win0 = win.filter((item) => {
    return isSuperset(new Set(p0), new Set(item));
    });
    var winX = win.filter((item) => {
    return isSuperset(new Set(px), new Set(item));
    });
}
if (win0.length > 0) return "Player O ";
else if (winX.length > 0) return "Player X ";
return "No Winner Yet";
};