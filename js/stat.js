'use strict';




const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const FONT_GAP = 15;
const TEXT_WIDTH = 50;
// const BAR_HEIGHT = 20;
const BAR_HEIGHT = CLOUD_HEIGHT - GAP * 4 - TEXT_WIDTH * 2;
// const BAR_WIDTH = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;
const BAR_WIDTH = 50;




const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};




const getMaxElement = function (arr) {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};




const getBlueShadeHEX = function () {
  let channelRed = 50,
      channelGreen = 50,
      channelBlue = randomIntFromInterval(80, 250),
      blueShade = "";

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  blueShade = `#` + channelRed.toString(16) + channelGreen.toString(16) + channelBlue.toString(16);

  return blueShade;
};

const getChartColor = function(player) {
  let chartColor = "";
  if (player === "Вы") {
    chartColor = "#ff0000";
  } else {
    chartColor = getBlueShadeHEX();
  }
  return chartColor;
}


window.renderStatistics = function (ctx, players, times) {
  renderCloud(
    ctx,
    CLOUD_X + GAP,
    CLOUD_Y + GAP,
    'rgba(0, 0, 0, 0.3)'
  );
  renderCloud(
    ctx,
    CLOUD_X,
    CLOUD_Y,
    '#fff'
  );

  ctx.fillStyle = '#000';

  //начинаем изменения здесь
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';

  ctx.fillText(
    'Ура вы победили!',
    CLOUD_X + GAP * 2.2,
    CLOUD_Y + GAP * 2.2
    );
  ctx.fillText(
    'Список результатов:',
    CLOUD_X + GAP * 2.2,
    CLOUD_Y + GAP * 2.2 + FONT_GAP
    );
  //строка приветствия: На облаке должен быть отрисован текст сообщения ’Ура вы победили! \nСписок результатов: ’
  //с помощью метода fillText. Текст должен быть набран шрифтом PT Mono размером 16px.


  const maxTime = getMaxElement(times);

  for (let i = 0; i < players.length; i++) {
    ctx.fillText(
      //________________________________________________________________
      //убрать ндекс игрока на следующей команде
      `${i}`+players[i]+Math.floor(times[i]),
      // CLOUD_X + GAP,
      CLOUD_X + GAP + FONT_GAP + (GAP * 4 + BAR_WIDTH) * i,
      // CLOUD_Y + GAP * 10 + FONT_GAP + (GAP + BAR_HEIGHT) * i
      // CLOUD_Y + GAP
      CLOUD_Y + GAP * 24
    );


      //здесть генерим цвет для всех, кроме одного игрока
    // ctx.fillStyle = getBlueShadeHEX();


    ctx.fillStyle = getChartColor(players[i]);
    ctx.fillRect(


      // CLOUD_X + GAP + TEXT_WIDTH,
      CLOUD_X + GAP + FONT_GAP + (GAP * 4 + BAR_WIDTH) * i,
      // CLOUD_X + GAP * 10 + (GAP + BAR_HEIGHT) * i,


      // CLOUD_Y + GAP * 10 + (GAP + BAR_HEIGHT) * i,
      // CLOUD_Y + GAP * 17.5 + TEXT_WIDTH,
      CLOUD_Y + GAP * 17 + TEXT_WIDTH,
      //переосмыслить наверху
      // CLOUD_Y + GAP + TEXT_WIDTH,
      // CLOUD_Y + GAP + TEXT_WIDTH,


      // (BAR_WIDTH * times[i]) / maxTime,
      BAR_WIDTH,


      // BAR_HEIGHT
      -((BAR_HEIGHT * times[i]) / maxTime)
    );

      //времено
      // ctx.fillStyle = '#fff';

    ctx.fillStyle = '#000';
    ctx.fillText(
      //________________________________________________________________
      //убрать ндекс игрока на следующей команде
      // players[i]+`_${i}`,
      // Math.floor(times[i])+"____",
      Math.floor(times[i]),
      // CLOUD_X + GAP,
      CLOUD_X + GAP + FONT_GAP + (GAP * 4 + BAR_WIDTH) * i,
      // CLOUD_Y + GAP * 10 + FONT_GAP + (GAP + BAR_HEIGHT) * i
      // CLOUD_Y + GAP
      // CLOUD_Y + GAP * 24
      // ((BAR_HEIGHT * times[i]) / maxTime)
      //CLOUD_Y + GAP * 15 + TEXT_WIDTH,
      // ((BAR_HEIGHT * times[i]) / maxTime)
      // 70
      CLOUD_HEIGHT - GAP * 6  - ((BAR_HEIGHT * times[i]) / maxTime)
    );

  }

};
/*

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const FONT_GAP = 15;
const TEXT_WIDTH = 50;
const BAR_HEIGHT = CLOUD_HEIGHT - GAP * 4 - TEXT_WIDTH * 2;
const BAR_WIDTH = 50;



const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const FONT_GAP = 15;
const TEXT_WIDTH = 50;
const BAR_HEIGHT = 20;
const BAR_WIDTH = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;
*/
