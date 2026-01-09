import {Router} from 'express';
const userRouter= Router();
// GET /users ->get all users
//GET /users/:id -> get users by id
userRouter.get('/', (req, res) =>res.send( {title:'Get all Users'}));
userRouter.get('/:id', (req, res) =>res.send( {title:`Get User details`} ));
userRouter.get('/', (req, res) =>res.send({title:'Create a new user'}));
userRouter.put('/:id', (req, res) =>res.send( {title:`Update User details`} ));
userRouter.delete('/:id', (req, res) =>res.send( {title:`Delete User`} ));
export default userRouter;