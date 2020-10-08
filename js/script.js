window.onload = function () {
    // tasks,
    //     timerField,
    //     timeSetting,
    //     gameStatusField,
    //     gamePlayers,
    //     textFieldQuestion,
    //     textFieldAnswer1,
    //     textFieldAnswer2,
    //     textFieldAnswer3,
    //     textFieldAnswer4,
    //     textFieldAnswer5
    tikTakBoom.init(
        tasks,
        // Количество игроков
        document.querySelector('#gamePlayers').value,

        // Таймер
        document.querySelector('#timerField'),

        // Время на игру
        document.querySelector('#timeSetting').value,
        // Статус
        document.querySelector('#gameStatusField'),

        // Вопрос
        document.querySelector('#questionField'),
        // Ответы
        document.querySelector('#answer1'),
        document.querySelector('#answer2'),
        document.querySelector('#answer3'),
        document.querySelector('#answer4'),
        document.querySelector('#answer5')
    )

    var game = document.querySelector('.game');
    var gameStart = document.querySelector('.game__start');
    var gameEnd = document.querySelector('.game__end');

    gameStart.addEventListener('click', function () {
        game.classList.add('game--active');
        console.log(document.querySelector('#timeSetting').value);
        tikTakBoom.run();
    });

    gameEnd.addEventListener('click', function () {
        game.classList.remove('game--active');
    });


}