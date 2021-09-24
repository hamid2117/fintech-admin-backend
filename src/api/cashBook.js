import express from 'express'
import Cash from '../models/cashBook.js'
import { protect, admin } from '../auth/authMiddleware.js'
import asyncHandler from 'express-async-handler'
const router = express.Router()

//*@desc fetch all Users
//*@Api Get /api/v1/users
//*@Access Admin

router.get(
  '/cashbook',
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const cash = await Cash.find({})
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
  '/cashbook/:id',
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const cash = await Cash.findById(req.params.id)
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
  '/cashbook',
  protect,
  asyncHandler(async (req, res) => {
    const { type, account } = req.body
    const cashi = await Cash.findOne({ account })

    if (cashi) {
      return res.status(400).json({ message: 'code is already exist . ' })
    }
    const cash = new Cash({
      user: req.user.id,
      type,
      account,
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
  '/editcashbook/:id',
  protect,
  asyncHandler(async (req, res) => {
    const cash = await Cash.findById(req.params.id)
    if (cash) {
      cash.type = req.body.type || cash.type
      cash.account = req.body.account || cash.account
      const updatedcash = await cash.save()
      res.status(200).json(updatedcash)
    } else {
      res.status(404)
      throw new Error('cash is not founded . ')
    }
  })
)

export default router
