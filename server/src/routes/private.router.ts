import { Router } from 'express'

import auth from '../start/authorization'

const router = Router()

router.get('/profile', auth, (req, res) => {
  return res.json({ message: 'Welcome', user: req.user })
})

export default router
