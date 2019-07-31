const express = require('express')
const bodyParser = require('body-parser')
const { ObjectID, MongoClient } = require('mongodb')
const assert = require('assert')

const app = express()
app.use(bodyParser.json())
const MongoUrl = 'mongodb://localhost:27017'
const database = 'Reservi'

MongoClient.connect(MongoUrl, { useNewUrlParser: true }, (err, client) => {
    assert.equal(null, err, 'can not connect to database')
    const db = client.db(database)

    // //add contact
    // app.post('/add-contact',(req,res)=>{
    //     let newcontact=req.body
    //     db.collection('contacts').insertOne(newcontact,(err,data)=>{
    //         if(err) res.send('cant not add contact')
    //         else res.send(data)
    //     })
    // })
    // //get contact
    // app.get('/get-post',(req,res)=>{

    // db.collection('contacts').find().toArray((err,data)=>{
    //      if(err) res.send('can not get contact')
    //     else res.send(data)
    // })   
    // })
    // //remove contact
    // app.delete('/delete-contact/:id',(req,res)=>{
    //     let id=ObjectID(req.params.id)
    //     db.collection('contacts').findOneAndDelete({_id:id},(err,data)=>{
    //         if (err) res.send('can not delete contact')
    //         else res.send(data)
    //     })
    // })
    // //edit contact
    // app.put('/edit-contact/:id',(req,res)=>{
    //     let id=ObjectID(req.params.id)
    //     let updated=req.body
    // db.collection('contacts').findOneAndUpdate({_id:id},{$set:{...updated}},(err,data)=>{
    //     if(err) res.send('can not edit the contacts')
    //     else res.send (data)
    // })
    // })
    app.get('/get-salleEsthetique', (req, res) => {
        db.collection('salleEsthetique').find().toArray((err, data) => {
            if (err) res.send('can not get salle esthetique')
            else res.send(data)
        })
    })
    app.get('/get-salleSport', (req, res) => {
        db.collection('salleSport').find().toArray((err, data) => {
            if (err) res.send('can not get salle esthetique')
            else res.send(data)
        })
    })
    app.get('/get-salleFete', (req, res) => {
        db.collection('salleFete').find().toArray((err, data) => {
            if (err) res.send('can not get salle esthetique')
            else res.send(data)
        })
    })
    //get users email
    app.get('/get-users-email', (req, res) => {
        db.collection('users').find().toArray((err, data) => {
            if (err) res.send('can not get users email')
            else res.send(data.map(el => el.email))
        })
    })
    //get users password/id
    app.get('/get-user-passwordId', (req, res) => {
        db.collection('users').find().toArray((err, data) => {
            if (err) res.send('can not get user password')
            else res.send(data.map(el => {
                var obj = {};
                obj._id = el._id
                obj.password = el.password
                return obj
            }))
        })
    })
    //add newUSer
    app.post('/add-user', (req, res) => {
        let newUser = req.body
        db.collection('users').insertOne(newUser, (err, data) => {
            if (err) res.send('can not add user')
            else res.send(data)
        })
    })
    //add new host salle fete
    app.post('/add-salle-fete-host', (req, res) => {
        let newsalle = req.body
        db.collection('salleFete').insertOne(newsalle, (err, data) => {
            if (err) res.send('cant not add salle')
            else res.send(data)
        })
    })
    //add new host salle de sport
    app.post('/add-salle-sport-host', (req, res) => {
        let newsalle = req.body
        db.collection('salleSport').insertOne(newsalle, (err, data) => {
            if (err) res.send('cant not add salle')
            else res.send(data)
        })
    })
    //add new host salle esthetique
    app.post('/add-salle-esthetique-host', (req, res) => {
        let newsalle = req.body
        db.collection('salleEsthetique').insertOne(newsalle, (err, data) => {
            if (err) res.send('cant not add salle')
            else res.send(data)
        })
    })

})




app.listen(3055, (err) => {
    assert.equal(null, err, 'server not running')
    console.log('the server is running on port 3055')
})
