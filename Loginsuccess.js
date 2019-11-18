const con=require('./DBConnection')
const mysql=require('mysql')
const readline=require('readline-sync');
var emailid=readline.question('Enter EmailID:');
var password=readline.question('Enter Password:');

var sql="select * from Account where emailid=? and password=?";
var data=[emailid,password]
var sql=mysql.format(sql,data);
con.query(sql,(err,result)=>{
  if(err) throw err;
  else
  {
    if(result.length>0)
   console.log("Login Success");
    //var sender=readline.question('Enter Sender Name:');
    var reciever=readline.question('Enter Reciever Name:');
    var subject=readline.question('Enter subject:');
    var message=readline.question('Enter message:');

    var sql="insert into mail(sender, reciever, subject, message) values(?,?,?,?)";
    var data=[emailid,reciever,subject,message]
    var sql=mysql.format(sql,data);

    con.query(sql,(err)=>{
      if(err) throw err;
      else
      console.log("Mail Send Successfully...");
    })
  }
  })
