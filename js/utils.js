const randomIntNumber = (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min);

function creatDataPlayers(gamePlayers, timeSetting) {
  var a = [];
  for (var i = 0; i < gamePlayers; i++) {
    var player = {
      name: `Игрок №${i+1}`,
      //0 - проиграл, 1 - выиграл, 2 - игра идёт
      status: 0,
      timer: timeSetting,
      score: 0,
      errors: 0,

      setTime(time) {
        this.timer = time;
      },

      addTime(timeValue = 0) {
        this.timer += timeValue;
      },

      setState(stateValue) {
        this.state = stateValue;
      }
    };

    a.push(player)
  }
  return a;
}