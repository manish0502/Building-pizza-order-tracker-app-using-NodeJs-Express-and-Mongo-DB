const User=require('../../models/user');

function authController() {

    return {
        login(req, res){ 
            res.render("auth/login");
            
        },
        register(req, res){ 
            res.render("auth/register");
            
        },
        postRegister(req, res){


             const {  name, email, password } = req.body; 

             /*** validate request ***/

             if(!name || !email || !password ) {

                req.flash('error' ,'All fields are required')
                return res.redirect('/reg')

             }

             console.log(req.body)

             // we need to send the data from front-end



        }

    }
}

module.exports = authController;