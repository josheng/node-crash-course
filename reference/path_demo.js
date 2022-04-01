const path = require('path');

//base file name
console.log(path.basename(__filename));


// dir name
console.log(path.basename(__dirname));

//file extension
console.log(path.extname(__filename));

// create path object
console.log(path.parse(__filename));

//concat paths
// ooutput: /home/josheng/code/node-crash-course/reference/test/hello.html
console.log(path.join(__dirname, 'test', 'hello.html'));
