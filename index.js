function theLongestWord(str) {
  let strSplit = str.split(' ')
  let wordLength = 0
  
  for(let i = 0; i < strSplit.length; i++) {
    if(strSplit[i].length > wordLength) {
      wordLength = strSplit[i].length
    }
  }
  return wordLength
}

theLongestWord("Over Christmas last year, we took our puppy to meet my parents. Before we went to bed, my puppy ended up eating a caterpillar! The caterpillars hair got stuck to my dogs throat and mouth and she was gagging and throwing up all through the night while having difficulty breathing. So terrifiying! Fortunately, I read online that if you put some honey on a piece of bread, it helps collect all of the caterpillars fur and gets it out of your pups mouth.")

function hasUniqueChars(str) {
  let strSplit = str.split(' ')

  for(let i = 0; i < strSplit; i++) {
    if(str == '/<>\|][;:`~') {
      return true
    } else {
      return false
    }
  }
}

hasUniqueChars('Hello]{')