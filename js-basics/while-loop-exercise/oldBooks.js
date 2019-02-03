function solve(input) {
    let [favBook, capacity, ...books] = input,
        counter = 0,
        bookFound = false;
    while(counter < capacity) {
        if(favBook == books[counter]) {
            console.log(`You checked ${counter} books and found it.`);
            bookFound = true;
            break;
        }
        counter += 1;
    }
    if(!bookFound) {
        console.log('The book you search is not here!');
        console.log(`You checked ${counter} books.`);
    }
}

solve(['The Spot', 4, 'Hunger games', 'Hounted', 'Torronto', 'Spotify']);