const app=require("./app");
const dotenv=require('dotenv');
const connectDatabase=require("./config/database");

// Handling uncaught Exception
process.on('uncaughtException',err=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to uncaught Exception`);
    process.exit(1);
    });

dotenv.config({path:"config/config.env"});

// Database
connectDatabase();


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})


// Unhandled Promise Rejection
process.on('unhandledRejection',err=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to unhandled Promise Rejection`);

    server.close(()=>{
        process.exit(1);
    });
});