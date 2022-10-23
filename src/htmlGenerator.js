// create Manager card
generateManager = (manager) => {
  return `
  <div class="col-6 col-md-6 col-lg-5 mt-4">
            <div class="card border-0">
              <div class="card-header gr-1">
                <h3>${manager.name}</h3>
                <h4>Manager</h4>
                <div class="ico-card">
                  <i class="fa-solid fa-chalkboard-user"></i>
                </div>
              </div>
              <div class="card-body">
                <ul
                  class="list-group border list-group-flush mt-2 mb-2 rounded shadow-sm"
                >
                  <li class="list-group-item id">ID: ${manager.id}</li>
                  <li class="list-group-item email">
                    Email:
                    <a href="mailto:${manager.email}">${manager.email}</a>
                  </li>
                  <li class="list-group-item office">Office Number: ${manager.officeNumber}</li>
                </ul>
              </div>
            </div>
          </div>
  `;
};

// create Engineer card
generateEngineer = (engineer) => {
  return `
  <div class="col-6 col-md-6 col-lg-5 mt-4">
            <div class="card border-0">
              <div class="card-header gr-2">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4>
                <div class="ico-card">
                  <i class="fa-solid fa-helmet-safety"></i>
                </div>
              </div>
              <div class="card-body">
                <ul
                  class="list-group border list-group-flush mt-2 mb-2 rounded shadow-sm"
                >
                  <li class="list-group-item id">ID: ${engineer.id}</li>
                  <li class="list-group-item email">
                    Email:
                    <a href="mailto:${engineer.email}">${engineer.email}</a>
                  </li>
                  <li class="list-group-item github">
                    GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
  `;
};

// create Intern card
generateIntern = (intern) => {
  return `
  <div class="col-6 col-md-6 col-lg-5 mt-4">
            <div class="card border-0">
              <div class="card-header gr-3">
                <h3>${intern.name}</h3>
                <h4>Intern</h4>
                <div class="ico-card">
                  <i class="fa-solid fa-graduation-cap"></i>
                </div>
              </div>
              <div class="card-body">
                <ul
                  class="list-group border list-group-flush mt-2 mb-2 rounded shadow-sm"
                >
                  <li class="list-group-item id">ID: ${intern.id}</li>
                  <li class="list-group-item email">
                    Email:
                    <a href="mailto:r${intern.email}">${intern.email}</a>
                  </li>
                  <li class="list-group-item school">School: ${intern.school}</li>
                </ul>
              </div>
            </div>
          </div>
  `;
};

// push array to page
htmlGenerator = (data) => {
  // array for cards
  cardArray = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    // call manager function
    if (role === "Manager") {
      const managerCard = generateManager(employee);

      cardArray.push(managerCard);
    }

    // call engineer funtion
    if (role === "Engineer") {
      const engineerCard = generateEngineer(employee);

      cardArray.push(engineerCard);
    }

    // call intern function
    if (role === "Intern") {
      const internCard = generateIntern(employee);

      cardArray.push(internCard);
    }
  }

  // joining strings
  const employeeCards = cardArray.join("");

  // return to generated page
  const generateTeam = generateTeamPage(employeeCards);
  return generateTeam;
};

// generate html page
const generateTeamPage = function (employeeCards) {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
    />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
      integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Team Profile</title>
  </head>
  <body>
    <header>
      <nav class="navbar navbar-dark fixed-top bg-info shadow p-3" id="navbar">
        <span class="navbar-brand mt-3 mx-auto" id="navbar-text"
          ><h2>My Team</h2></span
        >
      </nav>
    </header>
    <main>
      <div class="container">
        <div
          class="row justify-content-center align-items-center"
        >
        <!--Team Cards-->
        ${employeeCards}
        </div>
        </div>
      </main>
    </body>
    <script
      src="https://kit.fontawesome.com/bfc7a5d487.js"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
      integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
      integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
      crossorigin="anonymous"
    ></script>
  </html>  
  `;
};

// export to index.html
module.exports = htmlGenerator;
