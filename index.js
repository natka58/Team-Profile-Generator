const fs = require(`fs`);
const inquirer = require(`inquirer`);
const Manager = require(`./lib/Manager`)
const Engineer = require(`./lib/Engineer`)
const Intern = require(`./lib/Intern`)
const employeeArray = [];
function generateMarkdown(data) {
    return `${data}`;
};

// Manager properties name Id emailoffice number getName() getID() getEmail() getRole() officeNumber getRole() //Overridden to return 'Manager'
const ManagerData = () => {
    return inquirer.prompt([
        {
            type: `input`,
            name: `name`,
            message: `What is the managers name?`,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log('Please enter managers name!');
                    return false;
                }
            }

        },
        {
            type: `input`,
            name: `id`,
            message: `What is the managers ID?`,
            validate: idInput => {
                if (idInput) {
                    return true;
                }
                else {
                    console.log('Please enter managers ID!');
                    return false;
                }
            }
               },
        {
            type: `input`,
            name: `email`,
            message: `What are the managers email?`,
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log('Please enter managers email!');
                    return false;
                }
            }

        },
        {
            type: `input`,
            name: `office`,
            message: `What is the managers office number?`,
            validate: officeInput => {
                if (officeInput) {
                    return true;
                }
                else {
                    console.log('Please enter managers office number!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'addemployee',
            message: 'Would you like to add another employee?',
            default: false
        },
        {
            type: 'checkbox',
            name: 'role',
            message: 'What employee would you like to choose',
            choices: ['Engineer', 'Intern', 'Team Completed']
        }
    ]).then(manager => {
        let {
            name, id, email, office, addemployee } = manager;
        managerArray.push(new Manager(name, id, email, office));
    
        if (addemployee === false) {
        return Promise.reject(employeeArray);
    }
})
}
const addemployee = () => {
    return inquirer.prompt([
        {
            // const promptEngineer = () => {
            //     return inquirer.prompt([
            type: `input`,
            name: `name`,
            message: `What is the employees name?`,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log('Please enter employee name!');
                    return false;
                }
            }

        },
        {
            type: `input`,
            name: `id`,
            message: `What is the employee ID?`,
            validate: idInput => {
                if (idInput) {
                    return true;
                }
                else {
                    console.log('Please enter employee ID!');
                    return false;
                }
            }
        },
        {
            type: `input`,
            name: `email`,
            message: `What is employee email?`,
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log('Please enter employee email!');
                    return false;
                }
            }

        },
        // {
        //     type: `input`,
        //     name: `github`,
        //     message: `What is engineers GitHub username?`
        // },
        {
            type: 'confirm',
            name: 'addemployee',
            message: 'Would you like to add another employee?',
            default: false
        },


        {
            type: 'checkbox',
            name: 'role',
            message: 'What employee would you like to choose',
            choices: ['Engineer', 'Intern', 'Team Completed']
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is engineers Github username?',
            when: (answers) => answers.role === 'Engineer',
            validate: github => {
                if (!github) {
                    console.log('Engineer must have a Github username!');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is interns school?',
            when: (answers) => answers.role === 'Intern',
            validate: school => {
                if (!school) {
                    console.log('Intern must have a school!');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'confirm',
            name: 'addemployee',
            message: 'Would you like to add another employee?',
            default: false
        },
        {
            type: 'checkbox',
            name: 'role',
            message: 'What employee would you like to choose',
            choices: ['Engineer', 'Intern', 'Team Completed']
        }
    ]).then(employeeData => {
        let {
            name, id, email, addemployee, role, github, school } = employeeData;
        let employeeObj;
        if (role === 'Engineer') {
            employeeObj = new Engineer (name, id, email, github);
            console.log(employeeObj);
        } else {
            employeeObj -new Intern (name, id, email, school);
            console.log(employeeObj);
        }
        employeeArray.push(employeeObj);
        if (addemployee) {
            return addEmployee(employeeArray);
          } else {
            return employeeArray;
          }
        });
      };
      const writeToFile = data => {
        fs.writeFile('./dist/team.html', data, err => {
          if (err) {
            console.log(err);
            return;
          }
          else {
            console.log(`File created! check out HTML in this directory to see it!`);
          }
        })
    }
    ManagerData ()
    .then(addemployee)
    .then(employeeArray => {
        return generateMarkdown(employeeArray);
    })
    .then(htmlContent => {
      return writeToFile(htmlContent);
    })
    .catch(err => {
        const employeeArr = generateMarkdown(err);
        writeToFile(employeeArr);
      });      
    
   

   


// Manager()
//     .then(managerData => {
//         const pageHTML = generateMarkdown(managerData);
//         fs.writeFile(`myteam.html`, pageHTML, "utf8", err => {
//             if (err) throw new Error(err);

//             console.log(`File created! check out HTML in this directory to see it!`);
//         });
//     });


//         {
//             type: 'checkbox',
//             name: 'role',
//             message: 'What employee would you like to choose',
//             choices: ['Engineer', 'Intern', 'Team Completed']
//         },
       
//         {
//             type: 'checkbox',
//             name: 'role',
//             message: 'What employee would you like to choose',
//             choices: ['Engineer', 'Intern', 'Team Completed']
//         },

   
// };
//     ]).then(projectData => {

//         if (projectData.addemployee) {
//             return promptEngineer();
//         }
//         else {
//             return promptIntern()


//         }

//     });

// const promptIntern = () => {
//     return inquirer.prompt([
//         {
//             type: `input`,
//             name: `name`,
//             message: `What is the interns name?`,
//             validate: nameInput => {
//                 if (nameInput) {
//                     return true;
//                 }
//                 else {
//                     console.log('Please enter interns name!');
//                     return false;
//                 }
//             }

//         },
//         {
//             type: `input`,
//             name: `id`,
//             message: `What is the interns ID?`,
//             validate: idInput => {
//                 if (idInput) {
//                     return true;
//                 }
//                 else {
//                     console.log('Please enter interns ID!');
//                     return false;
//                 }
//             }

//         },
//         {
//             type: `input`,
//             name: `email`,
//             message: `What are the interns email?`,
//             validate: emailInput => {
//                 if (emailInput) {
//                     return true;
//                 }
//                 else {
//                     console.log('Please enter interns email!');
//                     return false;
//                 }
//             }

//         },
//         {
//             type: `input`,
//             name: `school`,
//             message: `What is interns school?`
//         },
//         {
//             type: 'confirm',
//             name: 'addemployee',
//             message: 'Would you like to add another employee?',
//             default: true
//         },

//         {
//             type: 'checkbox',
//             name: 'role',
//             message: 'What employee would you like to choose',
//             choices: ['Engineer', 'Intern']
//         }

//     ]).then(projectData => {

//         if (projectData.addemployee) {
//             return promptEngineer();
//         }
//         else {
//             return promptIntern();


//         }
//     });
// };

// //     callmenu ();
// //     });
// // function callmenu () {

// //     const engineer = {
// //     message: 'Add Engineer',
// //         choices: {



// //     }
// //   };

// //   const intern = {
// //     message: 'Add Intern',
// //     choices: {
// //       callApi: function() {
// //         console.log('intern called');
// //         return;
// //       }
// //     }
// //   };

// //   let level = 0;

// //   function createMenu() {
// //     return {
// //       message: 'choose role ',
// //       choices: {

// //         engineer: engineer,
// //         intern: intern
// //       }
// //     };
// //   };

// //   menu(createMenu)
// //     .then(function() {
// //       console.log('bye');
// //     })
// //     .catch(function(err) {
// //       console.log(err.stack);
// //     });
// // }