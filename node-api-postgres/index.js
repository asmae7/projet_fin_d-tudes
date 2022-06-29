const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3001
const db = require('./queries')
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

  app.use(express.json())
app.use(function (req, res, next) {
res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Expose-Headers','*');
  res.setHeader('strict-origin-when-cross-origin','*');
  res.setHeader('x-total-count','10000')
  next();
});

  app.get('/Qr_Code_Content', db.getUsers)
app.get('/Qr_Code_Content/:N_police', db.getUserById)
app.post('/Qr_Code_Content', db.createUser)
app.put('/Qr_Code_Content/:id', db.updateUser)
app.delete('/Qr_Code_Content/:id', db.deleteUser)

app.get('/localisation', db.getLocations)
app.get('/localisation/:id', db.getLocationById)
app.post('/localisation', db.createLocation)
app.put('/localisation/:id', db.updateLocation)
app.delete('/localisation/:id', db.deleteLocation)

app.get('/images', db.getImagesDetails)
app.get('/images/:id', db.getImageById)
app.post('/images', db.createImageDetails)
app.put('/images/:id', db.updateImagedetails)
app.delete('/images/:id', db.deleteImageDetails)

app.get('/vehicule_data', db.getVehicules)
app.get('/vehicule_data/:id', db.getVehiculeDataById)
app.post('/vehicule_data', db.createVehiculeData)
app.put('/vehicule_data/:id_police', db.updateVehiculeData)
app.delete('/vehicule_data/:id', db.deleteVehiculeData)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })