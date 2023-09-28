import { validateVacation, validatePartialVacation } from '../schemas/movies.js'

export class VacationController {
  constructor({ vacationModel }) {
    this.vacationModel = vacationModel
  }

  getAll = async (req, res) => {
    const { genre } = req.query
    const movies = await this.vacationsModel.getAll({ genre })
    res.json(movies)
  }

  getById = async (req, res) => {
    const { id } = req.params
    const vacation = await this.vacationsModel.getById({ id })
    if (vacation) return res.json(vacation)
    res.status(404).json({ message: 'Movie not found' })
  }

  create = async (req, res) => {
    const result = validateVacation(req.body)

    if (!result.success) {
      // 422 Unprocessable Entity
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const newVacations = await this.vacationsModel.create({
      input: result.data,
    })

    res.status(201).json(newVacations)
  }

  delete = async (req, res) => {
    const { id } = req.params

    const result = await this.vacationsModel.delete({ id })

    if (result === false) {
      return res.status(404).json({ message: 'Movie not found' })
    }

    return res.json({ message: 'Movie deleted' })
  }

  update = async (req, res) => {
    const result = validatePartialVacation(req.body)

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const { id } = req.params

    const updatedVacation = await this.vacation.update({
      id,
      input: result.data,
    })

    return res.json(updatedVacation)
  }
}
