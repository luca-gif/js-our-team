/* Oggetti */

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

/* ciclo gli oggetti */

for (const index in members) {
    const htmlGenerato = getCardHtml(members[index]);

    document.querySelector(".team-container").innerHTML += htmlGenerato;
}

function getCardHtml(member) {
    return `<div class="team-card">
      <div class="card-image">
          <img src="${member.image}" />
      </div>
      <div class="card-text">
          <h3>${member.firstname} ${member.lastname}</h3>
          <p>${member.role}</p>
      </div>
  </div>`;
}

/* Genera le immagini */

function generateImage(membroSingolo) {
    return `
    <div><img src="${membroSingolo.image}"></div>
  `;
}

/* Genera  */

function generateMember(membroSingolo) {
    return `
  <div>    
    <h3>${membroSingolo.firstname}</h3>
    <h3>${membroSingolo.lastname}</h3>
    <p>${membroSingolo.role}</p>
  </div>
  `;
}