try{
    // make any request here
    // printing the variable that does not exist
    // console.log(x);
}   
catch (e){
    // console.log(e);
}
finally{
    console.log("I am finally block");
}

try{
    throw new Error("System 1 is broke");
}   
catch (e){
    if(e.message === "System 1 is broke"){
        console.log("oh oh system 1 in broken at this time");
    }
}
finally{
    console.log("I am finally block")
}


