// Array of movies with their titles and image paths
const movies = [
    { title: "Home Alone", image: "images/homealone.jpg" },
    { title: "Elf", image: "images/elf.jpg" },
    { title: "Charlie Brown Christmas", image: "images/charliebrownchristmas.jpg" },
    { title: "Christmas Vacation", image: "images/christmasvacation.jpg" },
    { title: "How the Grinch Stole Christmas", image: "images/grinch.jpg" },
    { title: "Home Alone 2", image: "images/homealoneii.jpg" },
    { title: "The Santa Clause", image: "images/santaclause.jpg" },
    { title: "Jingle All The Way", image: "images/jinglealltheway.jpg" },
    { title: "The Nightmare Before Christmas", image: "images/thenightmareb.jpg" }
];

// Array of team members
const teamMembers = ["Alex & Ben", "Christie & William", "Kehinde", "Matt & Brandon", "Elizabeth", "Katya", "Brian", "David", "Jeff"];

// DOM Elements
const startButton = document.getElementById("start-game");
const nextButton = document.getElementById("next-movie");
const revealButton = document.getElementById("reveal-team-member");
const resetButton = document.getElementById("reset-game");
const movieDisplay = document.getElementById("movie");
const movieImage = document.getElementById("movie-image");
const teamMemberDisplay = document.getElementById("team-member");
const selectedMovieDiv = document.getElementById("selected-movie");
const selectedTeamMemberDiv = document.getElementById("selected-team-member");

let currentIndex = 0;

// Function to display the current movie
function displayMovie() {
    if (currentIndex < movies.length) {
        const currentMovie = movies[currentIndex];
        movieDisplay.textContent = currentMovie.title;
        movieImage.src = currentMovie.image;
        movieImage.alt = `${currentMovie.title} Poster`;
        movieImage.classList.remove("hidden");
        selectedMovieDiv.classList.remove("hidden");
        revealButton.classList.remove("hidden");
    }
}

// Function to reveal the current team member
function revealTeamMember() {
    if (currentIndex < teamMembers.length) {
        const currentTeamMember = teamMembers[currentIndex];
        teamMemberDisplay.textContent = currentTeamMember;
        selectedTeamMemberDiv.classList.remove("hidden");
        revealButton.classList.add("hidden");
    }
}

// Function to move to the next movie
function nextMovie() {
    currentIndex++;
    if (currentIndex < movies.length && currentIndex < teamMembers.length) {
        displayMovie();
        selectedTeamMemberDiv.classList.add("hidden");
    } else {
        nextButton.classList.add("hidden");
    }
}

// Function to reset the game
function resetGame() {
    currentIndex = 0;
    selectedMovieDiv.classList.add("hidden");
    selectedTeamMemberDiv.classList.add("hidden");
    startButton.classList.remove("hidden");
    nextButton.classList.add("hidden");
    revealButton.classList.add("hidden");
    resetButton.classList.add("hidden");
}

// Event listeners
startButton.addEventListener("click", () => {
    currentIndex = 0;
    displayMovie();
    startButton.classList.add("hidden");
    nextButton.classList.remove("hidden");
    resetButton.classList.remove("hidden");
});

revealButton.addEventListener("click", revealTeamMember);
nextButton.addEventListener("click", nextMovie);
resetButton.addEventListener("click", resetGame);
