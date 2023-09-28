import { Router } from 'express'
import { VacationController } from '../controllers/vacations.js'

export const createEmployeeRouter = ({ vacationModel }) => {
  const vacationsRouter = Router()

  const vacationController = new EmployeeController({ vacationModel })

  vacationsRouter.get('/', vacationController.getAll)
  vacationsRouter.post('/', vacationController.create)
  vacationsRouter.delete('/:id', vacationController.delete)
  vacationsRouter.patch('/:id', vacationController.update)

  return vacationsRouter
}
