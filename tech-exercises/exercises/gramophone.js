function solve(bandName, albumName, songName){
    let secs = (bandName.length * albumName.length * songName.length) / 2;
    let rotations = secs / 2.5;
    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`);
}

solve('Black Sabbath', 'Paranoid', 'War Pigs');