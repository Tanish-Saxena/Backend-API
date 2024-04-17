import {app} from "./app.js"
import { connectDb } from "./data/databaseMongoose.js";

connectDb() ;

app.listen(process.env.PORT, () => {
    console.log("Server is Working");
  });
  