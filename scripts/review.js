let review_counter = parseInt(localStorage.getItem('review_counter')) || 0;

if (!review_counter) {
    localStorage.setItem('review', 0);
}


window.onload = function () {
    review_counter++;
    localStorage.setItem('review_counter', review_counter);
    document.getElementById('review_counter').innerHTML = review_counter;
}