import express from "express"
import dotenv from "dotenv"
dotenv.config()

const app = express() 

app.get("/", (req, res) => {
    return res.status(200).json({message: "Understanding Docker compose tool"})
})

const PORT = process.env || 4000
app.listen(PORT, () => {
    console.log(`Server is running at: ${PORT}`);
})