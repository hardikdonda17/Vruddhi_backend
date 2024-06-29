const connection = require("../../connection");

exports.addScreening = (req, res) => {
    console.log("Add Screening Api called.");
    const { women_name, husband_name, dob, age, address, village, mobile, date_of_LMP,
        current_month_of_pregnancy, height, weight, is_low_BMI } = req.body;
        var query = `INSERT INTO screening (women_name, husband_name, dob, age, address, village, mobile, date_of_LMP, current_month_of_pregnancy, height, weight, is_low_BMI) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    connection.query(query, [women_name, husband_name, dob, age, address, village, mobile, date_of_LMP, current_month_of_pregnancy, height, weight, is_low_BMI], (err, result) => {
        if (result) {
            console.log({ StatusCode: 200, msg: "Screening successfully!" });
            res.send({ StatusCode: 200, msg: "Screening successfully!" });
        } else {
            console.log(err)
            res.send({ StatusCode: 400, msg: "Something went wrong!" });
        }
    });
}

exports.getAllScreenings = (req, res) => {
    console.log("Get All Screening Api called.");
    var query = "SELECT * FROM screening";
    connection.query(query, (err, result)=>{
        if(result){
            res.send({StatusCode: 200, msg: "Data received", data:result});
        }else {
            console.log(err)
            res.send({ StatusCode: 400, msg: "Something went wrong!" });
        }
    })
}

exports.getScreeningsById = (req, res) => {
    console.log("Get Screening By Id Api called.");
    const username = req.params.username;
    var query = "SELECT villages FROM user WHERE username = ?";
    connection.query(query,[username],(err, result) => {
        if(result){
            const villages = result[0].villages.split(',').map(village => village.trim());
            var villagesList = villages.map(() => '?').join(',');
            var query1 = `SELECT * FROM screening WHERE village IN (${villagesList})`;
            connection.query(query1, villages, (err, result1)=>{
                if(result1){
                    res.send({StatusCode: 200, msg: "Data received", data:result1});
                }else {
                    console.log(err)
                    res.send({ StatusCode: 400, msg: "Something went wrong!" });
                }
            });
        }
    });
}

exports.register = (req, res) => {
    console.log("register called.");
    const { screening_id, no_of_pregnancy, no_of_live_children, no_of_abortion, education, occupation, illness, is_ANM_registered, user_id } = req.body;
        var query = `INSERT INTO registration (screening_id, no_of_pregnancy, no_of_live_children, no_of_abortion, education, occupation, illness, is_ANM_registered, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    connection.query(query, [screening_id, no_of_pregnancy, no_of_live_children, no_of_abortion, education, occupation, illness, is_ANM_registered, user_id], (err, result) => {
        if (result) {
            console.log({ StatusCode: 200, msg: "Registration successfully!" });
            res.send({ StatusCode: 200, msg: "Registration successfully!" });
        } else {
            console.log(err)
            res.send({ StatusCode: 400, msg: "Something went wrong!" });
        }
    });
}

exports.getAllRegistrations = (req, res) => {
    console.log("Get All Registrations Api called.");
    var query = "SELECT * FROM registration";
    connection.query(query, (err, result)=>{
        if(result){
            res.send({StatusCode: 200, msg: "Data received", data:result});
        }else {
            console.log(err)
            res.send({ StatusCode: 400, msg: "Something went wrong!" });
        }
    })
}

