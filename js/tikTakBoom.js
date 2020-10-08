tikTakBoom = {
    init(
        tasks,
        gamePlayers,

        timerField,
        timeSetting,
        gameStatusField,

        textFieldQuestion,
        textFieldAnswer1,
        textFieldAnswer2,
        textFieldAnswer3,
        textFieldAnswer4,
        textFieldAnswer5
    ) {
        this.boomTimer = timeSetting;
        this.timeTraining = 3;
        this.superGame = false;
        this.countOfPlayers = 2;

        this.tasks = JSON.parse(tasks);

        this.timerField = timerField;
        this.timeSetting = timeSetting;
        this.gamePlayers = gamePlayers;
        this.players = undefined;
        this.currentPlayer = undefined;
        this.playerTimer = undefined;
        this.gameStatusField = gameStatusField;
        this.textFieldQuestion = textFieldQuestion;
        this.textFieldAnswer1 = textFieldAnswer1;
        this.textFieldAnswer2 = textFieldAnswer2;
        this.textFieldAnswer3 = textFieldAnswer3;
        this.textFieldAnswer4 = textFieldAnswer4;
        this.textFieldAnswer5 = textFieldAnswer5;

        this.needRightAnswers = 19;
    },

    run() {
        this.startTimer();
        // this.timer();
        this.state = 1;

        this.rightAnswers = 0;

        this.turnOn();


    },

    turnOn() {
        this.gameStatusField.innerText += ` Вопрос игроку №${this.state}`;
        startTimer();
        const taskNumber = randomIntNumber(this.tasks.length - 1);
        this.printQuestion(this.tasks[taskNumber]);

        this.tasks.splice(taskNumber, 1);

        this.state = (this.state === this.countOfPlayers) ? 1 : this.state + 1;
    },

    turnOff(value) {
        if (this.currentTask[value].result) {
            this.gameStatusField.innerText = 'Верно!';
            this.rightAnswers += 1;
            this.boomTimer += 5;
        } else {
            this.gameStatusField.innerText = 'Неверно!';
            this.boomTimer -= 5;
        }
        if (this.rightAnswers < this.needRightAnswers) {
            if (this.tasks.length === 0) {
                this.finish('lose');
            } else {
                this.turnOn();
            }
        } else {
            this.finish('won');
        }

        this.textFieldAnswer1.removeEventListener('click', answer1);
        this.textFieldAnswer2.removeEventListener('click', answer2);
        this.textFieldAnswer3.removeEventListener('click', answer3);
        this.textFieldAnswer4.removeEventListener('click', answer4);
        this.textFieldAnswer5.removeEventListener('click', answer5);
    },

    startGame(number = 0) {
        if (this.players === undefined) {
            this.players = creatDataPlayers(this.gamePlayers, this.boomTimer);
        }

        if (this.superGame === false) {
            this.boomTimer = parseInt(this.timeSetting);
        }

        if (this.superGame === true) {
            for (player of this.players) {
                player.timer = this.boomTimer;
                player.errors = 0;
                player.score = 0;
            }
        }

        this.currentPlayer = number;
        this.startTimer();
    },

    printQuestion(task) {
        this.textFieldQuestion.innerText = task.question;
        this.textFieldAnswer1.innerText = task.answer1.value;
        this.textFieldAnswer2.innerText = task.answer2.value;
        this.textFieldAnswer3.innerText = task.answer3.value;
        this.textFieldAnswer4.innerText = task.answer4.value;
        this.textFieldAnswer5.innerText = task.answer5.value;

        this.textFieldAnswer1.addEventListener('click', answer1 = () => this.turnOff('answer1'));
        this.textFieldAnswer2.addEventListener('click', answer2 = () => this.turnOff('answer2'));
        this.textFieldAnswer3.addEventListener('click', answer3 = () => this.turnOff('answer3'));
        this.textFieldAnswer4.addEventListener('click', answer4 = () => this.turnOff('answer4'));
        this.textFieldAnswer5.addEventListener('click', answer5 = () => this.turnOff('answer5'));

        this.currentTask = task;
    },

    finish(result = 'lose') {
        this.state = 0;
        if (result === 'lose') {
            this.gameStatusField.innerText = `Вы проиграли!`;
            this.timerField.innerText = "THE END";
        }
        if (result === 'won') {
            this.gameStatusField.innerText = `Вы выиграли!`;
        }

        this.textFieldQuestion.innerText = ``;
        this.textFieldAnswer1.innerText = ``;
        this.textFieldAnswer2.innerText = ``;
        this.textFieldAnswer3.innerText = ``;
        this.textFieldAnswer4.innerText = ``;
        this.textFieldAnswer5.innerText = ``;

        console.log(this);
    },

    timer() {
        if (this.state) {
            this.boomTimer -= 1;
            let sec = this.boomTimer % 60;
            let min = (this.boomTimer - sec) / 60;
            sec = (sec >= 10) ? sec : '0' + sec;
            min = (min >= 10) ? min : '0' + min;
            this.timerField.innerText = `${min}:${sec}`;

            if (this.boomTimer > 0) {
                setTimeout(
                    () => {
                        this.timer()
                    },
                    1000,
                )
            } else {
                this.finish('lose');
            }
        }
    },
    startTimer() {
        var i = this.timeTraining;
        var timeClear = setInterval(() => {
            this.timerField.innerText = i;
            i--;
            console.log(i);
            if (i < 0) {
                clearInterval(timeClear);
                console.log('stop');
                this.timer();
            }
        }, 1000);

    }

}