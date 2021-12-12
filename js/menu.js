document.writeln('<nav>');
document.writeln('            <ul class="menu">');
document.writeln('                <li class="menu__link"><a href="../web_lab1/index.html" class="menu__a">Главная</a></li>');
document.writeln('                <li class="menu__link"><a href="../web_lab1/about_me.html" class="menu__a">Обо мне</a></li>');
document.writeln('                <li class="menu__link"><a href="../web_lab1/contacts.html" class="menu__a">Контакты</a></li>');
document.writeln('                <li class="menu__link"><a href="../web_lab1/table.html" class="menu__a">Таблица</a></li>');
document.writeln('            </ul>');
document.writeln('        </nav>');

    $('.menu__a').each(function () {
        let location = window.location.href;
        let link = this.href;
        let result = location.match(link);
        if(result != null) {
            $(this).addClass('active');
        }
    });
