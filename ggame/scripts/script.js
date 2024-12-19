// Array of movies with their titles and image paths
const movies = [
    { title: "Home Alone", image: "images/home_alone.jpg" },
    { title: "Elf", image: "images/elf.jpg" },
    { title: "The Polar Express", image: "images/polar_express.jpg" },
    { title: "A Christmas Carol", image: "images/christmas_carol.jpg" },
    { title: "How the Grinch Stole Christmas", image: "images/grinch.jpg" },
    { title: "Love Actually", image: "images/love_actually.jpg" },
    { title: "The Santa Clause", image: "images/santa_clause.jpg" },
    { title: "It's a Wonderful Life", image: "images/wonderful_life.jpg" },
    { title: "Frosty the Snowman", image: "images/frosty.jpg" },
    { title: "Rudolph the Red-Nosed Reindeer", image: "images/rudolph.jpg" }
];

// Array of team members
const teamMembers = ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank", "Grace", "Hank", "Ivy", "Jack"];

// DOM Elements
const startButton = document.getElementById("start-game");
const revealButton = document.getElementById("reveal-team-member");
const teamMemberDisplay = document.getElementById("team-member");
const movieDisplay = document.getElementById("movie");
const movieImage = document.getElementById("movie-image");
const selectedTeamMemberDiv = document.getElementById("selected-team-member");
const selectedMovieDiv = document.getElementById("selected-movie");

// Function to pick a random item from an array
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Start the game
startButton.addEventListener("click", () => {
    // Select a random movie
    const randomMovie = getRandomItem(movies);
    movieDisplay.textContent = randomMovie.title;
    movieImage.src = randomMovie.image;
    movieImage.alt = `${randomMovie.title} Poster`;
    movieImage.classList.remove("hidden");
    selectedMovieDiv.classList.remove("hidden");

    // Show the reveal button
    revealButton.classList.remove("hidden");
});

// Reveal the team member
revealButton.addEventListener("click", () => {
    // Select a random team member
    const randomTeamMember = getRandomItem(teamMembers);
    teamMemberDisplay.textContent = randomTeamMember;
    selectedTeamMemberDiv.classList.remove("hidden");
    revealButton.classList.add("hidden");
});