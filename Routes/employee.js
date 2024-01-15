const express = require('express')
const router = express.Router()
const userController = require('../controllers/employee')


//swagger code to fetch all employees
/**
 * @swagger
 * /get-users:
 *  get:
 *      summary: This api is to fetch all employees
 *      description: All the employees of wmp organization will send in the response
 *      responses:
 *          200:
 *              description: WMP Employees
 *          500:
 *              description: Internal Sever Error
 *              
 */

//swagger code to get employee by its id
/**
 * @swagger
 * /get-user/{id}:
 *  get:
 *      summary: Get employee by ID
 *      description: Retrieve a employee by their ID from the WMP organization.
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: integer
 *            format: int64
 *          description: Numeric ID of the employee to retrieve
 *      responses:
 *          200:
 *              description: Successful operation
 *          404:
 *              description: Employee not found
 */

//swagger code to delete employee by its id
/**
 * @swagger
 * /delete-user/{id}:
 *  delete:
 *     summary: Delete a user by ID
 *     description: Delete a employee by providing their ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the employee to be deleted
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Employee deleted successfully
 *       404:
 *         description: Employee not found
 *       500:
 *         description: Internal Server Error
 */

//swagger code to delete all employee
/**
 * @swagger
 * /delete-users/:
 *  delete:
 *     summary: Delete all employees
 *     description: Delete all users -- nothing required ie. id, name etc
 *     responses:
 *       200:
 *         description: All employees deleted successfully
 *       500:
 *         description: Internal Server Error
 */


//swagger code to add new employee
/**
 * @swagger
 * /add-user:
 *   post:
 *     summary: Add a new user
 *     description: Endpoint to add a new user with a name and designation.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               designation:
 *                 type: string
 *             required:
 *               - name
 *               - designation
 *     responses:
 *       201:
 *         description: User added successfully
 *       400:
 *         description: Bad Request - Name and designation are required fields.
 *       500:
 *         description: Internal Server Error
 */

//swagger code update employee by its id
/**
 * @swagger
 * /update-user/{id}:
 *   put:
 *     summary: Update employee by ID
 *     description: Endpoint to update an employee by its ID with new name and designation.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the employee to be updated
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               designation:
 *                 type: string
 *             required:
 *               - name
 *               - designation
 *     responses:
 *       200:
 *         description: Employee updated successfully
 *       404:
 *         description: Not Found - No employee found with the specified ID
 *       500:
 *         description: Internal Server Error
 */

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