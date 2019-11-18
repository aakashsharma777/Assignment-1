const con=require('./DBConnection')
const mysql=require('mysql')
const readline=require('readline-sync');



var emailid=readline.question('Enter EmailID:');
var cpassword=readline.question('Enter Current Password:');
var npassword=readline.question('Enter New Password:');


var sql="update Account set password=? where emailid=? and password=?";

var data=[npassword, emailid, cpassword]
var sql=mysql.format(sql,data);
console.log(sql)
con.query(sql,(err,result)=>{
  if(err) throw err;
  else if(result.changedRows>0)
  console.log("Password Change Successfully....")
  else
  console.log("Not Changed");
  })
