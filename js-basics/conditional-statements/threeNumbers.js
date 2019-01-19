function solve(input) {
    let arr = input.map(Number);
    let check=arr[0];

    for(let num in arr) {
        if(arr[num] !== check) {
            console.log('no');
            return
        }
    }
    console.log('yes');
}

solve(['2', '7', '6']);