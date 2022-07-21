
//This function is CASE SENSITIVE
function occurence( stringBasket, needle){
    let counter = 0;
    [...stringBasket].split("").forEach(element => {
        if(element == needle)counter++
    });
    console.log(counter)
    return counter;
}

occurence("This is the string we search","t");