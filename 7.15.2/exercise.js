function sayHelloName(callback) {
   setTimeout(function(){
    console.log("Hello ");
   callback();
      }, 1000)
    }
    
function printName() {
        console.log("Rem");
    }
    
sayHelloName(printName);
