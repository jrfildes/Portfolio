function passWord() {
    let testV = 1;
    let pass1 = prompt("Please Enter Your Password", " ");
    while (testV < 3) {
        if (!pass1)
            history.go(-1);
        if (pass1.toLowerCase() == "sinktins") {
            alert("Welcome in!");
            window.open("index2.html");
            break;
        }
        testV += 1;
        let pass1 =
            prompt("Access Denied - Password Incorrect, Please Do Not Try Again.", "Password");
    }
    if (pass1.toLowerCase() != "password" && testV === 3) {
        history.go(-1);
    }
    return " ";
};
console.log(passWord("sinktins"));

