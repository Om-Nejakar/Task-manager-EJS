import express from 'express';
const router = express.Router();

router.get('/dashboard', (req, res)=>{
    let user = req.session.user;
    res.render('tasks/dashboard', {user});
})

export default router;