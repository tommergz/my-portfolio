const projects = [
  {
    id: +Date.now().toString() + 7,
    img: 'twitter',
    name: 'Twitter-like social network',
    description: `It's a full-stack project. 
    Back-end teсhnologies: Node.js, Express, MongoDB, Socket.IO. 
    Front-end technologies: React.js, JS, HTML, CSS.`,
    demoLink: 'https://tommern.netlify.app',
    githubLink: 'https://edu-gitlab.leverx-group.com/nodejs-2021-courses-hw/artsiom-lipchyk-hw-project/-/tree/my-home-work-9'
  },
  {
    id: +Date.now().toString() + 6,
    img: 'slider',
    name: 'Slider',
    description: `Only core react libraries. Just: "react", "react-dom" as dependencies + build related ones. 
    The slider supports swipes on desktop and mobile (click/tap the second from the left button in the top-left corner to turn the swipes on/off).`,
    demoLink: 'https://sliderman.netlify.app',
    githubLink: 'https://github.com/tommergz/slider/tree/slider'
  },
  { 
    id: +Date.now().toString() + 5,
    img: 'culturePortal',
    name: 'Culture Portal',
    description: 'A multilingual web portal about culture of Belarus, developed as a team project. Technologies: React.js, React Router, Bootstrap, HTML, CSS, JS.',
    demoLink: 'https://frosty-edison-e74ef2.netlify.app',
    githubLink: 'https://github.com/Egor-Alexandrovich/Culture-Portal'
  },
  { 
    id: +Date.now().toString() + 4,
    img: 'fancyWeather',
    name: 'Weather-app',
    description: `It's a weather app. Technologies: React.js, HTML, CSS, JS.`,
    demoLink: 'https://wweather-app.netlify.app',
    githubLink: 'https://github.com/tommergz/fancy-weather/tree/fancy-weather/fancy-weather'
  },
  {
    id: +Date.now().toString() + 3,
    img: 'checkers',
    name: 'Checkers app',
    description: `A fully functional checkers game.`,
    demoLink: 'https://battlech.netlify.com',
    githubLink: 'https://github.com/tommergz/checkers'
  },
  {
    id: +Date.now().toString() + 2,
    img: 'chess',
    name: 'Chess app',
    description: `A fully functional chess game.`,
    demoLink: 'https://chebattle.netlify.com',
    githubLink: 'https://github.com/tommergz/chess'
  },
  {
    id: +Date.now().toString() + 1,
    img: 'piskelClone',
    name: 'Piskel-Clone',
    description: `A simplified clone of Piskel, a web-based tool for creating animated sprites & pixel art.`,
    demoLink: 'https://tommergz.github.io/piskel-clone-app/',
    githubLink: 'https://github.com/tommergz/piskel-clone-app/tree/gh-pages'
  }
]

export default projects;
