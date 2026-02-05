import express from 'express';
import bodyParser from 'body-parser'


const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.urlencoded());

// GET login page
router.get('/login', (req, res) => {
  res.render('auth/login');
});

// POST login
router.post('/login', (req, res) => {
  let {email, password} = req.body;

  if(email === 'om@gmail.com' && password == '123') {
    req.session.user = {
      email
    }
    return res.redirect('/tasks/dashboard');
  }
  res.redirect('login');
});

// GET register page
router.get('/register', (req, res) => {
  res.render('auth/register');
});

// POST register
router.post('/register', (req, res) => {
  console.log('Register data:', req.body);
  res.redirect('/auth/login');
});

// POST logout
router.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/auth/login');
  });
});

router.get("/setsession", (req, res)=> {
  req.session.test = 'session works'
  res.send('session set')
})
router.get('/getsession', (req, res)=> {
  res.send(req.session.test || 'no session');
})
export default router;
