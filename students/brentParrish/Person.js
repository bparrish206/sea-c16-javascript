var Person = function(name, parentName, age) { 
	this.name = name; 
	this.parentName = parentName; 
	this.age = age; 
	this.isAlive = function() { 
		if (age > 0 && age <= 150) { 
 			return true;
 			} 
		else { return false} 
  	} 
 	this.isDead = function() { 
  		if (!age) { 
 			return true; 
 		} 
      else {return false}
  	};
}
