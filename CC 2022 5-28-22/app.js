// Write a function that returns a string in which firstname is swapped with last name.

// nameShuffler('john McClane'); => "McClane john"

//  (nameShuffler('john McClane'),'McClane john')


function nameShuffler(str){
    console.log( str.split(' ').reverse().join(' '))
    }

nameShuffler(str)
