var request = require('request');
var fs = require('fs');
var headers = {
    'Content-Type': 'application/json',
    'Accept': 'applicaton/json',
	'Referer': 'https://ipa.example.com/ipa',
	rejectUnauthorized: false
};

var dataString = '{"method":"user_find","params":[[""],{}],"id":0}';
var auth =  {
	user: "admin",
	pass: "qweasd123!@#"
};
var ca =  fs.readFileSync('ca.crt', 'utf8')

var options = {
	url: 'https://ipa.example.com/ipa/session/json',
	path : '/ipa/session/json',
	method: 'POST',
	port : 443,
    headers: headers,
    body: dataString,
	auth: auth,
	ca : ca,
	expires: 15
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }else{
		console.log(error);
		//console.log(response);
		//console.log(body);
	}
}
console.log(options);
request.post(options, callback);
