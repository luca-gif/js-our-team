const members = [{
        firstname: "Wayne",
        lastname: "Barnett",
        role: "Founder & CEO",
        image: "./img/wayne-barnett-founder-ceo.jpg",
    },
    {
        firstname: "Angela",
        lastname: "Caroll",
        role: "Chief Editor",
        image: "./img/angela-caroll-chief-editor.jpg",
    },
    {
        firstname: "Walter",
        lastname: "Gordon",
        role: "Office Manager",
        image: "./img/walter-gordon-office-manager.jpg",
    },
    {
        firstname: "Angela",
        lastname: "Lopez",
        role: "Social Media Manager",
        image: "./img/angela-lopez-social-media-manager.jpg",
    },
    {
        firstname: "Scott",
        lastname: "Estrada",
        role: "Developer",
        image: "./img/scott-estrada-developer.jpg",
    },
    {
        firstname: "Barbara",
        lastname: "Ramos",
        role: "Graphic Designer",
        image: "./img/barbara-ramos-graphic-designer.jpg",
    },
];

/* 
Aggiungo membro al click
*/

document
    .getElementById("addMemberButton")
    .addEventListener("click", function() {
        const name = document.getElementById("name").value;
        const surname = document.getElementById("surname").value;
        const role = document.getElementById("role").value;
        const image = document.getElementById("image").value;

        let newMember = {
            firstname: name,
            lastname: surname,
            role: role,
            image: image,
        };
        members.push(newMember);

        console.log(members);
    });

/*
ciclo gli oggetti
*/

for (const index in members) {
    const htmlGenerato = getCardHtml(members[index]);
    document.querySelector(".team-container").innerHTML += htmlGenerato;
}

function getCardHtml(member) {
    return `<div class="team-card">
      <div class="card-image">
          <img src="${member.image}"/>
      </div>
      <div class="card-text">
          <h3>${member.firstname} ${member.lastname}</h3>
          <p>${member.role}</p>
      </div>
  </div>`;
}