var people = [
  {
    name: 'Hank',
    age: 29,
    parent: 'Don'
  },
  {
    name: 'Deborah',
    age: 30,
    parent: 'Don'
  },
  {
    name: 'Danny',
    age: 24,
    parent: 'Don'
  },
  {
    name: 'Don',
    age: 64,
    parent: 'Haskell'
  },
  {
    name: 'Kathy',
    age: 75,
    parent: 'Lenora'
  },
  {
    name: 'Haskell',
    parent: 'Finus'
  },
  {
    name: 'Finus'
  }
];


var oldestAge = function(people) {
    var oldOrder = _.max(people, function(person){ return person.age; });
    return oldOrder.age;
    } ;

var living = function(people) {
  var peeps = _.filter(people, function(num) {if (num.age) {return num}} );
  var namez = _.pluck(peeps, 'name')
  return namez;
}

var oldestLivingPerson = function(people) {
  var oldOrder = _.max(people, function(person){ return person.age; });
  return oldOrder.name;
};