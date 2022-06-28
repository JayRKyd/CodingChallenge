// Task
// Create a function that takes in a list of button inputs and returns the final state.
// Like, Dislike, Nothing come from Preloaded

function likeOrDislike(buttons) {
    //   return Like || Dislike || Nothing ;
      
      let result = 'Nothing'
      for(let i = 0; i < buttons.length; i++){
        if(buttons[i] === result){
          result = 'Nothing'
        }else if(buttons[i] !== 'Nothing'){
           result = buttons[i]
        }else if(buttons[i] === 'Dislike'){
           result = buttons[i]
        }
      }
      return result
    }