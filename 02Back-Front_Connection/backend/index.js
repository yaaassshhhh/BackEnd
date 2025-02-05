import dotenv from "dotenv"
import express from "express"
dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.get("/",(req,res) => {
    res.send("<h1>Hello, Serving...</h1>");
})

app.get("/api/jokes", (req,res) => {
    const jokes = [
        {
            id : '1',
            question : 'What is the best thing about Switzerland?',
            answer : 'I do not know, but the flag is a big plus.'
        },
        {
            id : '2',
            question : '2--What is the best thing about Switzerland?',
            answer : '2--I do not know, but the flag is a big plus.'
        },
        {
            id : '3',
            question : '3--What is the best thing about Switzerland?',
            answer : '3--I do not know, but the flag is a big plus.'
        },
        {
            id : '4',
            question : '4--What is the best thing about Switzerland?',
            answer : '4--I do not know, but the flag is a big plus.'
        },
        {
            id : '5',
            question : '5--What is the best thing about Switzerland?',
            answer : '5--I do not know, but the flag is a big plus.'
        }
    ]
    res.send(jokes);
})

app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
})