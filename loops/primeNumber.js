let a = 8
if (a<=1){
    console.log('not a prime number')
}
for(let i=2; i<a; i++){
    if(a%2===0){
        return false;
    }
    return true;
}