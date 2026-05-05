
function toggleTheme() {
    const body = document.body;
    if (body.getAttribute('data-theme') === 'light') {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

window.onload = function() {
    if (localStorage.getItem('theme') === 'light') {
        document.body.setAttribute('data-theme', 'light');
    }
};


function validateLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const emailError = document.getElementById('email-error');
    const passError = document.getElementById('pass-error');
    let isValid = true;

    if (emailError) emailError.style.display = 'none';
    if (passError) passError.style.display = 'none';

    if (email === "" || !email.includes('@')) {
        if (emailError) {
            emailError.innerHTML = "Please Enter a valid email address includes @";
            emailError.style.display = 'block';
        }
        isValid = false;
    }

    if (password.length < 6) {
        if (passError) {
            passError.innerHTML = "Password must be at least 6 characters";
            passError.style.display = 'block';
        }
        isValid = false;
    }

    if (isValid) {
        alert("You have logged in Successfully! Welcome :)");
        window.location.href = 'index.html';
    }
}

function requestCode() {
    const email = document.getElementById('reg-email').value;
    if (email === "" || !email.includes('@')) {
        alert("Please enter a valid professional email first");
        return;
    }
    document.getElementById('verification-group').style.display = 'block';
    document.getElementById('codeBtn').innerText = "Resend Code";
    alert("We have sent an OTP contains 6 digits to" + email + "Successfully!");
}

function validateSignup(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('reg-email').value;
    const code = document.getElementById('verify-code').value;
    const password = document.getElementById('reg-password').value;

    if (document.getElementById('verification-group').style.display === 'none') {
        alert("Please request an OTP first");
        return;
    }

    if (code === "") {
        alert("Please enter the OTP sent to your email address");
        return;
    }

    if (name === "" || email === "" || !email.includes('@') || password.length < 6) {
        alert("Please check your information first (Password must be 6 digits)");
        return;
    }

    alert("Account has been registered Successfully, " + name + "You can sign in now");
    window.location.href = 'login.html';
}


const moviesDB = {
    "White House Down": { 
        poster: "images/5.jpeg", 
        genre: "Action / Thriller", 
        director: "Roland Emmerich", 
        rating: "6.4 / 10" 
    },
    "No Time To Die": { 
        poster: "images/6.jpeg", 
        genre: "Action / Adventure", 
        director: "Cary Joji Fukunaga", 
        rating: "7.3 / 10" 
    },
    
    "Fast X": { 
        poster: "images/8.jpeg", 
        genre: "Action / Adventure", 
        director: "Louis Leterrier", 
        rating: "5.8 / 10" 
    },
    "Scream": { 
        poster: "images/9.jpeg", 
        genre: "Horror / Mystery", 
        director: "Matt Bettinelli-Olpin", 
        rating: "6.3 / 10" 
    },
    "Man On Fire": { 
        poster: "images/10.jpeg", 
        genre: "Action / Crime", 
        director: "Tony Scott", 
        rating: "7.7 / 10" 
    },
    "Bank El7az": { 
        poster: "images/21.jpeg", 
        genre: "Comedy", 
        director: "Ahmed el-Gendy", 
        rating: "8.1 / 10" 
    },
    "El3ameel Sifr": { 
        poster: "images/22.jpeg", 
        genre: "Comedy / Action", 
        director: "Karim El Shenawy", 
        rating: "7.4 / 10" 
    },
    "Extraction": { 
        poster: "images/2.jpeg", 
        genre: "Action / Thriller", 
        director: "Sam Hargrave", 
        rating: "6.8 / 10" 
    },
    "The Accountant": { 
        poster: "images/3.jpeg", 
        genre: "Action / Crime", 
        director: "Gavin O'Connor", 
        rating: "7.3 / 10" 
    },
    "12 Strong": { 
        poster: "images/4.jpeg", 
        genre: "Action / War", 
        director: "Nicolai Fuglsig", 
        rating: "6.5 / 10" 
    }
};


function updateCompareMovie(col) {
    const selectElement = document.getElementById('movieSelect' + col);
    if (!selectElement) return;

    const selectedMovie = selectElement.value;
    const data = moviesDB[selectedMovie];
    
    if (data) {
        document.getElementById('poster' + col).src = data.poster;
        document.getElementById('genre' + col).innerText = data.genre;
        document.getElementById('director' + col).innerText = data.director;
        document.getElementById('rating' + col).innerText = data.rating;
    }
}


const seriesDB = {
    "Stranger Things": { 
        poster : "images/14.webp",
        genre: "Sci-Fi", 
        seasons: "4 Seasons", 
        status: "Ongoing", 
        rating: "8.7 / 10" 
    },
    "The Boys": { 
        poster : "images/16.webp",
        genre: "Comedy", 
        seasons: "5 Seasons", 
        status: "Finished", 
        rating: "8.6 / 10" 
    },
    "lam Shamsia": { 
        poster: "images/19.webp", 
        genre: "Drama", 
        seasons: "1 Season", 
        status: "Finished", 
        rating: "7.5 / 10" 
    },
    "Chernobyl": { 
        poster: "images/13.webp", 
        genre: "Historical Drama", 
        seasons: "1 Season", 
        status: "Finished", 
        rating: "9.4 / 10" 
    },
    "Aluostora": { 
        poster: "images/18.webp", 
        genre: "Drama", 
        seasons: "1 Season", 
        status: "Finished", 
        rating: "8.0 / 10" 
    },
    "Dark": { 
        poster: "images/15.webp", 
        genre: "Sci-Fi / Mystery", 
        seasons: "3 Seasons", 
        status: "Finished", 
        rating: "8.7 / 10" 
    },
    "Game of Thrones": { 
        poster: "images/12.webp", 
        genre: "Fantasy / Drama", 
        seasons: "8 Seasons", 
        status: "Finished", 
        rating: "9.2 / 10" 
    },
    "etni'n Gherna": { 
        poster: "images/20.webp", 
        genre: "Romance", 
        seasons: "1 Season", 
        status: "Finished", 
        rating: "7.2 / 10" 
    },
    "Prison Break": { 
        poster: "images/17.webp", 
        genre: "Action / Crime", 
        seasons: "5 Seasons", 
        status: "Finished", 
        rating: "8.3 / 10" 
    },
    "Breaking Bad": { 
        poster: "images/11.webp", 
        genre: "Crime / Drama", 
        seasons: "5 Seasons", 
        status: "Finished", 
        rating: "9.5 / 10" 
    }
};

function updateCompareSeries(col) {
    const selectElement = document.getElementById('seriesSelect' + col);
    if (!selectElement) return;

    const selectedSeries = selectElement.value;
    const data = seriesDB[selectedSeries];
    
    if (data) {
        document.getElementById('sposter' + col).src = data.poster;
        document.getElementById('sgenre' + col).innerText = data.genre;
        document.getElementById('sseasons' + col).innerText = data.seasons;
        document.getElementById('sstatus' + col).innerText = data.status;
        document.getElementById('srating' + col).innerText = data.rating;
    }
}


function validateContact(event) {
    event.preventDefault();
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (subject === "" || message === "") {
        alert("plz enter ur message");
        return;
    }
    alert("Done");
    document.getElementById('contactForm').reset();
}