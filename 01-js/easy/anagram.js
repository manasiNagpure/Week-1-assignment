/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  let l1 = str1.length;
  let l2 = str2.length;
  if(l1 !== l2){
    console.log("Invalid input");
    return
  }
  s1 = str1.split('').sort().join('');
  s2 = str2.split('').sort().join('');

  if(str1 == str2){
    console.log("Given strings are anagram");
  }
  else{
    console.log("Given strings are not anagram");
  }

}

isAnagram("paper","repap");



module.exports = isAnagram;
