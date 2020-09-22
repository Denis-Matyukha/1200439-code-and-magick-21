'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const FONT_GAP = 15;
const TEXT_WIDTH = 50;
const BAR_HEIGHT = CLOUD_HEIGHT - GAP * 4 - TEXT_WIDTH * 2;
const BAR_WIDTH = 45;

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
      blueShade = '';

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  blueShade = '#' +
    channelRed.toString(16) +
    channelGreen.toString(16) +
    channelBlue.toString(16);

  return blueShade;
};

const getChartColor = function(player) {
  let chartColor = "";
  if (player === 'Вы') {
    chartColor = '#ff0000';
  } else {
    chartColor = getBlueShadeHEX();
  }
  return chartColor;
};


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

  const maxTime = getMaxElement(times);

  for (let i = 0; i < players.length; i++) {

    ctx.fillText(
      players[i],
      CLOUD_X + GAP + FONT_GAP + (GAP * 4 + BAR_WIDTH) * i,
      CLOUD_Y + GAP * 24
    );

    ctx.fillStyle = getChartColor(players[i]);

    ctx.fillRect(
      CLOUD_X + GAP + FONT_GAP + (GAP * 4 + BAR_WIDTH) * i,
      CLOUD_Y + GAP * 17 + TEXT_WIDTH,
      BAR_WIDTH,
      -((BAR_HEIGHT * times[i]) / maxTime)
    );

    ctx.fillStyle = '#000';

    ctx.fillText(
      Math.floor(times[i]),
      CLOUD_X + GAP + FONT_GAP + (GAP * 4 + BAR_WIDTH) * i,
      CLOUD_HEIGHT - GAP * 6  - ((BAR_HEIGHT * times[i]) / maxTime)
    );
  };
};
