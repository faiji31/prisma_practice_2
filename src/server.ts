import app from "./app";
import config from "./config";
import { prisma } from "./lib/prisma";

const PORT = config.port
async function main(){
    try {
        await prisma.$connect()
        console.log("prisma is connect successfully!!")
        app.listen(PORT,()=>{
            console.log("Server is running!!")
        })
        
    } catch (error) {
        console.error("error staring the server:",error)
        await prisma.$disconnect()
        process.exit(1)
        
    }
}

main()