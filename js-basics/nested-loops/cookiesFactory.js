function solve(input) {
    let cookiesCount = +input.shift();

    for(let i = 1; i <= cookiesCount; i += 1) {
        let flour = false;
        let eggs = false;
        let sugar = false;
        let shouldBake = false;
        while(!flour || !eggs || !sugar || !shouldBake) {
            let ingredient = input.shift();
            if(ingredient === 'flour') {
                flour = true;
            } else if (ingredient === 'eggs') {
                eggs = true;
            } else if (ingredient === 'sugar') {
                sugar = true;
            }
            if(ingredient === 'Bake!' && !(flour && eggs && sugar)) {
                console.log('The batter should contain flour, eggs and sugar!');
            } else if(ingredient === 'Bake!' && (flour && eggs && sugar)){
                shouldBake = true;
            }
        }
        console.log(`Baking batch number ${i}...`);
    }
}

solve([3, 'flour', 'eggs', 'jam', 'Bake!', 'sugar', 'Bake!', 'flour', 'eggs', 'milk', 'almonds', 'sugar', 'Bake!', 'flour', 'eggs', 'sugar', 'Bake!']);