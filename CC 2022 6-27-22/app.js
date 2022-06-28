// In this kata you will be given a random string of letters and tasked with returning them as a string of comma-separated sequences sorted alphabetically, with each sequence starting with an uppercase character followed by n-1 lowercase characters, where n is the letter's alphabet position 1-26.

function alphaSeq(str){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let arr = str.toLowerCase().split('').sort();
    let string = []
    for(let i = 0; i < arr.length; i++){
      let lngth = alphabet.indexOf(arr[i]) + 1;
      let s = arr[i].repeat(lngth);
      string.push(s[0].toUpperCase() + s.substring(1));
    }
    return string.join(',')
  }
  