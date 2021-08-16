// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'JinHeon',
  imageBackground: true,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep!',

  // Weather
  weatherKey: '0f3ff5f94b4fe9da8299ed0604df27b9',
  weatherIcons: 'Nord', // 'Nord', 'Dark', 'White' 'OneDark'
  weatherUnit: 'C',
  weatherLatitude: '37.774929',
  weatherLongitude: '-122.419418',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.google.com/mail/u/0/#inbox',
    },
    {
      id: '3',
      name: 'Todoist',
      icon: 'trello',
      link: 'https://calendar.google.com/calendar/r',
    },
    {
      id: '4',
      name: 'Calendar',
      icon: 'calendar',
      link: 'https://calendar.google.com/calendar/r',
    },
    {
      id: '5',
      name: 'Raindrop',
      icon: 'bookmark',
      link: 'https://app.raindrop.io/my/0',
    },
    {
      id: '6',
      name: 'Youtube',
      icon: 'youtube',
      link: 'https://www.youtube.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'music',
  secondListIcon: 'coffee',

  // Links
  lists: {
    firstList: [
      {
        name: 'Inspirational',
        link: 'https://youtu.be/Ah392lnFHxM', // Glenn Gould
      },
      {
        name: 'City Pop',
        link: 'https://youtu.be/ebZup1TKzc8', //city pop
      },
      {
        name: 'Classic',
        link: 'https://youtu.be/-gDinVAmtA0', //nocturne
      },
      {
        name: 'Lofi',
        link: 'https://youtu.be/5qap5aO4i9A', // lofi
      },
      {
        name: 'Jazz',
        link: 'https://youtu.be/_sI_Ps7JSEk', // jazzbar
      },
    ],
    secondList: [
      {
        name: 'Linkedin',
        link: 'https://linkedin.com/',
      },
      {
        name: 'Google',
        link: 'https://google.com/',
      },
      {
        name: 'Naver',
        link: 'https://naver.com',
      },
      {
        name: 'Notion',
        link: 'https://www.notion.so/2d0ba5dea6cc49b69ad68a18efd30fe5?v=d7bdc3587696422b8d6918f458db7a8c',
      },
      {
        name: 'Baekjoon',
        link: 'https://www.acmicpc.net/',
      },
    ],
  },
};
