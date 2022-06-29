const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'GED_MOBILE',
  password: 'asmae2016',
  port: 5432,
})
//GET REQUESTS
//to get all users
const getUsers = (request, response) => {
    pool.query('SELECT * FROM Qr_Code_Content ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  //to get all vehicule data
  const getVehicules = (request, response) => {
    pool.query('SELECT * FROM vehicule_data ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  //to get all images details
  const getImagesDetails = (request, response) => {
    pool.query('SELECT * FROM images ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  //to get all location details
  const getLocations = (request, response) => {
    pool.query('SELECT * FROM localisation ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  //to get a user by policy number
  const getUserById = (request, response) => {
    const N_police =request.params.N_police
  
    pool.query('SELECT N_police,id FROM Qr_Code_Content WHERE N_police = $1', [N_police], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  const getUserById2 = (request, response) => {
    const id =parseInt(request.params.id)
  
    pool.query('SELECT * FROM Qr_Code_Content WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
    //to get a vehicule data by id
  const getVehiculeDataById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT id FROM vehicule_data WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  } 
   //to get a image by id
  const getImageById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT base64 FROM images WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
  //to get a location by id
const getLocationById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM localisation WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  //POST REQUESTS
//create a user
const createUser = (request, response) => {
    const { N_police, N_avenant } = request.body
  
    pool.query('INSERT INTO Qr_Code_Content (N_police, N_avenant) VALUES ($1, $2) RETURNING *', [N_police, N_avenant], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`${results.rows[0].id}`)
    })
  }
  //create a vehicule data
  const createVehiculeData = (request, response) => {
    const { date,id_police } = request.body
  
    pool.query('INSERT INTO vehicule_data (date,id_police) VALUES ($1, $2) RETURNING *', [date,id_police], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`${results.rows[0].id}`)
    })
  }
  //create a image details
  const createImageDetails = (request, response) => {
    const { extention,base64,upload_date,id_vehicule,name_file } = request.body
  
    pool.query('INSERT INTO images (extention,base64,upload_date,name_file,id_vehicule) VALUES ($1, $2,$3,$4,$5) RETURNING *', [extention,base64,upload_date,name_file,id_vehicule], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`${results.rows[0].id}`)
    })
  }
  //create a location
  const createLocation = (request, response) => {
    const { longitude,latitude,id_vehicule,id_image } = request.body
  
    pool.query('INSERT INTO localisation (longitude,latitude,id_vehicule,id_image) VALUES ($1, $2, $3,$4) RETURNING *', [longitude,latitude,id_vehicule,id_image], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`location added with ID: ${results.rows[0].id}`)
    })
  }
  //PUT REQUESTS
  //update a user
  const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { N_police,N_avenant } = request.body
  
    pool.query(
      'UPDATE Qr_Code_Content SET N_police = $1, N_avenant = $2 WHERE id = $3',
      [N_police,N_avenant, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`${id}`)
      }
    )
  }
  //update a vehicule data
  const updateVehiculeData = (request, response) => {
    const id = parseInt(request.params.id)
    const { date,id_police } = request.body
  
    pool.query(
      'UPDATE vehicule_data SET date = $1, id_police = $2 WHERE id = $3',
      [date,id_police, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`vehicule data modified with ID: ${id}`)
      }
    )
  }
  // update a image details
  const updateImagedetails = (request, response) => {
    const id = parseInt(request.params.id)
    const { extention,name_file,base64,upload_date } = request.body
  
    pool.query(
      'UPDATE images SET extention = $1, base64=$2, upload_date=$3 id_vehicule=$4 , name_file = $5 WHERE id = $6',
      [extention,base64,upload_date,id_vehicule ,name_file,id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`image details modified with ID: ${id}`)
      }
    )
  }
//update a location details
const updateLocation = (request, response) => {
    const id = parseInt(request.params.id)
    const { longitude,latitude } = request.body
  
    pool.query(
      'UPDATE localisation SET longitude = $1, latitude = $2,id_vehicule=$3 WHERE id = $4',
      [longitude,latitude,id_vehicule, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`location details modified with ID: ${id}`)
      }
    )
  }
  //DELETE REQUESTS
  //delete a user
  const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM Qr_Code_Content WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }
//delete a vehicule data
const deleteVehiculeData = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM vehicule_data WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`vehicule data deleted with ID: ${id}`)
    })
  }
  //delete a image data
  const deleteImageDetails = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM images WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`image data deleted with ID: ${id}`)
    })
  }
  //delete a location
  const deleteLocation = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM localisation WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`location deleted with ID: ${id}`)
    })
  }
  module.exports = {
    getUsers,
    getLocations,
    getVehicules,
    getImagesDetails,
    getUserById,
    getUserById2,
    getLocationById,
    getImageById,
    getVehiculeDataById,
    createUser,
    createLocation ,
    createImageDetails,
    createVehiculeData,
    updateUser,
    updateLocation,
    updateImagedetails,
    updateVehiculeData,
    deleteUser,
    deleteLocation,
    deleteImageDetails,
    deleteVehiculeData ,
  }