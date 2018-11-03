//to find simple numbers in range
let userNumber = parseInt(prompt('Insert the number: '));
let arr = [];

if (userNumber === 0 || userNumber === 1) {
    console.info('No simple numbers');
}
else {
    for (let i=2; i <= userNumber; i++) {
        let isSimple = true;
        for (let j=2; j < i; j++) {
		if (i % j === 0) {
                isSimple = false;}
    }
    if (isSimple) {
    arr.push(i);
    }     
};
	
console.info(arr);}
 

