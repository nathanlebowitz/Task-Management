import express from 'express'
import cors from 'cors'
import pgPromise from 'pg-promise'

const pgp = pgPromise()
const db = pgp({
    host: 'ep-blue-boat-a6g47ocs.us-west-2.retooldb.com',
    port: '5432',
    database: 'retool',
    user: 'retool',
    password:'t9gNolXYaG7L',
    ssl: true

})

const app = express()
app.use(cors())
app.use(express.json())





app.post('/tasks', async (req, res) => {
    const result = await db.one('insert into todos.task (user_id, title) select id, ${title} from todos.person where name = ${userName} and pass = ${password} returning *', {
        title: req.body.title,
        userName: req.body.userName,
        password: req.body.password
        
    } )
    res.json({
        title:result.title,
        done: false,
        id: result.id,
        ok: true
    })

})

app.get('/tasks/:userName/:password', async (req, res) => {
    const tasks = await db.manyOrNone('select * from todos.task where deleted_at is null and user_id = (SELECT id  FROM todos.person  WHERE name = ${userName} and pass = ${password})',{
        userName: req.params.userName,
        password: req.params.password

    })
    res.json(tasks.map(task=> ({id: task.id, title: task.title, done: task.status !== 'active'})))
})
       

app.patch('/tasks/:id/:userName/:password', async (req, res) => {
    const result = await db.none("update todos.task set status = 'done' where id = ${id} and user_id = (SELECT id  FROM todos.person  WHERE name = ${userName} and pass = ${password})",{
        id:req.params.id,
        userName:req.params.userName,
        password: req.params.password
    })
    res.json({ok : true})
})

app.delete('/tasks/:id/:userName/:password' , async (req, res) => {
    await db.none("update todos.task set deleted_at = now() where id = ${id} and user_id = (SELECT id  FROM todos.person  WHERE name = ${userName} and pass = ${password})",{
        id: req.params.id,
        userName:req.params.userName,
        password: req.params.password
    })
    res.json({ok: true})
})

app.post('/users', async(req, res) =>{
    const result = await db.one('insert into todos.person (name, pass) values(${name},${password}) returning *',{
        name: req.body.name,
        password: req.body.password
    })
    res.json({ok:true})
})

app.post('/login', async(req,res) =>{
    try{const result = await db.one('select * from todos.person where name = ${name} and pass = ${password}',{
        name: req.body.name,
        password: req.body.password
    })
    res.json({ok:true})}
    catch(e)
    {res.json({ok:false})}
})



app.listen('3000', () => {
    console.log('The server is now running and listening for requests')
})