function Person(name, age, parentName){
	this.name = name;
	this.age = age;
	this.parentName = parentName;
	this.isDead = function(age) {
		if (!age) {
			return "Is dead"
		}
}