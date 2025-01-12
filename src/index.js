function knightMoves(){

    const possibleMoves = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];
    
    if (start[0] === end[0] && start[1] === end[1]) {
        return `You made it in 0 moves! Here's your path:\n[${start}]`;
    }

    function isOnBoard(x, y) {// to check if the knight position is valid
        return x >= 0 && x < 8 && y >= 0 && y < 8;
    }

    const queue = [[start]];
    const visited = new Set();
    visited.add(start.toString());

    while (queue.length > 0) {
        const currentPath = queue.shift();
        const currentPosition = currentPath[currentPath.length - 1];
    }
}