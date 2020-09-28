import { LoginForm } from "./auth/LoginForm.js"
import { RegisterForm } from "./auth/RegisterForm.js"
import { Nutshell } from "./Nutshell.js"


/*
    1. Check if the user is authenticated by looking in session storage for `activeUser`
       -- 7:35 on Adam's video--
    2. If so, render the Nutshell component
    3. If not, render the login and registration forms
    4. Also, if the user authenticates, and the login form is initially shown
        ensure that the Nutshell component gets rendered
*/


const existingUser= sessionStorage.getItem("activeUser");
    if (existingUser) {
       Nutshell();
    } else {
        LoginForm();
        RegisterForm();
    }
