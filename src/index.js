function knightMoves() {
  const possibleMoves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  if (start[0] === end[0] && start[1] === end[1]) {
    return `You made it in 0 moves! Here's your path:\n[${start}]`; //dont move
  }

  function isOnBoard(x, y) {
    // to check if the knight position is valid
    return x >= 0 && x < 8 && y >= 0 && y < 8;
  }

  const queue = [[start]]; //paths taken by knight
  const visited = new Set(); //visited pos
  visited.add(start.toString());

  while (queue.length > 0) {
    //
    const currentPath = queue.shift();
    const currentPosition = currentPath[currentPath.length - 1];

    for (let move of possibleMoves) {
      const newX = currentPosition[0] + move[0];
      const newY = currentPosition[1] + move[1];

      if (isOnBoard(newX, newY)) { // check if new pos is valid
        const newPosition = [newX, newY];
        const positionKey = newPosition.toString();

        if (!visited.has(positionKey)) {
          const newPath = [...currentPath, newPosition];

          if (newX === end[0] && newY === end[1]) {
            return `You made it in ${
              newPath.length - 1
            } moves! Here's your path:\n${newPath
              .map((pos) => `[${pos}]`)
              .join("\n")}`;
          }

          queue.push(newPath);//add path to queue
          visited.add(positionKey);// mark as visited
        }
      }
    }
  }
  return "Path not found";
}

const start = [0, 0];
const end = [3, 3];
console.log(knightMoves(start, end)); 