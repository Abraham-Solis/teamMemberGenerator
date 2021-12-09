const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

let teamMembers = []

const add = () => {
  inquirer.prompt([
    {
      type: 'confirm',
      name: 'add',
      message: 'Do you want to add another employee?',
    }
  ])

    .then(data => {
      if (data.add == true) {
        createEmployee()
      } else {
        console.log(`You have succesfully created your Team!`)
      }
    })
}


const createEmployee = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your employee Name?',
    },

    {
      type: 'input',
      name: 'id',
      message: 'What is employee ID?',
    },

    {
      type: 'input',
      name: 'email',
      message: 'What is your employee email adress?',
    },

    {
      type: 'list',
      name: 'role',
      message: 'What is your employee Role?',
      choices: ['Intern', 'Engineer', 'Manager']
    }

  ])


    .then(answers => {
      if (answers.role === 'Manager') {
        inquirer.prompt([
          {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the manager Office Number?',

          }
        ])
          .then(manager1 => {
            const personManager = new Manager(answers.name, answers.id, answers.email, manager1.officeNumber)
            teamMembers.push(personManager)
            console.log(teamMembers)
            console.log(`You have succesfully added a Manager to your team!`)
            add()
          })
      } else if (answers.role === 'Engineer') {
        inquirer.prompt([
          {
            type: 'input',
            name: 'github',
            message: 'What is your github Page'
          }
        ])
          .then(engineer1 => {
            const personEnginner = new Engineer(answers.name, answers.id, answers.email, engineer1.github)
            teamMem.push(personEnginner)
            console.log(teamMembers)
            console.log(`You have succesfully added an Engineer to your team!`)
            add()
          })
      } else if (answers.role === 'Intern') {
        inquirer.prompt([
          {
            type: 'input',
            name: 'school',
            message: 'Where did the Intern go to school?'
          }
        ])
          .then(intern1 => {
            const personIntnern = new Intern(answers.name, answers.id, answers.email, intern1.school)
            teamMembers.push(personIntnern)
            console.log(teamMembers)
            console.log(`You have succesfully added an Engineer to your team!`)
            add()


          })
      }
    })



    .catch(err => console.log(err))
}




createEmployee()









// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
