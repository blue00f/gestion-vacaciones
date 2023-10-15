
import { validateVacation, validatePartialVacation } from '../schemas/vacations.js';
 
export class VacationController {
  
  constructor({  vacationModel  }) {
    this.vacationModel  =  vacationModel ;
  }

  getAllVacations = async (req, res) => {
    const { vacations } = req.query
    const resVacation = await this.vacationModel.getAllVacations({ vacations });
    res.json (resVacation); 
  }

  createVacation = async (req, res) => {
    const result = validateVacation(req.body)//actualizar lso datos de validateVacation

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

    const { id } = req.params;
    const { estado } = req.params;

    const updatedVacation = await this.vacation.updateVacation({  id,  estado })

    return res.json(updatedVacation);

  }
}
