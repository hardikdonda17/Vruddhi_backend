const pregnantWomen = require("./controller")
var pregnantWomenString = "/pregnantWomen";
module.exports = (app) => {
    //Screening
    app.post(pregnantWomenString+"/addScreening", pregnantWomen.addScreening);
    app.get(pregnantWomenString+"/getAllScreenings", pregnantWomen.getAllScreenings);
    app.get(pregnantWomenString+"/getScreeningsById/:username", pregnantWomen.getScreeningsById);

    //Registration
    app.post(pregnantWomenString+"/register", pregnantWomen.register);
    app.get(pregnantWomenString+"/getAllRegistrations", pregnantWomen.getAllRegistrations);

}