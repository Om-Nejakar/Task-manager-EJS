import express from 'express';
import isAuthenticated from '../middlewares/auth.middleware.js';
import tasks from "../data/tasks.js";

const router = express.Router();

router.get('/dashboard', isAuthenticated ,(req, res)=>{
    let user = req.session.user;
    res.render('tasks/dashboard', {user, tasks});
})
router.post('/', isAuthenticated, (req, res) => {
    const {title} = req.body;
    tasks.push({
        id : Date.now(),
        title
    })
    res.redirect('/tasks/dashboard')
})
router.post('/:id/complete', isAuthenticated, (req, res) => {
    let {id} = req.params;

    const index = tasks.findIndex((t) => {
        return t.id == id;
    })
    if(index != -1) {
        tasks.splice(index, 1);
    }
    res.redirect('/tasks/dashboard');
})
export default router;