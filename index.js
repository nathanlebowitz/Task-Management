import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
    console.log('hello from my middlewear')
    next()
})

function rootHandler(req, res) {
    res.send('hello world')
}

app.get('/api', rootHandler)

app.post('/tasks', (req, res) => {
    res.json(req.body)

})

app.get('/tasks', (req, res) => {
    const tasks =
        [{
            title: ' register on VP',
            done: true,
            userName: '',
            deleted: false
        }, {
            title: 'Learn React.JS',
            done: false,
            userName: '',
            deleted: false
        }, {
            title: 'Learn Express.JS',
            done: false,
            userName: '',
            deleted: false
        }]
    res.json(tasks)
})


app.listen('3000', () => {
    console.log('The server is now running and listening for requests')
})