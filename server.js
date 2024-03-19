const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const mongoose = require('mongoose');
const apiRoutes = require('./routes/apiRoutes');
const apiAdmin = require('./routes/apiAdmin');
const path = require('path');

const app = express();

// Підключення до бази даних
mongoose.connect('mongodb://localhost:27017/brief')
  .then(() => console.log('Підключено до MongoDB'))
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

// Визначення маршруту для /admin
app.get('/admin', (req, res) => {
    // Відправлення статичного файлу admin.html
    res.sendFile(path.join(__dirname, 'admin', 'admin.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
