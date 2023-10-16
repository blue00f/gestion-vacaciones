import { validateAdmin, validatePartialAdmin } from '../schemas/admins.js'

export class AdminController {
  constructor({ adminModel }) {
    this.adminModel = adminModel
  }

  getAllAdmin = async (req, res) => {
    const resAdmin = await this.adminModel.getAllAdmin({})
    res.json(resAdmin)
  }

  createAdmin = async (req, res) => {
    const result = validateAdmin(req.body)

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const newAdmins = await this.adminModel.createAdmin({
      input: result.data,
    })

    res.status(201).json(newAdmins)
  }

  deleteAdminById = async (req, res) => {
    const { id } = req.params
    const resAdmin = await this.adminModel.deleteAdminById({
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

    const updatedVacation = await this.adminModel.updateAdminById({
      id,
      input: result.data,
    })

    return res.json(updatedVacation)
  }
}
