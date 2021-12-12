$(function () {
    $('.menu a').each(function () {
        let location = window.location.href;
        let link = this.href;
        if(location == link) {
            $(this).addClass('act');
        }
    });
});