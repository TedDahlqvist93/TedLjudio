const bcrypt = require("bcrypt");


module.exports = (app, db) => {

  // Authentication routes
  // register user
  app.post("/api/users", async (request, response) => {
    let password = await bcrypt.hash(request.body.password, 10);
    let firstName = request.body.firstName
    let lastName = request.body.lastName
    let email = request.body.email

    await db.query(`INSERT INTO users SET email = ?, password = ?, first_name = ?, last_name = ? `,
        [email, password, firstName, lastName])
        .catch(error => {
            console.log(error)
            response.status(400)
            response.json({error: "database error"})
        })
    response.status(200)
    response.json({firstName, lastName, email, loggedIn: true})
    
});

  // authentication: perform login
  app.post('/api/login', async (request, response) => {
    let user = await db.query('SELECT * FROM users WHERE email = ?', [request.body.email])
    user = user[0]

    if(user && user.email && (await bcrypt.compare(request.body.password, user.password))){
      request.session.user = user
      user.loggedIn = true
      delete user.password;
      response.status(200)
      response.json(user);
    }else{
      response.status(401) // unauthorized  https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
      response.json({message:"no matching user"})
    }
  })

  // authentication: get logged in user
  app.get('/api/login', async (request, response) => {
    let user
    if(request.session.user){
      user = await db.query('SELECT * FROM users WHERE email = ? AND password = ?', [request.session.user.email, request.session.user.password])
      user = user[0]
    }
    if(user && user.email){
      user.loggedIn = true
      response.json(user)
    }else{
      response.status(401) // unauthorized  https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
      response.json({message:"not logged in"})
    }
  })

  // logga ut
  app.delete('/api/login', async (request, response) => {
    request.session.destroy( () => {
      response.json({loggedIn: false})
    } )
  })

  
    // get playlist
    app.get('/api/playlists/:userId', async (request, response) => {
      const userId = request.params.userId
      if (!request.session.user) {
          response.status(403) // forbidden
          response.json({error: 'not logged in'})
          return;
      }
      let result = await db.query(
          `SELECT id, name, user_id
          FROM playlists
          WHERE user_id = ${userId}`)
          .catch((err) => {
              console.log(err)
          })
      response.json(result);
  })


  // add playlist
  app.post('/api/playlists/:userId/:name', async (request, response) => {
      if (!request.session.user) {
          response.status(403) // forbidden
          response.json({error: 'not logged in'})
          return;
      }
      let result = await db.query(`
          INSERT INTO playlists (user_id, name)
          VALUES (?, ?)`,
          [request.params.userId, request.params.name])
      response.json(result.insertId);
  })

  // delete playlist
  app.delete("/api/playlists/:userId/:id", async (request, response) => {
      console.log(request.params.id, request.params.userId)
      if (!request.session.user) {
          response.status(403) // forbidden
          response.json({error: 'not logged in'})
          return;
      }
      let result = await db.query(
          `DELETE FROM playlists
          WHERE id = ? AND user_id = ?`,
          [request.params.id, request.params.userId])
          .catch((error) => {console.log(error)})
      response.json(result)
  })}
