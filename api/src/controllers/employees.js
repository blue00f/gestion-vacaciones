import {
  validateEmployee,
  validatePartialEmployee,
} from '../schemas/employees.js'

export class EmployeeController {
  constructor({ employeeModel }) {
    this.employeeModel = employeeModel
  }

  getAllEmployee = async (req, res) => {
    const { employees } = req.query
    const resEmployee = await this.employeeModel.getAllEmployee({ employees })
    res.json(resEmployee)
  }

  deleteEmployeeById = async (req, res) => {
    const { id } = req.params
    const employee = await this.employeeModel.deleteEmployeeById({ id })
    if (employee) {
      return res.json(employee)
    } else {
      res.status(404).json({ message: 'Employee not found' })
    }
  }

  createEmployee = async (req, res) => {
    const result = validateEmployee(req.body)

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const newEmployee = await this.employeeModel.createEmployee({
      input: result.data,
    })

    res.status(201).json(newEmployee)
  }

  updateEmployeeById = async (req, res) => {
    const result = validatePartialEmployee(req.body)

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const { id } = req.params

    const updatedEmployee = await this.employee.updateEmployeeById({
      id,
      input: result.data,
    })

    return res.json(updatedEmployee)
  }
}
