// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"
function removeUrlAnchor(url){
    //P remove anything after#. if it doesn't have # leave it
    //R returns the url 
    //E 
   let newUrl = url.split('#')
    let replaceAll = newUrl[0].toString()
    return replaceAll
  }