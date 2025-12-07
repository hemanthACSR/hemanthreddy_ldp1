//q1
function greet(name){
    return "hello " + name;
}

function call(fn,value){
    console.log(fn(value));
}

call(greet,'Hemanth')

//q2

const firstletters=(firstname,lastname) =>{
    console.log(firstname[0]+lastname[0]);

}

firstletters("Hemanth","Reddy")

//end