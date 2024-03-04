/**
 * @swagger
 * tags:
 *   - name: Wingman Partners Employee Model
 *     description: API for Wingman Partners employees
 * /get-users:
 *   get:
 *     summary: Fetch all employees
 *     description: Retrieve all employees of WMP organization.
 *     tags:
 *       - Wingman Partners Employee Model
 *     responses:
 *       200:
 *         description: Successful operation. Returns WMP Employees.
 *       500:
 *         description: Internal Server Error.
 * /get-user/{id}:
 *   get:
 *     summary: Get employee by ID
 *     description: Retrieve a employee by their ID from the WMP organization.
 *     tags:
 *       - Wingman Partners Employee Model
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *         description: Numeric ID of the employee to retrieve
 *     responses:
 *       200:
 *         description: Successful operation
 *       404:
 *         description: Employee not found
 * /delete-user/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     description: Delete a employee by providing their ID
 *     tags:
 *       - Wingman Partners Employee Model
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
 * /delete-users/:
 *   delete:
 *     summary: Delete all employees
 *     description: Delete all users -- nothing required i.e., id, name, etc.
 *     tags:
 *       - Wingman Partners Employee Model
 *     responses:
 *       200:
 *         description: All employees deleted successfully
 *       500:
 *         description: Internal Server Error
 * /add-user:
 *   post:
 *     summary: Add a new user
 *     description: Endpoint to add a new user with a name and designation.
 *     tags:
 *       - Wingman Partners Employee Model
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
 * /update-user/{id}:
 *   put:
 *     summary: Update employee by ID
 *     description: Endpoint to update an employee by its ID with new name and designation.
 *     tags:
 *       - Wingman Partners Employee Model
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
