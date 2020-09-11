const knex = require('../database/connection');
const bcrypt = require('bcryptjs');

exports.all = () => {
  return knex
  .select('*')
  .from('users');
}

exports.findById = (id) => {
  return knex
    .select('*')
    .from('users')
    .where('id', id)
    .first();
}

exports.findByEmail = (email) => {
  return knex
    .select('*')
    .from('users')
    .where('email', email)
    .first();
}

exports.create = (user) => {
  let pass = user.password;
  pass = bcrypt.hashSync(pass, 10);
  return knex('users')
    .insert({ name: user.name, email: user.email, password: pass, role: user.roleValue })
}

exports.admin = (user) => {
  findByEmail(req.email)
  .then((data) => {
    let user = data;
    return(user.role  == 1);
  })
}

exports.usuario = (user) => {
  findByEmail(req.email)
  .then((data) => {
    let user = data;
    return(user.role  == 2);
  })
}

exports.invitado = (user) => {
  findByEmail(req.email)
  .then((data) => {
    let user = data;
    return(user.role  == 3);
  })
}

exports.getRedirectUrl = (role) => {
  switch (role) {
    case 1:
      return '/app/users'
    case 2:
      return '/app/dashboard'
    case 3:
      return '/'
    default:
      return '/'
  }
}

