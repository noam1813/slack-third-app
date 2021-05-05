'use strict';
const data = require('./data.json');
const words = data.slimelife;
module.exports = (robot) => {
  robot.hear(/スライム/i, (msg) => {
    const user_id = msg.message.user.id;
    const word = words[Math.floor(Math.random() * words.length)];
    msg.send(`<@${user_id}> ${word}`);
  });
};