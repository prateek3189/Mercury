var source = require('../views/home.html');
console.log(source);

var template = Handlebars.compile(source);

var data = { "name": "Alan", "hometown": "Somewhere, TX",
             "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]};
var result = template(data);
document.getElementById('testContent').innerHTML = result;
