import { validateVacation, validatePartialVacation } from '../schemas/admins.js'

export class AdministratorController {
  
  constructor({ administratorModel }) {
    this.administratorModel = administratorModel;
  }

  getAllAdmin = async (req, res) => {
    const { admins } = req.query
    const resAdmin = await this.administratorModel.getAllAdmin({ admins })
    res.json(resAdmin);
  }

  deleteAdminstratorById = async (req, res) => {
    const { id } = req.params
    const resAdmin = await this.administratorModel.deleteAdminstratorById({ id })
    if (resAdmin) return res.json(resAdmin)
    res.status(404).json({ message: 'Administrator not found' })
  }

  createAdmin = async (req, res) => {
    const result = validateAdmin(req.body)

    if (!result.success) {
      
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const newAdmins = await this.administratorModel.createAdmin({
      input: result.data,
    })

    res.status(201).json(newAdmins);
  }

  updateAdmin = async (req, res) => {
    const result = validatePartialEmployee(req.body)

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const { id } = req.params

    const updatedVacation = await this.administratorModel.updateAdmin({
      id, input: result.data,
    })

    return res.json(updatedVacation)
  }
}
