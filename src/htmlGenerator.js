// create Manager card
generateManager = (manager) => {
  return `
  `;
};

// create Engineer card
generateEngineer = (engineer) => {
  return `
  `;
};

// create Intern card
generateIntern = (intern) => {
  return `
  `;
};

// generate html page
module.exports = (templateData) => {
  const { manager, engineer, intern } = templateData;

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
        ${generateManager(manager)};
        ${generateEngineer(engineer)};
        ${generateIntern(intern)};
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
