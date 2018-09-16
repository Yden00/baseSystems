function bs (number,base = 2){
    let resTest = '';
    while (number != 0) {
		debugger
        resTest += number % base;
        number =  Math.floor(number / base);
        if (number < base) {
            resTest += number;
            number = 0;
        }
    }
    return resTest.split('').reverse().join('')
}
console.log(bs(10));