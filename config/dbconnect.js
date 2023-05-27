const {default :mongoose} = require("mangoose");

const dbConnect = () => {
    try {
        const conn = mongoose.connect();
        console.log("Databse connected successfully");
    }
    catch(error) {
       console.log("Database error");
    }
}