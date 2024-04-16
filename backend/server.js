import express from "express"

const app = express()

app.get('/', (req, res)=>{
    res.send('Server is ready')
})

app.get("/api/jokes", (req, res) =>{
    const jokes = [
        {
          "id": 1,
          "title": "Chicken Crossed the Road",
          "content": "Why did the chicken cross the road? To get to the other side!"
        },
        {
          "id": 2,
          "title": "Time Travel",
          "content": "I told my wife I wanted to go back to the 80s. She told me to wait until we get home."
        },
        {
          "id": 3,
          "title": "Photographer's Problem",
          "content": "I told my wife she should embrace her mistakes. She gave me a hug."
        },
        {
          "id": 4,
          "title": "Math Joke",
          "content": "Parallel lines have so much in common. It’s a shame they’ll never meet."
        },
        {
          "id": 5,
          "title": "Coffee Addiction",
          "content": "Why did the coffee file a police report? It got mugged."
        }
      ]
      res.send(jokes)
})

const port = process.env.port || 3000

app.listen(port, (req, res) =>{
    console.log(`Server is running on port ${port}`)
})