import {
  validateVacation,
  validatePartialVacation,
} from '../schemas/vacations.js'

export class VacationController {
  constructor({ vacationModel }) {
    this.vacationModel = vacationModel
  }

  getAllVacation = async (req, res) => {
<<<<<<< HEAD
    const resVacation = await this.vacationModel.getAllVacation({})
=======
    const { vacations } = req.query
    const resVacation = await this.vacationModel.getAllVacation({vacations})
>>>>>>> edcf2fc522cdd79dd24ec6a37baff7caee39bd45
    res.json(resVacation)
  }

  createVacation = async (req, res) => {
    const input = req.body;
    input.fechaInicio = new Date(input.fechaInicio);
    input.fechaFin = new Date(input.fechaFin);
  
    const result = validateVacation(input);
  
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) });
    }
  
    const newVacations = await this.vacationModel.createVacation({
      input: result.data,
    });
  
    res.status(201).json(newVacations);
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
