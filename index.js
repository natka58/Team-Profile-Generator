const fs = require(`fs`);
const inquirer = require(`inquirer`);
const Employeeclass = require('./lib/Employee');
const Managerclass = require('./lib/Manager')
const Engineerclass = require('./lib/Engineer')
const Internclass = require('./lib/Intern');
// const  = require('./lib/Manager')


function generateMarkdown(managerlist, engineerlist, internlist) {
    var managerHTML = '<div class="col-sm" style="padding-top: 10px; padding-left: 10px;"><div class="card bg-primary text-white" style="width: 18rem;"><div class="card-header">';
    for (var i = 0; i < managerlist.length; i++) {
        managerHTML = `${managerHTML}<h4><b>Name:  ${managerlist[i].getName()}</b></h4>`;
        managerHTML = `${managerHTML}<h4><b><i class="oi oi-fork "> Role:  ${managerlist[i].getRole()}</i></b></h4></div>`;
        managerHTML = `${managerHTML}<div class="card-body" style="background-color:white; color:black;"><p>Employee ID: ${managerlist[i].getId()}</p>`;
        managerHTML = `${managerHTML}<p>e-mail: <a href="mailto:${managerlist[i].getEmail()}">${managerlist[i].getEmail()}</a></p>`;
        managerHTML = `${managerHTML}<p>Office Number: ${managerlist[i].getOfficeNumber()}</p></div></div><br/>`;
    }

    managerHTML = `${managerHTML}</div>`;
	var engineerHTML = '';
    var engineerHTMLBEGIN = '<div class="col-sm" style="padding-top: 10px; padding-left: 10px;">';
    for (var i = 0; i < engineerlist.length; i++) {
        var no = i + 1;
        engineerHTML = `${engineerHTML}<div class="card bg-info text-white" style="width: 18rem;"><div class="card-header"><h4><b>Name:  ${engineerlist[i].getName()}</b></h4>`;
        engineerHTML = `${engineerHTML}<h4><b><i class="oi oi-browser "> Role:  ${engineerlist[i].getRole()}</i></b></h4></div>`;
        engineerHTML = `${engineerHTML}<div class="card-body" style="background-color:white; color:black;"><p>Employee ID: ${engineerlist[i].getId()}</p>`;
        engineerHTML = `${engineerHTML}<p>e-mail: <a href="mailto:${engineerlist[i].getEmail()}">${engineerlist[i].getEmail()}</a></p>`;
        engineerHTML = `${engineerHTML}<p>GitHub username:  <a href="https://github.com/${engineerlist[i].getGitHub()}">${engineerlist[i].getGitHub()}</a></p></div></div><br/>`;
    }
    engineerHTML = `${engineerHTMLBEGIN}${engineerHTML}</div>`;

	var internHTML = '';
    var internHTMLBEGIN = '<div class="col-sm" style="padding-top: 10px; padding-left: 10px;">';
    for (var i = 0; i < internlist.length; i++) {
        var no = i + 1;
        internHTML = `${internHTML}<div class="card bg-secondary text-white" style="width: 18rem;"><div class="card-header"><h4><b>Name:  ${internlist[i].getName()}</b></h4>`;
        internHTML = `${internHTML}<h4><b><i class="oi oi-book "> Role:  ${internlist[i].getRole()}</i></b></h4></div>`;
        internHTML = `${internHTML}<div class="card-body" style="background-color:white; color:black;"><p>Employee ID :${internlist[i].getId()}</p>`;
        internHTML = `${internHTML}<p>e-mail: <a href="mailto:${internlist[i].getEmail()}">${internlist[i].getEmail()}</a></p>`;
        internHTML = `${internHTML}<p>School:  ${internlist[i].getSchool()}</p></div></div><br/>`;
    }
    internHTML = `${internHTMLBEGIN}${internHTML}</div>`;
    var beginHTML = '<html><head><meta charset="utf-8">' +
        '<title>My Team</title>' +
        // '<header>My Team Role</header>' +
       '<nav class="navbar navbar-expand-lg navbar-dark bg-danger justify-content-center"><h1 class="text-center text-light">My Team</h1></nav>' +
       '<meta name="viewport" content="width=device-width, initial-scale=1">' +
        '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">' +
        '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />' +
        '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>' +
        '<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>' +
        '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script></head><body><div class="container">';
    var endHTML = '</div></body></html>';
    return beginHTML + managerHTML + engineerHTML + internHTML + endHTML;
};

var managerlist = [];
var engineerlist = [];
var internlist = [];


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
            validate: email => {
                const emailChar = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

                if (emailChar) {
                    return true;
                }
                else {
                    console.log('  Please enter valid email!');
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
        }

    ]).then(projectData => {
        var newManager = new Managerclass(projectData.name, projectData.id, projectData.email, 'Manager', projectData.office);
        managerlist.push(newManager);
        if (projectData.addemployee) {
            return promptQuestion();
        } else {
            return true;
        }
    });
}
Manager()
    .then(managerData => {
        const pageHTML = generateMarkdown(managerlist, engineerlist, internlist);
        fs.writeFile(`myteam.html`, pageHTML, "utf8", err => {
            if (err) throw new Error(err);

            console.log(`File created! check out myteam.html in this directory to see it!`);
        });
    });

const promptQuestion = () => {
    return inquirer.prompt([
        {
            type: 'checkbox',
            name: 'role',
            message: 'What employee would you like to choose',
            choices: ['Engineer', 'Intern']
        }

    ]).then(projectData => {

        if (projectData.role == 'Engineer') {
            return promptEngineer();
        } else {
            return promptIntern();
        }
    });
}

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
            validate: email => {
                const emailChar = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

                if (emailChar) {
                    return true;
                }
                else {
                    console.log('  Please enter valid email!');
                    return false;
                }
            }
        },
        {
            type: `input`,
            name: `github`,
            message: `What is engineers GitHub username?`,
            validate: github => {
                if (github) {
                    return true;
                }
                else {
                    console.log('Please enter engineers GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'addemployee',
            message: 'Would you like to add another employee?',
            default: true
        }

    ]).then(projectData => {
        var newEngineer = new Engineerclass(projectData.name, projectData.id, projectData.email, 'Engineer', projectData.github);
        engineerlist.push(newEngineer);
        if (projectData.addemployee) {
            return promptQuestion();
        } else {
            return true;
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
                validate: email => {
                    const emailChar = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    
                    if (emailChar) {
                        return true;
                    }
                    else {
                        console.log('  Please enter valid email!');
                        return false;
                    }
               
              
            }

        },
        {
            type: `input`,
            name: `school`,
            message: `What is interns school?`,
            validate: school => {
                if (school) {
                    return true;
                }
                else {
                    console.log('Please enter interns school!');
                    return false;
                }
            }
            
           
        },
        {
            type: 'confirm',
            name: 'addemployee',
            message: 'Would you like to add another employee?',
            default: true
        }

    ]).then(projectData => {
        var newIntern = new Internclass(projectData.name, projectData.id, projectData.email, 'Intern', projectData.school);
        internlist.push(newIntern);
        if (projectData.addemployee) {
            return promptQuestion();
        } else {
            return true;
        }


    });
};
