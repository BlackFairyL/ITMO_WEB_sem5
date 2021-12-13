function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
window.onload = function() {
    let request = new XMLHttpRequest;
    request.open('GET', 'https://jsonplaceholder.typicode.com/comments/1/posts', true);
    request.onload = function () {
        let data;
        if (request.status >= 200 && request.status < 400) {
                data = JSON.parse(request.responseText);
                var newData = data.filter(function(e){
                    return e.id < getRandomInRange(1, 40);
                });
                document.getElementById("json").innerHTML = JSON.stringify(newData, undefined, 2);
        } else {
            document.getElementById("json").innerHTML = "Что-то пошло не так"
        }
    };

    request.onerror = function () {
        document.getElementById("json").innerHTML = "Что-то пошло не так"
    };
    request.send();

}