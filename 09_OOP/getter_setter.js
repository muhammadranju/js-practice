class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get password() {
    return `Password: ${this._password}`;
  }
  set password(value) {
    this._password = value;
  }

  get email() {
    return `Email: ${this._email.toUpperCase()}`;
  }
  set email(value) {
    this._email = value;
  }
}

const user = new User("mdranju@gmail.com", "pass123");
console.log(user.email);
