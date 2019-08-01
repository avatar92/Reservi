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


    /* ------------------------------introductionPage-------------------------------------------*/

    //get users email
    app.get('/get-users-email', (req, res) => {
        db.collection('users').find().toArray((err, data) => {
            if (err) res.send('can not get users email')
            else res.send(data.map(el => el.email))
        })
    })
 
    app.post('/add-user', (req, res) => {
        let { fullname, username, email, password } = req.body
        db.collection('users').insertOne({ fullname, username, email, password}, (err, data) => {
            if (err) res.send('can not add user')
            else res.send(data)
        })
    })
    /*************************************************deleting data from each collection */
    app.delete('/delete-salleEsthetique/:id', (req, res) => {
        let id = ObjectID(req.params.id)
        db.collection('salleEsthetique').findOneAndDelete({ _id: id }, (err, data) => {
            if (err) res.send('can not delete salle Esthetique')
            else res.send(data)
        })
    })
    app.delete('/delete-salleFete/:id', (req, res) => {
        let id = ObjectID(req.params.id)
        db.collection('salleFete').findOneAndDelete({ _id: id }, (err, data) => {
            if (err) res.send('can not delete salle Fete')
            else res.send(data)
        })
    })
    app.delete('/delete-salleSport/:id', (req, res) => {
        let id = ObjectID(req.params.id)
        db.collection('salleSport').findOneAndDelete({ _id: id }, (err, data) => {
            if (err) res.send('can not delete salle Esthetique')
            else res.send(data)
        })
    })
    ///************************************test */
    app.post('/add-salleEsthetique', (req, res) => {
        let newSalleEsthetique = req.body
        db.collection('salleEsthetique').insertOne(newSalleEsthetique, (err, data) => {
            if (err) res.send('cant not add salle Esthetique')
            else res.send(data)
        })
    })
    /**********************************handling message */
    app.post('/add-message', (req, res) => {
        let message = req.body
        db.collection('message').insertOne(message, (err, data) => {
            if (err) res.send('cant not message')
            else res.send(data)
        })
    })
    app.get('/get-message', (req, res) => {
        db.collection('message').find().toArray((err, data) => {
            if (err) res.send('can not get salle message')
            else res.send(data)
        })
    })
    /**********************************handling previousmessage */
    app.get('/get-lastpreviousmessage', (req, res) => {
        db.collection('previousmessage').find().toArray((err, data) => {
            if (err) res.send('can not get salle previousmessage')
            else res.send(data[data.length - 1])
        })
    })
    app.post('/add-previousmessage', (req, res) => {
        let previousmessage = req.body
        db.collection('previousmessage').insertOne(previousmessage, (err, data) => {
            if (err) res.send('cant not get previousmessage')
            else res.send(data)
        })
    })
})




app.listen(3055, (err) => {
    assert.equal(null, err, 'server not running')
    console.log('the server is running on port 3055')
})
