// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet

//P will this always be a url?
//R return a string
//E domainName("https://www.cnet.com") == "cnet
//P domainName("http://www.zombie-bites.com") == "zombie-bites

function parseDomainName(url){
    //replace the stuf upfront
    //split grabbing the first value

    return url.replace('https://', '').replace('http://', '').replace('www', '').split('.')[0]
}

console.log(parseDomainName('http://github.com/carbonfive/raygun'))