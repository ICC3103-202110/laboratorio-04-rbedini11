const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
    })
    function view(counter){
        return counter;
    }
    
    function update(msg, counter){
        if (msg==='+'){
            return counter + 1;
        }
        if (msg==='-'){
            return counter - 1;
        }
        else{
            return counter;
        }
    }
function app(counter){
    console.clear();
    console.log("\n Count: "+view(counter));
    console.log("\n (+)  (-)");
    console.log("\n (q) for quit");
    readline.question("\n What would you do? "{

        
        
    }

}


function view(counter){
    return counter;
}

function update(msg, counter){
    if (msg==='+'){
        return counter + 1;
    }
    if (msg==='-'){
        return counter - 1;
    }
    else{
        return counter;
    }
}
app(0)