import { Router } from 'express';
import { VacationController } from '../controllers/vacations.js'

export const createVacationRouter = ({ vacationModel }) => {
  const vacationsRouter = Router();

  const vacationController = new VacationController({ vacationModel })

  vacationsRouter.get('/', vacationController.getAll)
  vacationsRouter.post('/', vacationController.create)
  vacationsRouter.delete('/:id', vacationController.delete)
  vacationsRouter.patch('/:id', vacationController.update)

  return vacationsRouter
}
