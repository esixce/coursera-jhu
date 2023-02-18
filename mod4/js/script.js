// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim

*/

(function () {

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  console.log('Part 1')
  for (var i = 0; i < names.length; i++) {

    var firstLetter = names[i].charAt(0).toLowerCase();

    if (firstLetter === 'j') {
      window.byeSpeaker.speak(names[i]);
    } else {
      window.helloSpeaker.speak(names[i]);
    }
  }

  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  console.log('\nPart 2 - map')

  var findGreeting = function (name) {
    var firstLetter = name.charAt(0).toLowerCase();
    
    if (firstLetter === 'j') {
      return window.byeSpeaker.speakSimple(name);
    } else {
      return window.helloSpeaker.speakSimple(name);
    }
  };

  var nameMap = names.map(name => findGreeting(name))
  for (var i = 0; i < nameMap.length; i++) {
    console.log(nameMap[i]);
  } 

  console.log('\nPart 3 - reduce')

  var twoLists = names.reduce((total, name, index, array) => {

    var firstLetter = name.charAt(0).toLowerCase();

    var greeting = findGreeting(name);
    
    if (firstLetter === 'j') {
      total.bye.push(greeting)
    } else {
      total.hello.push(greeting)
    }

    return total

  }, {hello: [], bye: []});

  for (var aList in twoLists) {
    for(var name in twoLists[aList]) {
      console.log(twoLists[aList][name]);
    }
  }

})();








