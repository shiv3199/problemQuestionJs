function triangel(a,b,c){
    if (a===b){
        if(b===c){
            if(c===a){
                console.log("equilateal Triangle")
            }
        }
    }
    else if (a===b && b===c || c===a && b===a){
        console.log("isoceles")
    }
    else if (!a===b && a===c){
        console.log('Scalene')
    }
}
triangel(8,2,6)