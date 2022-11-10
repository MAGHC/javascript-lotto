const GAME_PROGRESS_MESSAGES = Object.freeze({}); //[ERROR] 로시작해야함

const ERROR_MESSAGES = Object.freeze({});

const WINNING_NUMBER_UNITS = Object.freeze({
  FIRST_PLACE: "6개",
  SECOND_PLACE: "5개+ 보너스 볼",
  THIRD_PLACE: "5개",
  FOURTH_PLACE: "4개",
  FIFTH_PLACE: "3개",
});

const WINNING_AMOUNT_UNITS = Object.freeze({
  FIRST_PLACE: 2000000000,
  SECOND_PLACE: 30000000,
  THIRD_PLACE: 1500000,
  FOURTH_PLACE: 50000,
  FIFTH_PLACE: 5000,
});

module.exports = { WINNING_AMOUNT_UNITS, WINNING_NUMBER_UNITS, ERROR_MESSAGES };
