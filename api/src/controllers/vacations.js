import {
  validateVacation,
  validatePartialVacation,
} from '../schemas/vacations.js'

export class VacationController {
  constructor({ vacationModel }) {
    this.vacationModel = vacationModel
  }

  getAllVacation = async (req, res) => {
    const resVacation = await this.vacationModel.getAllVacation({})
    res.json(resVacation)
  }

  createVacation = async (req, res) => {
    const result = validateVacation(req.body)

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const newVacations = await this.vacationsModel.createVacation({
      input: result.data,
    })

    res.status(201).json(newVacations)
  }

  updateVacation = async (req, res) => {
    const result = validatePartialVacation(req.body)

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const { id } = req.params
    const { estado } = req.params

    const updatedVacation = await this.vacation.updateVacation({ id, estado })

    return res.json(updatedVacation)
  }
}
