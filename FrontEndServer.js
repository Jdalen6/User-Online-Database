var http = require('http');
var url = require('url');
var querystring = require('querystring');
var fs = require('fs');
var mysql = require('mysql');
var port = 8080;

const con = mysql.createConnection({ //Database no longer hosted so details have been removed
    host: "",
    user: "",
    password: "",
    database: ""
});
//Create the server
var server = http.createServer();

server.on("request", function (req, resp) {
    let currentRoute = url.format(req.url);
    let currentMethod = req.method;
    var reqBody = "";


    switch (currentRoute) {
        //The default page that is shown
        case "/":
            fs.readFile(__dirname + "/assignment-04.html", function (err, data) {
                var headers = {
                    "Content-Type": "text/html",
                };
                resp.writeHead(200, headers);
                resp.end(data);
            });

            break;

        //Triggered when either button is pressed
        case "/api/user":
            //When the create user button is pressed
            if (currentMethod === "POST") {
                req.on("data", function (chunk) {
                    reqBody += chunk.toString();
                });

                const { headers } = req;
                let ctype = headers["content-type"];

                req.on("end", function () {
                    let userData = "";

                    if (ctype.match(new RegExp('^application/x-www-form-urlencoded'))) {
                        userData = querystring.parse(reqBody);
                    }
                    else {
                        userData = JSON.parse(reqBody);
                    }

                    //Sql connection to database is performed here
                    console.log(userData);

                    let sql = `INSERT INTO User_Information (Title, FirstName, Surname, Mobile, EmailAddress)
                               VALUES ('${userData.title}','${userData.firstname}','${userData.surname}','${userData.phone}','${userData.email}')`;
                    con.query(sql, (err, results, fields) => {
                        if (err) throw err;
                        let user_id = results.insertId;
                        sql = `INSERT INTO Home_Address (User_ID, AddressLine1, AddressLine2,Town,County,Eircode)
                               VALUES ('${user_id}','${userData.addLine1}','${userData.addLine2}','${userData.town}','${userData.county}','${userData.eircode}')`;
                        con.query(sql, (err, results, fields) => {
                            if (err) throw err;
                        });
                        sql = `INSERT INTO Shipping_Address (User_ID, AddressLine1, AddressLine2,Town,County,Eircode)
                        VALUES ('${user_id}','${userData.addLine1}','${userData.addLine2}','${userData.town}','${userData.county}','${userData.eircode}')`;
                        con.query(sql, (err, results, fields) => {
                            if (err) throw err;
                        });
                        console.log("User successfully added");
                    });
                    var headers = {
                        "Content-Type": "text/plain",
                    };
                    resp.writeHead(200, headers);
                    resp.end();
                });
            }

            //get method here triggered when retrieve user button is clicked

            else if (currentMethod === "GET") {
                var headers = {
                    "Content-Type": "application/json",
                };
                //A random name is selected from the database to be used 
                con.query('SELECT FirstName FROM User_Information', (err, results, fields) => {
                    if (err) throw err;

                    let namesArray = results.map(results => results.FirstName);
                    let nameIndex = Math.floor(Math.random() * namesArray.length);
                    let randomName = namesArray[nameIndex];

                    //A join is performed to show information from both tables
                    sql = `SELECT *
                    FROM User_Information
                    INNER JOIN Home_Address
                    ON User_Information.User_ID = Home_Address.User_ID
                    WHERE User_Information.FirstName = '${randomName}'`;
                    con.query(sql, (err, results, fields) => {
                        if (err) throw err;
                        resp.writeHead(200, headers);
                        resp.end(JSON.stringify(results)); //The information recieved from the database is converted to json and sent to the client to be added to the webpage
                    });
                });
            }
            break;
    }
});

server.listen(port, function () {
    console.log("Successfully connected on port: " + port);
});

