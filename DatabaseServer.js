/*

  Author - James Dalen
  Device - M1 macbook air 
  
  */




const mysql = require('mysql');
const readline = require('readline'); //used for getting input
let randomName;


const con = mysql.createConnection({  //Database is no longer being hosted so details have been removed
    host: "",
    user: "",
    password: "",
    database: ""
});


const userInput = readline.createInterface({
    input: process.stdin,       //reading input from console
    output: process.stdout      //outputting to console
});

//For part (i) Crud operations:



//Used to validate the title 
function isValidTitle(title) {
    const validTitles = ['Mr', 'Mrs', 'Ms', 'Dr', 'Mx', 'Miss', 'Other'];
    return validTitles.includes(title);
}
//Had problems with an infinite loop trying to validate title so made a callback function to make it easier and so i can reuse it
function promptForTitle(callback) {
    userInput.question('Enter title: ', (title) => {
        if (isValidTitle(title)) {
            callback(title);
        } else {
            console.log('Invalid title. Titles accepted: Mr, Ms, Mrs, Mx, Miss, Dr, Other. Please try again.');
            promptForTitle(callback);
        }
    });
}

//Asking for user input to fill in user credentials
// Needs to be nested as the queries are asynchronous 
promptForTitle((title) => {
    userInput.question('Enter first name: ', (Fname) => {
        userInput.question('Enter surname: ', (surname) => {
            userInput.question('Enter email: ', (email) => {
                userInput.question('Enter phone: ', (phone) => {
                    userInput.question('Enter Address Line 1: ', (addressLine1) => {
                        userInput.question('Enter Address Line 2: ', (addressLine2) => {
                            userInput.question('Enter Town: ', (town) => {
                                userInput.question('Enter County: ', (county) => {
                                    userInput.question('Enter Eircode: ', (eircode) => {
                                        let sql = `INSERT INTO User_Information (Title,FirstName,Surname,Mobile,EmailAddress) VALUES ('${title}', '${Fname}', '${surname}', '${phone}', '${email}')`; //entering values into the user table
                                        con.query(sql, (error, results, fields) => {
                                            if (error) throw error;
                                            //Need to use multiple queries as there are 3 separate tables
                                            let user_id = results.insertId; //Gets the primary key for the user just added so it can match with the address tables
                                            sql = `INSERT INTO Home_Address (User_ID,AddressLine1,AddressLine2,Town,County,Eircode) VALUES ('${user_id}', '${addressLine1}', '${addressLine2}', '${town}', '${county}', '${eircode}')`;
                                            con.query(sql, (error, results, fields) => {
                                                if (error) throw error;
                                                sql = `INSERT INTO Shipping_Address (User_ID,AddressLine1,AddressLine2,Town,County,Eircode) VALUES ('${user_id}', '${addressLine1}', '${addressLine2}', '${town}', '${county}', '${eircode}')`;
                                                con.query(sql, (error, results, fields) => {
                                                    if (error) throw error;
                                                    console.log(`User ${Fname} added to database.`);
                                                    console.log();
                                                    console.log();
                                                    console.log();


                                                    //Part (ii) Retrieving data 



                                                    //Selecting a random first name from the database


                                                    con.query('SELECT FirstName FROM User_Information', (err, results, fields) => {
                                                        if (err) throw err;

                                                        let namesArray = results.map(results => results.FirstName);
                                                        let nameIndex = Math.floor(Math.random() * namesArray.length);
                                                        randomName = namesArray[nameIndex];

                                                        //Returning all personal information for the user name selected
                                                        sql = `SELECT * FROM User_Information WHERE FirstName LIKE '%${randomName}%'`;
                                                        con.query(sql, (err, results, fields) => {
                                                            if (err) throw err;

                                                            console.log("Name selected for random search: " + randomName);
                                                            console.log();
                                                            console.log();
                                                            console.table(results); //printing it as a table so it is easier to read
                                                            console.log();
                                                            console.log();
                                                            console.log();


                                                            // Part (iii) Updating record

                                                            userInput.question('Please enter User ID for the user you wish to update (User ID starts from 5): ', (User_ID) => {
                                                                sql = `SELECT *
                                                                FROM User_Information
                                                                INNER JOIN Home_Address
                                                                ON User_Information.User_ID = Home_Address.User_ID
                                                                WHERE User_Information.User_ID = ${User_ID}`
                                                                con.query(sql, (err, results, fields) => {
                                                                    if (err) throw err;
                                                                    console.log("This is the current information for " + results[0].FirstName);
                                                                    console.log();
                                                                    console.table(results);
                                                                    console.log();
                                                                    console.log();
                                                                    console.log();
                                                                    userInput.question('Please enter a new phone number: ', (phone) => {
                                                                        userInput.question('Please enter a new email address: ', (email) => {
                                                                            promptForTitle((title) => {
                                                                                userInput.question('Please enter new Eircode: ', (eircode) => {
                                                                                    sql = `UPDATE User_Information 
                                                                                            SET Mobile = '${phone}', EmailAddress = '${email}', Title = '${title}'
                                                                                            WHERE User_ID = ${User_ID}; `;
                                                                                    con.query(sql, (err, results, fields) => {    //Updates user_information table
                                                                                        if (err) throw err;

                                                                                        sql = ` UPDATE Home_Address
                                                                                                 SET Eircode = '${eircode}'
                                                                                                WHERE User_ID = ${User_ID};`

                                                                                        con.query(sql, (err, results, fields) => {   //updates home address table
                                                                                            if (err) throw err;

                                                                                            sql = `UPDATE Shipping_Address
                                                                                                    SET Eircode = '${eircode}'
                                                                                                    WHERE User_ID = ${User_ID};`
                                                                                            con.query(sql, (err, results, fields) => {  //updates shipping address table
                                                                                                if (err) throw err;

                                                                                                console.log("User information successfully updated!");
                                                                                                console.log();
                                                                                                console.log();
                                                                                                console.log();



                                                                                                // For Part (iv) Deleting:

                                                                                                userInput.question('Please enter the email for the user you wish to delete: ', (email) => {
                                                                                                    userInput.question('Please enter the phone number for the user you wish to delete: ', (phone) => {
                                                                                                        userInput.question('Please enter the first name of the user you wish to delete: ', (Fname) => {
                                                                                                            userInput.question('Please enter the surname of the user you wish to delete: ', (surname) => {

                                                                                                                //Deletes all records according to the provided information, if any record exists
                                                                                                                sql = `DELETE from User_Information
                                                                                                                        WHERE FirstName = '${Fname}' AND Surname = '${surname}' AND Mobile = '${phone}' AND EmailAddress = '${email}'`;
                                                                                                                con.query(sql, (err, results, fields) => {
                                                                                                                    if (err) throw err;
                                                                                                                    
                                                                                                                    if(results.affectedRows > 0)  //Checks if a user was actually deleted from the database
                                                                                                                    {
                                                                                                                        console.log("User deleted successfully");
                                                                                                                    } else{
                                                                                                                        console.log("Could not find user");
                                                                                                                    }
                                                                                                                    
                                                                                                                    con.end();
                                                                                                                    userInput.close();

                                                                                                                });
                                                                                                            });
                                                                                                        });
                                                                                                    });
                                                                                                });
                                                                                            });
                                                                                        });
                                                                                    });
                                                                                });
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});







