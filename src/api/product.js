import express from 'express'
import Model from '../models/ProductModel.js'
import { protect, admin } from '../auth/authMiddleware.js'
import asyncHandler from 'express-async-handler'
const router = express.Router()

//*@desc fetch all Users
//*@Api Get /api/v1/users
//*@Access Admin

router.get(
  '/product',
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const cash = await Model.find({})
    if (cash) {
      res.status(201).json(cash)
    } else {
      res.status(404)
    }
  })
)

//*@desc delete Users
//*@Api delete /api/v1/user/:id
//*@Access Admin

// router.delete(
//   '/user/:id',
//   protect,
//   admin,
//   asyncHandler(async (req, res) => {
//     const user = await Users.findById(req.params.id)
//     if (user) {
//       await user.remove()
//       res.json({ message: 'Users is removed' })
//     } else {
//       res.status(404)
//       throw new Error('Users is not found')
//     }
//   })
// )

//*@desc Fetch each Users
//*@Api GET /api/v1/user/:id
//*@Access Admin

router.get(
  '/product/:id',
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const cash = await Model.findById(req.params.id)
    if (cash) {
      res.json(cash)
    } else {
      throw new Error('Cash not found')
    }
  })
)

//*@desc Create User
//*@Api POST /api/v1/user
//*@Access Admin

router.post(
  '/product',
  protect,
  asyncHandler(async (req, res) => {
    const { codee, label, durationEnum, statusEnum, association } = req.body
    const cashi = await Model.findOne({ codee })

    if (cashi) {
      return res.status(400).json({ message: 'code is already exist . ' })
    }
    const cash = new Model({
      codee,
      label,
      user: req.user.id,
      durationEnum,
      statusEnum,
      association,
    })

    const createdCash = await cash.save()
    if (createdCash) {
      res.status(201).json(createdCash)
    } else {
      throw new Error(error)
    }
  })
)

//*@desc Edit Cash
//*@Api PUT /api/v1/editcash/:id
//*@Access Admin

router.put(
  '/editproduct/:id',
  protect,
  asyncHandler(async (req, res) => {
    const cash = await Model.findById(req.params.id)
    if (cash) {
      cash.label = req.body.label || cash.label
      cash.durationEnum = req.body.durationEnum || cash.durationEnum
      cash.statusEnum = req.body.statusEnum || cash.statusEnum
      const updatedcash = await cash.save()
      res.status(200).json(updatedcash)
    } else {
      res.status(404)
      throw new Error('cash is not founded . ')
    }
  })
)

export default router
