import { Router } from 'express'
import { AdminController } from '../controllers/admins.js'

export const createAdminRouter = ({ adminModel }) => {
  const adminRouter = Router()

  const adminController = new AdminController({ adminModel })

  adminRouter.get('/', adminController.getAll)
  adminRouter.post('/', adminController.create)
  adminRouter.delete('/:id', adminController.delete)
  adminRouter.patch('/:id', adminController.update)

  return adminRouter
}
