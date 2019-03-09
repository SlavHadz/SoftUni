function solve(input){
    let [rocketsPrize, rocketsCount, sneakersCount] = input.map(Number);
    let sneakersPrize = rocketsPrize / 6;
    let rockestsFullPrize = rocketsPrize * rocketsCount;
    let sneakersFullPrize = sneakersCount * sneakersPrize;
    let equipmentPrize = (rockestsFullPrize + sneakersFullPrize) * 0.2;
    let fullPrize = rockestsFullPrize + sneakersFullPrize + equipmentPrize;
    let novakPays = fullPrize / 8;
    let sponsorPays = fullPrize - novakPays;
    console.log(`Price to be paid by Djokovic ${Math.floor(novakPays)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(sponsorPays)}`)
}

solve([850, 4, 2]);