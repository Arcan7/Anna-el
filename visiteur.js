var visits = localStorage.getItem('visits');

if (visits){
    visits = 0;
}

visits++;

localStorage.setItem('visits', visits);
document.getElementById('visits').innerHTML = visits;