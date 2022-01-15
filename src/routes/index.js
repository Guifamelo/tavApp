const { Router } = require('express') //pegar o roteador do express
// const { route } = require('express/lib/application')   ... apareceu sozinho nem vi..
const UserController = require('../controllers/UserController')
const SessionController = require('../controllers/Login')


const routes = Router()

routes.get('/', (req, res) =>{
    res.send('Ola mundo, cada vez mais livre da mandição! amém!!')
})   //   COM O '/'  "VAI NA RAIZ"

routes.post('/users', UserController.createUser)
routes.get('/users', UserController.getUsers)
routes.get('/users/:user_id', UserController.getUserById)

routes.post('/sessions', SessionController.createSession)

routes.post('products/:user_id')
routes.get('/products/:user_id')
routes.patch('/products/:users_id/:product_id')
routes.delete('/products/:uer_id/:product_id')

routes.get('/products')
routes.get('/products/:product_id')

routes.post('/cart/:user_id')
routes.get('/cart/user_id')
routes.get('/cart/:user_id/:cart_id')





module.exports = routes