const express = require('express')
const router = express.Router()
const userController = require('../controllers/employee')

//Route to get all employees
router.get('/get-users', userController.get_all_users)

//Route to get a employee by its unique id
router.get('/get-user/:id', userController.getUserById)

//Route to add new employee to the db
router.post('/add-user', userController.addUser)

//Route to delete employee by its id
router.delete('/delete-user/:id', userController.deleteUserById)

//Route to delete all employees
router.delete('/delete-users', userController.deleteAllUsers)

//Route to update employee by its id
router.put('/update-user/:id', userController.updateUserById)


//exporting the router
module.exports = router