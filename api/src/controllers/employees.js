import { validateEmployee, validatePartialEmployee } from '../schemas/movies.js'

export class EmployeeController {
  constructor({ vacationModel }) {
    this.vacationModel = vacationModel
  }

  getAll = async (req, res) => {
    const { genre } = req.query
    const movies = await this.employeeModel.getAll({ genre })
    res.json(movies)
  }

  getById = async (req, res) => {
    const { id } = req.params
    const employee = await this.employeeModel.getById({ id })
    if (employee) return res.json(employee)
    res.status(404).json({ message: 'Movie not found' })
  }

  create = async (req, res) => {
    const result = validateEmployee(req.body)

    if (!result.success) {
      // 422 Unprocessable Entity
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const newEmployee = await this.employeeModel.create({ input: result.data })

    res.status(201).json(newEmployee)
  }

  delete = async (req, res) => {
    const { id } = req.params

    const result = await this.employeeModel.delete({ id })

    if (result === false) {
      return res.status(404).json({ message: 'Movie not found' })
    }

    return res.json({ message: 'Movie deleted' })
  }

  update = async (req, res) => {
    const result = validatePartialEmployee(req.body)

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const { id } = req.params

    const updatedEmployee = await this.employee.update({
      id,
      input: result.data,
    })

    return res.json(updatedEmployee)
  }
}
