const mysql=require('mysql')
var con=mysql.createConnection({
  'host':'localhost',
  'database':'assignment',
  'user':'root',
  'password':'root',
  'port':'3306'
})

module.exports=con;

/*  con.connect((err)=>{
   if(err) throw err;
   else
   console.log("DB Connected");
 })*/
