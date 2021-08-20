const { Plugin } = require('powercord/entities');
const { React, getModule } = require('powercord/webpack');
const { inject, uninject } = require('powercord/injector');

module.exports = class PowerSave extends Plugin {
  async startPlugin () {
    console.log('hi');
  }
};
