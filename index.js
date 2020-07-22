const fs = require(`fs`);
const inquirer = require(`inquirer`);
const menu = require('inquirer-menu');
function generateMarkdown(data) {
    return `${data}`;
};

// Manager properties name Id emailoffice number getName() getID() getEmail() getRole() officeNumber getRole() //Overridden to return 'Manager'
const Manager = () => {
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
            message: `What is the managers office number?`
        },
        {
            type: 'confirm',
            name: 'addemployee',
            message: 'Would you like to add another employee?',
            default: true
        },

        {
            type: 'checkbox',
            name: 'role',
            message: 'What employee would you like to choose',
            choices: ['Engineer', 'Intern']
        }

    ]).then(projectData => {

        if (projectData.addemployee) {
            return promptEngineer();
        }
        else {
            return promptIntern();


        }
    });
}
Manager()
    .then(managerData => {
        const pageHTML = generateMarkdown(managerData);
        fs.writeFile(`myteam.html`, pageHTML, "utf8", err => {
            if (err) throw new Error(err);

            console.log(`File created! check out HTML in this directory to see it!`);
        });
    });

const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: `input`,
            name: `name`,
            message: `What is the engineers name?`,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log('Please enter engineers name!');
                    return false;
                }
            }

        },
        {
            type: `input`,
            name: `id`,
            message: `What is the engineers ID?`,
            validate: idInput => {
                if (idInput) {
                    return true;
                }
                else {
                    console.log('Please enter engineers ID!');
                    return false;
                }
            }



        },
        {
            type: `input`,
            name: `email`,
            message: `What are the engineers email?`,
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log('Please enter engineers email!');
                    return false;
                }
            }

        },
        {
            type: `input`,
            name: `github`,
            message: `What is engineers GitHub username?`
        },
        {
            type: 'confirm',
            name: 'addemployee',
            message: 'Would you like to add another employee?',
            default: true
        },

        {
            type: 'checkbox',
            name: 'role',
            message: 'What employee would you like to choose',
            choices: ['Engineer', 'Intern']
        }

    ]).then(projectData => {

        if (projectData.addemployee) {
            return promptEngineer();
        }
        else {
            return promptIntern()


        }
       
    });
}
    const promptIntern = () => {
        return inquirer.prompt([
            {
                type: `input`,
                name: `name`,
                message: `What is the interns name?`,
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }
                    else {
                        console.log('Please enter interns name!');
                        return false;
                    }
                }

            },
            {
                type: `input`,
                name: `id`,
                message: `What is the interns ID?`,
                validate: idInput => {
                    if (idInput) {
                        return true;
                    }
                    else {
                        console.log('Please enter interns ID!');
                        return false;
                    }
                }

            },
            {
                type: `input`,
                name: `email`,
                message: `What are the interns email?`,
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    }
                    else {
                        console.log('Please enter interns email!');
                        return false;
                    }
                }

            },
            {
                type: `input`,
                name: `school`,
                message: `What is interns school?`
            },
            {
                type: 'confirm',
                name: 'addemployee',
                message: 'Would you like to add another employee?',
                default: true
            },

            {
                type: 'checkbox',
                name: 'role',
                message: 'What employee would you like to choose',
                choices: ['Engineer', 'Intern']
            }

        ]).then(projectData => {

            if (projectData.addemployee) {
                return promptEngineer();
            }
            else {
                return promptIntern();


            }
        });
    };

//     callmenu ();
//     });
// function callmenu () {

//     const engineer = {
//     message: 'Add Engineer',
//         choices: {



//     }
//   };

//   const intern = {
//     message: 'Add Intern',
//     choices: {
//       callApi: function() {
//         console.log('intern called');
//         return;
//       }
//     }
//   };

//   let level = 0;

//   function createMenu() {
//     return {
//       message: 'choose role ',
//       choices: {

//         engineer: engineer,
//         intern: intern
//       }
//     };
//   };

//   menu(createMenu)
//     .then(function() {
//       console.log('bye');
//     })
//     .catch(function(err) {
//       console.log(err.stack);
//     });
// }