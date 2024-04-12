require('dotenv').config()
import "reflect-metadata"
import app from './app'
import { AppDataSource } from "./db";

async function main(){
    try {
        await AppDataSource.initialize()
    
        const port = process.env.PORT//5000
    
        app.listen(port)
        console.log('Server listening on port', port);
        
        
        app.get("/test",(req, res) =>{
            res.status(200).json({
                message: "Hello word!!!"
            })
        })
        
    } catch (error) {
        console.error(error)
    }
}

main()

