import { createApp } from './app.js'

import { VacationModel } from './models/mysql/vacations.js'

createApp({ vacationModel: VacationModel })
