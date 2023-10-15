import { Router } from 'express'
import { AdministratorController } from '../controllers/admins.js'

export const createAdminRouter = ({ administratorModel }) => {
  const adminsRouter = Router()

  const adminsController = new AdministratorController({ administratorModel })

  adminsRouter.get('/', adminsController.getAll)
  adminsRouter.post('/', adminsController.create)
  adminsRouter.delete('/:id', adminsController.delete)
  adminsRouter.patch('/:id', adminsController.update)

  return adminRouter
}
