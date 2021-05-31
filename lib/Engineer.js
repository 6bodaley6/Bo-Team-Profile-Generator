const Employee = require("./Employee");
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
  // getIcon() {
  //   return `<i class="bi bi-cup-fill" style="font-size: 2rem; color: cornflowerblue;"></i>`
  // }
}
module.exports = Engineer;
