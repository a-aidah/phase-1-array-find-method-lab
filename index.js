// code your solution here

function superbowlWin(record) {
    let result;
    let validator = record.find((record) => record.result === "W")
    if (validator !== undefined ) {
        result = validator['year'];
    }
    return result;
}

