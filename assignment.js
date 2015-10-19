console.log("Hello World!");
console.log("Hello World Haiden Coates");

function abc(str) {
	//  this loop all the letter in the str.
	for (i = 0; i < str.length; i++) { 
		var  letter = str[i];
		console.log(letter);
		
	}
} // end (aBc)

abc("abcdefghijklmnopqrstubwxyz");

abc("P51-Mustang");

abc("The Avengers: age of Ultron");

abc("a quoted 'statement' within a string");

function strfun(input) {
	for (i = 0; i < input.length; i++) { 
		var  letter = input[i];
		if("a" == letter){ 
			continue;
		}
		if("e" == letter){ 
			continue;
		}
		if("i" == letter){ 
			continue;
		}
		if("o" == letter){ 
			continue;
		}
		if("u" == letter){ 
			continue;
		}
		console.log(letter);
		
	}	
	
	
}
strfun("something");

// part 2:1
function calculator(arg1,action,arg2) {
	if(null == arg1 || undefined == arg1){
		return "invalid";
	}
	if(null == arg2 || undefined == arg2){
		return "invalid";
	}
	if(null == action || undefined == action){
		return "invalid";
	}
	if(typeof(arg1) !== "number") {
		return "invalid";
	}
	if(typeof(arg2) !== "number") {
		return "invalid";
	}
	if(typeof(action) !== "string") {
		return "invalid";
	}
	if(action == "add"){return (arg1 + arg2);  }
	if(action == "subtract"){return (arg1 - arg2);  }
	if(action == "Multiplay"){return (arg1 * arg2);  }
	if(action == "divide"){return (arg1  / arg2);  }
}

function calcTest() {
var  resultis = calculator(2,"add",2);
console.log("the result is " + resultis);	
	
	
	
	
	
}
calcTest();