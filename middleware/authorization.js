exports.checkInvitado = (req, res, next) => {
    if(req.isAuthenticated()){
        next();
    } else {
        res.redirect('/register')
    }
}

exports.checkUsuario = (req, res, next) => {
    if(req.isAuthenticated()){
        if(req.user.role === 2 || req.user.role ===1){
            next();
        }else {
            res.status(403).send('Error 403. You are trying to access a page you do not have access to');
        }
    } else {
        res.redirect('/register')  
    }
}


exports.checkAdmin = (req, res, next) => {
    if(req.isAuthenticated()){
        if(req.user.role === 1){
            next();
        }else {
            res.status(403).send('Error 403. You are trying to access a page you do not have access to');
        }
    } else {
        res.redirect('/register')  
    }
}