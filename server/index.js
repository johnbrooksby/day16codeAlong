const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

let database = [
    'greeting card', 'wagon', 'computer', 'table', 'chair', 'milk', 'sailboat', 'conditioner', 'rusty nail', 'desk'
]

app.get("/api/inventory", (req, res) => {

    let item = req.query.item

    if (item) {
        item = item.toLowerCase()
        let responseArr = []

        for (let i = 0; i < database.length; i++)
            if (database[i].includes(item)){
                responseArr.push(database[i])
            }
            res.status(200).send(responseArr)
    } else {
        res.status(200).send(database)
    }
})

app.get('/api/inventory/:id', (req, res) => {
    let id = req.params.id

    res.status(200).send(database[id])
})

app.listen(5050, () => {
    console.log("app listening on 5050")
})

