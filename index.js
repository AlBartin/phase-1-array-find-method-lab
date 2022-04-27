// code your solution here
function superbowlWin (gamesArray) {
    const x = gamesArray.find((gamesArray) => gamesArray.result === "W");
    if (x) {return x.year};
};