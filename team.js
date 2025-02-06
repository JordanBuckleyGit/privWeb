const members = [
    {
        firstName: "Nicola",
        lastName: "Rossberg",
        role: "Chairperson",
        description:
            "Nicola is the UCC ACM Chapter Chair!",
        linkedIn: "https://www.linkedin.com/in/nicola-rossberg/",
    },
    // {
    //     firstName: "Andrew",
    //     lastName: "Nash",
    //     role: "IT/Sys Admin",
    //     description:
    //         "Andrew oversees all technical matters in the ACM Chapter.",
    //     linkedIn: "https://www.linkedin.com/in/a-nash/",
    // },
    {
        firstName: "David",
        lastName: "Shanahan",
        role: "Vice-Chairperson",
        description: 
            "David is Master's student and the UCC ACM Chapter Vice-Chair.",
        linkedIn: "https://www.linkedin.com/in/david-shanahan-89731a184/",
    },
    {
        firstName: "Andrea",
        lastName: "Visentin",
        role: "Academic Sponsor",
        description: 
            "Andrea is an Assistant Professor.",
        linkedIn: "https://www.linkedin.com/in/andrea-visentin-a4b9a585/",
    },
    {
        firstName: "Marlon",
        lastName: "Ares",
        role: "Secretary",
        description: "Marlon manages minutes of committee meetings and oversees Chapter administration.",
        linkedIn:
            "https://www.linkedin.com/in/marlon-jesus-ares-milian-4b2a16203/",
    },
    {
        firstName: "Jordan",
        lastName: "Buckley",
        role: "Webmaster",
        description:
            "Jordan created/manages the website and online infrastructure.",
        linkedIn: "https://www.linkedin.com/in/jordan05/",
    },
    {
        firstName: "Michael",
        lastName: "Xuereb",
        role: "Finance Officer",
        description:
            "Michael ensures all finances are well-managed for events.",
        linkedIn: "https://www.linkedin.com/in/michael-xuereb1337/",
    },
    {
        firstName: "Dan",
        lastName: "Bokete",
        role: "OCM",
        description:
            "Dan assisted with the development/managing of the website and online infrastructure.",
        linkedIn: "https://www.linkedin.com/in/dan-bokete-672a72316/",
    },
    {
        firstName: "Mikolaj",
        lastName: "Wujek",
        role: "Social Media Manager",
        description:
            "Mikolaj created the ACM poster, and manages our social media platforms.",
        linkedIn: "https://www.linkedin.com/in/mikolaj-wujek-132354333/",
    },
    {
        firstName: "Ivan",
        lastName: "Fonagy",
        role: "Deputy Technical Manager",
        description:
            "Ivan helps with deployment and documentation of competition software.",
        linkedIn: "https://www.linkedin.com/in/ivan-fonagy/",
    },
    {
        firstName: "Abigail",
        lastName: "Joseph",
        role: "OCM",
        description: "Abigail is an OCM who is involved in the technical team.",
        linkedIn: "https://www.linkedin.com/in/abigail-elizabeth-joseph-a94215334/",
    },
    {
        firstName: "Pawel",
        lastName: "Popkiewicz",
        role: "OCM",
        description:
            "Pawel assisted with the development/managing of the website and online infrastructure.",
        linkedIn: "https://www.linkedin.com/in/pawe%C5%82-popkiewicz-b3b727251/",
    },
    // {
    //     firstName: "David",
    //     lastName: "Lesiak",
    //     role: "OCM",
    //     description:
    //         "David is an OCM who is involved in the organisation of the ACM event.",
    //     linkedIn: "https://www.linkedin.com/in/david-lesiak-573830271/",
    // },
];

const teamContainer = document.getElementById("teamContainer");

let html = "";
members.forEach((person) => {
    const rawHtml = `<div
    class="team-member"
    onclick="expandTeamMember(this)"
    >
    <img
        src="images/${person.firstName.toLowerCase()}_${person.lastName.toLowerCase()}.jpg"
        alt="An image of ${person.firstName} ${person.lastName}"
    />
    <h3>${person.firstName} ${person.lastName ? person.lastName : ""}</h3>
    <p class="role">${person.role ? person.role : "Acm Member"}</p>
    <p class="description">
        ${
            person.description
                ? person.description
                : `${person.firstName} is apart of the team who contributes to the organisation of the event`
        }
    </p>
    <a
        aria-label="link to linked in page"
        href="${person.linkedIn ? person.linkedIn : "#home"}"
    >
        <i class="fab fa-linkedin"></i>
    </a>
    </div>`;
    html += rawHtml;
});

teamContainer.innerHTML = html;
