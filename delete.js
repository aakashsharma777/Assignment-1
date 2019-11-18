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
    if(result.length>0)
    {
   console.log("Login Success");
   var sql="delete from mail where sender=?";
   var data=[emailid]
   var sql=mysql.format(sql,data);
   con.query(sql,(err)=>{
     if(err) throw err;
     else
     {
       console.log(result);
       var command=readline.question('Do you Really want to delete all mails from inbox..(Y/N)')
       if(command=='Y')
       {
         var sql="delete from mail where sender=?";
         var data=[emailid]
         var sql=mysql.format(sql, data);
         con.query(sql,(err)=>{
           if(err) throw err;
           else
           console.log("Mail Deleted...");
   })
 }
      else{
       console.log("Mail not Deleted...");
  }
    }
  })
 }
 else
  console.log("Login Failed.....");
})
