import express from 'express';
import isAuthenticated from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/dashboard', isAuthenticated ,(req, res)=>{
    let user = req.session.user;
    res.render('tasks/dashboard', {user});
})

export default router;