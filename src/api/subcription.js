import express from 'express'
import Model from '../models/subcription.js'
import { protect, admin } from '../auth/authMiddleware.js'
import asyncHandler from 'express-async-handler'
const router = express.Router()

//*@desc fetch all Subcriptions
//*@Api Get /api/v1/subcriptions
//*@Access Operator

router.get(
  '/subcription',
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const subcription = await Model.find({})
    if (subcription) {
      res.status(201).json(subcription)
    } else {
      res.status(404)
    }
  })
)

//*@desc Fetch each Subcription
//*@Api GET /api/v1/subcription/:id
//*@Access

router.get(
  '/subcription/:id',
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const subcription = await Model.findById(req.params.id)
    if (subcription) {
      res.json(subcription)
    } else {
      throw new Error('subcription not found')
    }
  })
)

//*@desc Create User
//*@Api POST /api/v1/subcription
//*@Access Operator

router.post(
  '/subcription',
  protect,
  asyncHandler(async (req, res) => {
    const { product } = req.body

    const cash = new Model({
      user: req.user.id,
      product: product,
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
//*@Api PUT /api/v1/editsubscription/:id
//*@Access Operator

router.put(
  '/editsubcription/:id',
  protect,
  asyncHandler(async (req, res) => {
    const cash = await Model.findById(req.params.id)
    if (cash) {
      cash.product = req.body.product || cash.product
      const updatedcash = await cash.save()
      res.status(200).json(updatedcash)
    } else {
      res.status(404)
      throw new Error('Subcription is not founded . ')
    }
  })
)

export default router
