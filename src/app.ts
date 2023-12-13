import { Server } from "./presentation/server";
import {envs} from './config/envs';
import { AppRoutes } from "./presentation/routes";
import { MongoDatabase } from "./data/mongo/mongo-database";


(()=>{
   main();
})();



async function main() {
    await MongoDatabase.connect({
        dbName : envs.DB_NAME,
        mongoUrl : envs.MONGO_URL
    })
    new Server({
        port : envs.PORT,
        routes : AppRoutes.routes
    }).start();
}