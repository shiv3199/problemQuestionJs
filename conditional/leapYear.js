let year = 1999
if (year % 4 ===0){
    if(year%100 ===0){
        console.log('Not Leap year')
    }
    console.log('leap year')
}
else if(year % 400 ===0){
    console.log('Leap Year')
}
else{
    console.log('Not leap year')
}