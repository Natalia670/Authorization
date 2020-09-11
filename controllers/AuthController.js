let UserModel = require('../models/User');
const { validationResult } = require('express-validator')

exports.login = (req, res) => {
  res.render('auth/login', { layout: 'auth' });
}

exports.register = (req, res) => {
  res.render('auth/register', { 
    layout: 'auth',
    errors: req.flash('errors') 
  });
}

exports.store = (req, res) => {
  UserModel.create(req.body)
    .then((data) => {
      return res.send('Usuario creado');
    })
    .catch((error) => {
      console.log(error);
    });
  // res.send('Registrar usuario');
}

exports.store = (req, res) => {
  // Identifica si hubieron errores en el request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    req.flash('errors', errors.array());
    return res.redirect('back');
  }
  UserModel.create(req.body)
  .then((data) => {
    // Indica que el usuario fue creado con éxito
    return res.send('Usuario registrado con éxito');
  })
  .catch((error) => console.log(error));
  
  //res.send('Registrar usuario');
}

exports.gestionUsuarios = (req,res) => {
  UserModel.all()
        .then((data) => {
            users = data;
            console.log(users);
            res.render('app/users', {users: users});
        });
}

exports.dashboard = (req, res) => {
  res.render('app/dashboard');
}