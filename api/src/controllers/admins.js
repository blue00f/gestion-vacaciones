import { validateAdmin, validatePartialAdmin } from '../schemas/admins.js'

export class AdminController {
  constructor({ administratorModel }) {
    this.administratorModel = administratorModel
  }

  getAllAdmin = async (req, res) => {
    const resAdmin = await this.administratorModel.getAllAdmin()
    res.json(resAdmin)
  }

  createAdmin = async (req, res) => {
    const result = validateAdmin(req.body)

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const newAdmins = await this.administratorModel.createAdmin({
      input: result.data,
    })

    res.status(201).json(newAdmins)
  }

  deleteAdminById = async (req, res) => {
    const { id } = req.params
    const resAdmin = await this.administratorModel.deleteAdminById({
      id,
    })
    if (resAdmin) return res.json(resAdmin)
    res.status(404).json({ message: 'Administrator not found' })
  }

  updateAdminById = async (req, res) => {
    const result = validatePartialAdmin(req.body)

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const { id } = req.params

    const updatedVacation = await this.administratorModel.updateAdminById({
      id,
      input: result.data,
    })

    return res.json(updatedVacation)
  }
}
