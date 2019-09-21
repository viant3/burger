var mysql = require("mysql");


var connection = mysql.createConnection({
  host: "kavfu5f7pido12mr.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "gdy66lhioyqwn1ju",
  password: "wnlzecv2747fv21j",
  database: "i11746drunz1928o"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
