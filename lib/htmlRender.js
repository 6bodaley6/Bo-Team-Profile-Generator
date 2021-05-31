const htmlRender = (teamMates) => {

    let teamHtml = ``
    for (let i = 0; i < teamMates.length; i++) {
        const emp = teamMates[i];
        let card = `<div class="card" style="width: 18rem;">
        <div class="card-body">
        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">  
         <h5 class="card-title">Name: ${emp.getName()}</h5>
         <p class="card-text .bg-primary">Role: ${emp.getRole()}</p>
        </div>   
          
        <p class="card-text">Id: ${emp.getId()}</p>
        <p class="card-text">Email: ${emp.getEmail()}</p>
        </div>
      </div>`
        teamHtml += card
    }

    // // <p class="card-text">Other: ${emp.getGithub() || emp.getSchool() || emp.getOfficeNumber() }</p>
    //!! turn in like is 
    //!! need to screencastify to turn in 
    // <a href="mailto:6bodaley6@gmail.com"><button class="icon" ><img src="assets/images/icons8-gmail-48.png" alt="gmail-icon"></img></button></a>


    let mainHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <title>Document</title>
</head>
<body>
 ${teamHtml}   
</body>
</html>`
    return mainHtml
}
module.exports = htmlRender;
