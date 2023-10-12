class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `eblyhdh${this.password}yfhsf56sjdf`;
  }
  showName() {
    return `this is the name of user ${this.username}`;
  }
  validEmail() {
    let email = this.email;
    if (!email.includes("@")) {
      return "you must be provide a valid email";
    }
    if (
      !email.includes("gmail") &&
      !email.includes("yahoo") &&
      !email.includes("outlook")
    ) {
      return `this email is not allow ${email} allow. only gmail,yahoo,outlook emails`;
    }
    // if (!email.includes("yahoo")) {
    //   return `this email is not allow ${email} `;
    // }
    // if (!email.includes("outlook")) {
    //   return `this email is not allow ${email} `;
    // }
    return `user email is ${email}`;
  }
}
const user = new User("Md Ranju", "mdranju23@techyzoon.com", "pass123");
console.log(user.validEmail());
