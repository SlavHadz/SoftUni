function solve(input) {
    let [width, length, heigth, ...boxes] = input,
    len = boxes.length;
    space = width * length * heigth;
    boxesSpace = 0;
    for (let i = 0; i < len; i += 1) {
        if (boxes[i] == 'Done') {
            let leftSpace = space - boxesSpace;
            console.log(`${leftSpace} Cubic meters left.`);
            break;
        } else {
            boxesSpace += Number(boxes[i]);
            if(boxesSpace > space) {
                let spaceNeeded = boxesSpace - space;
                console.log(`No more free space! You need ${spaceNeeded} Cubic meters more.`);
                break;
            }
        }
    }
}

solve([10, 1, 2, 4, 6, 'Done'])