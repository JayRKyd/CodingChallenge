// You are the Dungeon Master for a public DnD game at your local comic shop and recently you've had some trouble keeping your players' info neat and organized so you've decided to write a bit of code to help keep them sorted!

// The goal of this code is to create an array of objects that stores a player's name and contact number from a given string.

// The method should return an empty array if the argument passed is an empty string or nil/None/null.

function playerManager(players) {
    // your code
  
    if (players===null||players.length===0) {
      return []
    }
    let newArr = []
    let playersInArray = players.split(', ')
    for (i = 0 ; i < playersInArray.length ; i+=2) {
      newArr.push({'player':playersInArray[i], 'contact':playersInArray[i+1]*1})
    }
    return newArr
  }