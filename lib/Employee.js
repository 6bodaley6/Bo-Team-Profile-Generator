class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    // this.icon = icon;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  // getIcon() {
  //   return this.icon;
  // }
  getRole() {
    return "Employee";
  }

}
module.exports = Employee;
