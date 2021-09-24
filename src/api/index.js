import express from 'express'
import registerApi from './register.js'
import loginApi from './login.js'
import updateProfile from './updateProfile.js'
import adminApi from './admin.js'
import cashApi from './cash.js'
import agencyApi from './agency.js'
import cashbookApi from './cashBook.js'
import productApi from './product.js'

const router = express.Router()

router.use(cashbookApi)
router.use(registerApi)
router.use(loginApi)
router.use(updateProfile)
router.use(adminApi)
router.use(cashApi)
router.use(agencyApi)
router.use(productApi)

export default router
