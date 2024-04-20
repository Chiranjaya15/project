import mongoose from "mongoose";
import config from "../configs";
import logger from "../util/logger";
import bodyParser from "body-parser";


let database;

const connect= async () => {

    const MONGODB_URL=config.DB_CONNECTION_STRING;

    if (database) return;

    const options ={ 
        useNewUrlParser:true,
        useUnifiedTopology:true

    }
    //connection for Furniture connection 
    mongoose.connect(MONGODB_URL,options)
    .then((connection ) => {
        database =connection ;
        logger.info("Database Synced");
        
    })
    .catch((err) => {
        logger.error(err.message);

    })     

        }

        export {connect};
    
