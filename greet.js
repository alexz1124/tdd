function greet(name){
    if(name === null){
        return "Hello, my friend."
    } else if (Array.isArray(name)){
        if(name.length >= 3){
            var lastname = name.pop()
            return  `Hello, ${name.join(", ")}, and ${lastname}.` 
        }else{
           return `Hello, ${name.join(" and ")}.` 
        }
    } else {   
        if(name === name.toUpperCase()){
            return `HELLO ${name}!`
        }
       return `Hello, ${name}.` 
    }
}

module.exports = greet