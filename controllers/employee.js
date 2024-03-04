const db = require('./../models');
const employee = db.employee;

// Get all employees
exports.get_all_users = async (req, res) => {
    try {
        // Retrieve all employees from the database
        const allEmployees = await employee.findAll({ raw: true });
        return res.send(allEmployees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get employee by ID
exports.getUserById = async (req, res) => {
    const id = req.params.id;

    try {
        // Find an employee by their ID in the database
        const requestedEmployee = await employee.findByPk(id);

        if (!requestedEmployee) {
            // If no employee is found, send a 404 Not Found response
            return res.status(404).json('No user found');
        } else {
            return res.status(200).json({
                requestedEmployee,
            });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete employee by ID
exports.deleteUserById = async (req, res) => {
    const userId = req.params.id;

    try {
        // Find the employee by their ID in the database
        const user = await employee.findByPk(userId);

        if (user) {
            // If the employee is found, delete them from the database
            await employee.destroy({
                where: { id: userId },
            });

            // Send a 200 OK response indicating successful deletion
            res.status(200).json({ message: 'User deleted successfully' });
        } else {
            // If no employee is found, send a 404 Not Found response
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete all employees
exports.deleteAllUsers = async (req, res) => {
    try {
        // Remove all employees from the database
        await employee.truncate({});

        // Send a 200 OK response indicating successful deletion
        res.status(200).json('All employees deleted successfully');
    } catch (error) {
        res.status(500).json(error.message);
    }
};

// Add a new employee
exports.addUser = async (req, res) => {
    try {
        // Extract name and designation from the request body
        const { name, designation } = req.body;

        // Check if required fields are provided
        if (!name || !designation) {
            return res.status(400).json({ error: 'Name and designation are required fields.' });
        }

        // Create a new employee in the database
        const newEmployee = await employee.create({ name, designation });

        res.status(201).json({
            message: 'Employee added successfully',
            data: newEmployee,
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: error.message });
    }
};

// Update employee by ID
exports.updateUserById = async (req, res) => {
    try {
        // Extract name and designation from the request body
        const { name, designation } = req.body;
        // Extract id from request params
        const id = req.params.id;

        // search for the employee
        const existingEmployee = await employee.findByPk(id);

        if (!existingEmployee) {
            // If no employee is found, send a 404 Not Found response
            res.status(404).json('No employee found');
        } else {
            // Update the employee information and get the updated employee
            const updatedEmployee = await existingEmployee.update({ name, designation });

            res.status(200).json({
                message: 'Employee updated successfully',
                employeeInfo: updatedEmployee,
            });
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
};
