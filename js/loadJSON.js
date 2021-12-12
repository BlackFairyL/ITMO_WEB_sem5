request = new XMLHttpRequest;
request.open('GET', 'https://jsonplaceholder.typicode.com/users/1/post1s', true);

request.onload = function() {
    if (request.status >= 200 && request.status < 400){
        // Success!
        data = JSON.parse(request.responseText);
    } else {
        document.getElementById('main__table__content__th').innerHTML = "Ktk"

    }
};

request.onerror = function() {
    // There was a connection error of some sort
};

request.send();
