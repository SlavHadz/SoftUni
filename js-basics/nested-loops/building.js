function solve(input) {
    let [floors, rooms] = input.map(Number);
    for(let f = floors; f > 0; f -= 1) {
            let prefix = '';
            if(f % 2 !== 1) {
                prefix = 'O';
            } else {
                prefix = 'A'
            }
            if(f === floors) {
                prefix = 'L'
            }
            let floorRooms = [];
        for(let r = 0; r < rooms; r += 1) {
            floorRooms.push(`${prefix}${f}${r}`);
        }
        console.log(floorRooms.join(' '));
    }
}

solve([6, 4]);