import app from "./app";

const PORT = process.env.PORT||5000;
async function main(){
    try {
        app.listen(PORT,()=>{
            console.log("Server is running!!")
        })
        
    } catch (error) {
        console.error("error staring the server:",error)
        process.exit(1)
        
    }
}

main()