var oldestParent = function (people) {
  var parent = [];
  var parentAge = [];
  var opParent = '';
  for (i in people) {
    if (people[i].parent) {
      parent.push(people[i].parent);
      }
    }
 for (j in people){
  for (k in parent){
  if (people[j].name === parent[k]){
    parentAge.push(people[j].age);
  }; 
    };
 };
var biggest = function (a, b) {
  if (a > b) {
    return a, b;
  }
  else {return b, a}
}
parentAge.sort(biggest);
 for (m in people) {
   if (people[m].age === parentAge[0]) {
     opParent = people[m].name;
   }
 }
  return opParent;
};