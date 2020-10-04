import { Router } from 'express'
import * as authCtrl from '../controllers/auth.controller'
import { verifySignUp } from '../middlewares'

const router = Router()

router.post('/signup', [verifySignUp.checkDuplicateUsernameOrEmail, verifySignUp.checkRoleExisted], authCtrl.signUp)
router.post('/signin', authCtrl.signIn)

export default router
