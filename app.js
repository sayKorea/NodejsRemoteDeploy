
const ipa = require('node-freeipa')
const opts = {
    server: "ipa.example.com",
    auth: {
        user: "admin",
        pass: "qweasd123!@#"
    },
    expires: 1800
};
ipa.configure(opts);

const callApi = process.argv[2];
let args  = {};
//debugger;


if(callApi === 'user_add'){
	args.uid = process.argv[3];
	args.givenname = process.argv[4];
	args.sn = process.argv[5];
	try{
		ipa.user_add([], args
		//	{
			//uid: uid,
			//givenname: uid,
			//sn: "co",
			//cn: "kr",
			//mail: "datanuritest1@a.c",
			//userpassword: uid+"1234",
			//setattr: 'krbpasswordexpiration=20990101010101Z'
		//}
		).then(result =>{
			console.log(result);
		});
	}catch (error) {
		console.log('Task Failure', error);
	}
	ipa.user_show([], { uid: uid }).then(result => { 
		if(result.uid){
			console.log(result.uid);
		}
		console.log(result);
	});
} else if(callApi === 'user_find'){
	args.uid = process.argv[3];
	//ipa.user_find([], args).then(result => {console.log(result);});
	var n = 'user_find';
	ipa[n]([], args).then(result => {console.log(result);});

} else if(callApi === 'user_show'){
	args.uid = process.argv[3];
	ipa.user_show([], args).then(result => { console.log(result);});
} else if(callApi === 'user_mod'){
	args.uid = process.argv[3];
	args.givenname = process.argv[4];
	ipa.user_mod([], args).then(result => { console.log(result);});
} else if(callApi === 'user_del'){
	args.uid = process.argv[3];
	ipa.user_del([], args).then(result => { console.log(result);});
} else if(callApi === 'user_disable'){
	args.uid = process.argv[3];
	ipa.user_disable([], args).then(result => { console.log(result);});
} else if(callApi === 'user_enable'){
	args.uid = process.argv[3];
	ipa.user_enable([], args).then(result => { console.log(result);});
} else if(callApi === 'user_status'){
	args.uid = process.argv[3];
	ipa.user_status([], args).then(result => { console.log(result);});
} else if(callApi === 'group_find'){
	// node app.js host_show ipa.example.com
	args.fqdn = process.argv[3];
	ipa.group_find([], args).then(result => {console.log(result);});
} else if(callApi === 'group_add'){
	// cn: [ 'editors' ],
    // gidnumber: [ '1184800002' ],
    // description: [ 'Limited admins who can edit other users' ],
	// dn: 'cn=editors,cn=groups,cn=accounts,dc=example,dc=com' }
	
	// node app.js host_show ipa.example.com
	args.cn = process.argv[3];
	ipa.group_add([], args).then(result => {console.log(result);});
} else if(callApi === 'group_add_member'){
	args.cn = process.argv[3];
	args.uid = process.argv[4];
	ipa.group_add_member([], args).then(result => {console.log(result);});
} else if(callApi === 'group_del'){
	args.cn = process.argv[3];
	ipa.group_del([], args).then(result => {console.log(result);});
} else if(callApi === 'group_mod'){
	args.cn = process.argv[3];
	args.description = process.argv[4];
	ipa.group_mod([], args).then(result => {console.log(result);});
} else if(callApi === 'host_show'){
	// node app.js host_show ipa.example.com
	args.fqdn = process.argv[3];
	ipa.host_show([], args).then(result => {console.log(result);});
} else if(callApi === 'host_del'){
	args.fqdn = process.argv[3];
	ipa.host_del([], args).then(result => {console.log(result);});
} else if(callApi === 'host_find'){
	args.fqdn = process.argv[3];
	ipa.host_find([], args).then(result => {console.log(result);});
} else if(callApi === 'host_add'){
	args.fqdn = process.argv[3];
	ipa.host_add([], args).then(result => {console.log(result);});
} else if(callApi === 'hostgroup_add'){
	args.cn = process.argv[3];
	ipa.hostgroup_add([], args).then(result => {console.log(result);});
} else if(callApi === 'hostgroup_find'){
	args.cn = process.argv[3];
	ipa.hostgroup_find([], args).then(result => {console.log(result);});
} else if(callApi === 'hostgroup_show'){
	args.cn = process.argv[3];
	ipa.hostgroup_show([], args).then(result => {console.log(result);});
} else if(callApi === 'hostgroup_del'){
	args.cn = process.argv[3];
	ipa.hostgroup_del([], args).then(result => {console.log(result);});
} else if(callApi === 'hostgroup_mod'){
	args.cn = process.argv[3];
	args.description = process.argv[4];
	args.member_host = 'ipa.example.com';
	ipa.hostgroup_mod([], args).then(result => {console.log(result);});
} else if(callApi === 'automountlocation_find'){
	args.cn = process.argv[3];
	ipa.automountlocation_find([], args).then(result => {console.log(result);});
} else if(callApi === 'automountlocation_show'){
	args.cn = process.argv[3];
	ipa.automountlocation_show([], args).then(result => {console.log(result);});
} else if(callApi === 'automountlocation_add'){
	args.cn = process.argv[3];
	ipa.automountlocation_add([], args).then(result => {console.log(result);});
} else if(callApi === 'automountlocation_del'){
	args.cn = process.argv[3];
	ipa.automountlocation_del([], args).then(result => {console.log(result);});
} else if(callApi === 'automountmap_find'){
	args.automountlocationcn = process.argv[3];
	ipa.automountmap_find([], args).then(result => {console.log(result);});
} else if(callApi === 'automountmap_show'){
	args.automountlocationcn = process.argv[3];
	args.automountmapname = process.argv[4];
	ipa.automountmap_show([], args).then(result => {console.log(result);});
} else if(callApi === 'automountmap_add'){
	args.automountlocationcn = process.argv[3];
	args.automountmapname = 'auto.ipamaster,cn=default,cn=automount,dc=example,dc=com';
	ipa.automountmap_add([], args).then(result => {console.log(result);});
} else if(callApi === 'automountmap_mod'){
	args.automountlocationcn = process.argv[3];
	ipa.automountmap_mod([], args).then(result => {console.log(result);});
} else if(callApi === 'automountkey_find'){
	args.automountlocationcn = process.argv[3];
	args.automountmapautomountmapname =  process.argv[4];
	ipa.automountkey_find([], args).then(result => {console.log(result);});
} else if(callApi === 'automountkey_add'){
	args.automountlocationcn 			= process.argv[3];
	args.automountmapautomountmapname 	=  process.argv[4];
	ipa.automountkey_add([], args).then(result => {console.log(result);});
} else if(callApi === 'automountkey_mod'){
	args.automountlocationcn 			= process.argv[3];
	args.automountmapautomountmapname 	=  process.argv[4];
	args.automountkey					= process.argv[5];
	ipa.automountkey_mod([], args).then(result => {console.log(result);});
} else if(callApi === 'automountkey_del'){
	args.automountlocationcn 			= process.argv[3];
	args.automountmapautomountmapname 	=  process.argv[4];
	args.automountkey					= process.argv[5];
	ipa.automountkey_del([], args).then(result => {console.log(result);});
}
