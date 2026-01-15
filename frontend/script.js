const form = document.getElementById('contactForm');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "e3e56952-9af2-4a60-a862-59359b4dd456");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});





const projectCard = document.getElementById('project-card');


const projects = [
    {
        id:1,
        img:"./images/prescripto-project.png",
        name:"Health Care Appointment",
        desc:"A MERN stack healthcare appointment platform enabling easy booking, scheduling, and patient management.",
        repo:"https://github.com/K-Nithish-Kumar/Health-Care-Appointment",
        demo:"https://health-care-appointment-xou2.vercel.app/",

    },

    {
        id:2,
        img:"./images/weather-app.png",
        name:"Weather App",
        desc:"A responsive weather application that fetches real-time weather data using a Weather API, displaying temperature, humidity, wind speed, and forecasts through a clean and intuitive interface.",
        repo:"https://github.com/K-Nithish-Kumar/Mini-projects/tree/main/weatherApp",
        demo:"https://weatherapp1327.netlify.app/",
    },

    {
        id:3,
        img:"./images/netflix.png",
        name:"Netflix Clone",
        desc:"A responsive weather application that fetches real-time weather data using a Weather API, displaying temperature, humidity, wind speed, and forecasts through a clean and intuitive interface.",
        repo:"https://github.com/K-Nithish-Kumar/Netflix-clone"
    },
];





projectCard.innerHTML = projects.map(project =>  
                `<div class="card" id="card">
                <img src="${project.img}">
                <h4>${project.name}</h4>
                <p>${project.desc}</p>
                <div class="btns">
                <button onClick ="window.open('${project.repo}','_blank')">Repository <img src="./images/btn-icon.png"></button>
                <button onClick = "window.open('${project.demo}','_blank')">Demo <img src="./images/round-icon.png"></button>
                </div>
                </div>`
).join("");

projectCard.appendChild(card);



