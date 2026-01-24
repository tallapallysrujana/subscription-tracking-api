import { Router } from 'express';

import { signUp, signIn, signOut } from '../controllers/auth.controller.js';

const authRouter = Router();


//Paths: /sign-up, /sign-in, /sign-out
//Path: /api/v1/auth/sign-up(post)
authRouter.post('/sign-up', signUp);
authRouter.post('/sign-in', signIn);
authRouter.post('/sign-out', signOut);

export default authRouter;