const {
  joinVoiceChannel,
  createAudioPlayer,
  createAudioResource,
  StreamType,
  AudioPlayerStatus,
  entersState,
  VoiceConnectionStatus,
} = require('@discordjs/voice');
const ytdl = require('ytdl-core');
const YouTubeSearch = require('youtube-search');
const { EmbedBuilder } = require('discord.js');
const { updateHistory } = require('./historyUtils');
const config = require('../config.json');
const youtubeAPIKey = config.youtubeAPIKey;
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { InteractionCollector } = require('discord.js');

let isPaused = false;
const youtubeSearchOptions = {
  maxResults: 1,
  key: youtubeAPIKey,
};

const queue = [];
let player;
let currentConnection; 
let currentMessage; 
function createPlayer() {
  if (!player) {
    player = createAudioPlayer();
    player.on(AudioPlayerStatus.Idle, async () => {
      await playNextSong(currentConnection, currentMessage);
    });
  }
}

module.exports = {
    name: 'بوت',
    description: 'رد تلقائي من البوت',
    execute: async (message, args) => {
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) {
            return message.reply('**لبيه عيون البوت اطلب اغنية وتدلل**');
