// const uid = "xyz987";

// var fullName = "Hitesh Vishal";
// var email = "hitesh@gmail.com";
// var password  = "123456";
// var confirmPassword = "123456";
// var courseCount = 0;
// var isLoggedInFromGoogle = false;

// fullName  = prompt("Enter You Name");

// console.log("Full Name is",fullName);
// console.log(email);
// console.log(uid);

// console.log(`
//   with Unique ID:${uid}
//   User is:${fullName}
//   and his email is:${email}
//   and uses the password:${password}

// `)

// name f l email pass coutnry state is logged in facebook or google 

const isLoggedInFromGoogle = false;
const isLoggedInFromFacebook = false;


let firstName = prompt("Enter Your First Name");
let lastName = prompt("Enter Your Last Name");
let email = prompt("Enter Your Email Address");
let password = prompt("Enter Your Password");
let state = prompt("Enter Your State");
let country = prompt("Enter Your Country");

console.log(`Hi ${firstName} ${lastName} from ${state} ${country} 
your Email address is ${email} and your password is ${password}`)