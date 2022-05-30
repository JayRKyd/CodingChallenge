// Simple, remove the spaces from the string, then return the resultant string.
// (noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB')


function noSpace(x){
    let remove = x.split(' ').join('')
    return remove
    }

    console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB')