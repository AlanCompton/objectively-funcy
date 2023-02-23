// // Your code here.

//                                 || GET FIRST NAME ||

function getFirstName(obj){
  return obj.firstName;
}

//                                 || GET LAST NAME ||

function getLastName(obj){
  return obj.lastName;
}

//                                 || GET FULL NAME ||

function getFullName(obj1){
  return obj1.firstName + ' ' + obj1.lastName;
}

//                                 || SET FIRST NAME ||

function setFirstName(obj,newName){
  obj.firstName = newName;
}

//                                 || SET AGE ||

function setAge(obj,newAge){
  obj.age = newAge;
}

//                                 || GIVE BIRTHDAY ||

function giveBirthday(obj){

  if(obj.age === undefined){
    obj.age = 1;
  }else{
    obj.age += 1;
  }
}

//                                 || MARRY ||

function marry(person1,person2){
  person1.married = true;
  person2.married = true;

  person1.spouseName = person2.firstName + ' ' + person2.lastName;
  person2.spouseName = person1.firstName + ' ' + person1.lastName;
}

//                                 || DIVORCE ||

function divorce(person1,person2){
  person1.married = false;
  person2.married = false;

  delete person1.spouseName;
  delete person2.spouseName;
}

//////////////////////////////// || DON'T TOUCH || /////////////////////////////////////////////

if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
