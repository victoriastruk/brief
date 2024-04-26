const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
require('dotenv').config();
const mongoose = require('mongoose');
const apiRoutes = require('./routes/apiRoutes');
const apiAdmin = require('./routes/apiAdmin');
const path = require('path');

const app = express();

// Підключення до бази даних
mongoose.connect(process.env.MONGOD_CONNECT_URI)
  .then(() => console.log('Підключено до MongoDB'))
  .catch(err => console.error(err));

const UserSchema = new mongoose.Schema({
  username: mongoose.Schema.Types.String,
  password: mongoose.Schema.Types.String
});

const User = mongoose.model('User', UserSchema);

// Налаштування Passport.js
passport.use(new LocalStrategy(
  async (username, password, done) => {
    try {
      const user = await User.findOne({ username });
      if (!user) return done(null, false, { message: 'Incorrect username.' });
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) return done(null, false, { message: 'Incorrect password.' });
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

// Налаштування Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Маршрути для аутентифікації та авторизації
app.post('/login', passport.authenticate('local', {
  successRedirect: '/admin',
  failureRedirect: '/login',
  failureFlash: true
}));

app.get('/login', (req, res) => {
  // res.send('<form action="/login" method="post"><div><label>Username:</label><input type="text" name="username"/></div><div><label>Password:</label><input type="password" name="password"/></div><div><input type="submit" value="Log In"/></div></form>');
  res.sendFile(path.join(__dirname, 'admin', 'login.html'));
});

app.get('/admin', isAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, 'admin', 'admin.html'));
});

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

// Створення користувача
bcrypt.hash('password123', 10)
  .then(hash => {
    const newUser = new User({ username: 'admin', password: hash });
    return newUser.save();
  })
  .then(user => console.log('User created:', user))
  .catch(err => console.error(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware для обслуговування статичних файлів
app.use(express.static('public'));
app.use(express.static('admin'));
app.use('/admin/css', express.static(path.join(__dirname, 'admin', 'css')));
app.use('/admin/js', express.static(path.join(__dirname, 'admin', 'js')));

app.use('/', apiRoutes);
app.use('/admin/', apiAdmin);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
