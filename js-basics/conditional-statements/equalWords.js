function solve(input) {
    let [word1, word2] = input.map((word) => word.toLowerCase());
    if(word1 == word2) {
        console.log('yes');
    } else {
        console.log('no');
    }
}

solve(['Hello', 'HeLLo']);