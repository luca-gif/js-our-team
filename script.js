/* const teamCard = document.createElement("div");
teamCard.className = "team-card";
document.querySelector(".team-container").append(teamCard);

const cardImage = document.createElement("div");
cardImage.className = "card-image";
teamCard.append(cardImage);

const cardText = document.createElement("div");
cardText.className = "card-text";

teamCard.append(cardText); */

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
        altroCampo: "ciao",
        lastname: "Ramos",
        role: "Graphic Designer",
        image: "./img/barbara-ramos-graphic-designer.jpg",
    },
];

for (const index in members) {
    document.querySelector(".team-container").innerHTML += generateMember(
        members[index]
    );
}

function generateMember(membroSingolo) {
    return `
  <div>    
    <div><img src="${membroSingolo.image}"></div>
    <div>${membroSingolo.firstname}</div>
    <div>${membroSingolo.lastname}</div>
  </div>
  `;
}