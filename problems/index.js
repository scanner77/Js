function firstRepeatingCharacter(str) {
    for (let i = 0; i < str.length; i++) {
      if (str.indexOf(str.charAt(i)) !== str.lastIndexOf(str.charAt(i))) {
        return str.charAt(i)
      }
    }
    return 'no results found'
  }
  firstRepeatingCharacter("Apple")
document.getElementById("demo").innerHTML = firstRepeatingCharacter("Applle")

//indexOf method returns the first index at which element is found in the array