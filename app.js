import express from 'express'
import authRoutes from './routes/auth.routes.js'
import taskRoutes from './routes/task.routes.js'
import session from 'express-session';
import flash from 'connect-flash'

var tasks = []

const app = express()

app.use(flash());
app.use(session({   
    secret: 'om123', 
    resave: false, 
    saveUninitialized: true
}));
app.use((req, res, next) => {
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  next();
});
app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);


app.get('/', (req, res) => {
    res.render('auth/login')
})

app.listen(8000, ()=> {
    console.log(`server running at port 8k`)
})