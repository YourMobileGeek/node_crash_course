const url = require('url');

const myUrl = new URL ('http://mywebsite.com/hello.html?id=100&status=active'); 

// Serialized URL 
console.log(myURL.href);
console.log(myUrl.toString());

//Host (root domain)
console.log(myUrl.host);

//Hostname (does not get port)
console.log(myUrl.hostname);

//Path 
console.log(myURL.pathname);

// Serialized Query
console.log(myUrl.search);

//Params object
console.log(myUrl.searchParams); 

//Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);


