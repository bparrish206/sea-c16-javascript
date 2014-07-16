var Person = function(name, parentName, age) { 
	this.name = name; 
	this.parentName = parentName; 
	this.age = age; 
	this.isAlive = function() { 
		if (age > 0 && age <= 150) { 
 			return "Is alive" 
 			} 
		else { return "Is dead"} 
  			} 
 	this.isDead = function() { 
  		if (!age) { 
 			return "Is dead" 
 		} 
  		else {return this.isAlive()} 
  		} 

