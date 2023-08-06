const projectInfo = [
  {
    title: "SoundSauce",
    link: "tbc",
    description:
      "My BrainStation showcase project. An audio visualiser made with Three.js.",
    descriptionLong:
      "SoundSauce was the final project I produced at BrainStation. An audio visuliser that analyses sound using the web-audio API and translates that volume and frequency data to animated vectors on a chosen shape. The entire project came to life over the span of just 7 days and culminated in a presentation to BrainStation alumni and industry profesionals.",
    features: {
      "Realtime Parameter Manipulation":
        "A simplistic and stylish UI allows a user to change colour, applitude and mesh type. ",
      "Reactive Shapes": "Three dynamic, reactive shapes to choose from.",
      "Orbit Controls":
        "Dynamically change your perspective in realtime using intuative zoom and orbit controls.",
    },
    codeAvailable: true,
    gitHubLink: "https://github.com/Benjjt/sound-sauce",
    livesiteAvailable: true,
    siteLink: "https://github.com/Benjjt/sound-sauce",
    technology: [
      { name: "React", color: "#0a7ea3" },
      { name: "Three.js", color: "#1a82c3" },
      { name: "Sass", color: "#bf4080" },
    ],
  },
  {
    title: "NFT Gallery",
    link: "tbc",
    codeAvailable: false,
    livesiteAvailable: true,
    features: {
      "Attribute-Based Filtering":
        "Filters are established dynamically using the first server-side request to a custom API ",
      "Superfast Initial Load":
        "Recognising the importance of speed and efficiency, I optimised the platform's initial data loading process by utilising Next.js serverside API calls. Client side requests are also cached and used to serve other users who use the same combination of filter parameters. ",
      "Cloudflare Image Optimisation":
        "Cloudflare is used to host PFP images and deliver suitable resolutions depending on a users screen size. ",
    },
    siteLink: "https://github.com/Benjjt/sound-sauce",
    description: "Sort and Filter NFTs based on their attributes.",
    descriptionLong:
      "Anticipating the release of an NFT collection from canVERSE, procedurally generated chess sets, me and Mike Bland (backend developer for canVERSE) set about creating an efficient web app for exploring the 10,000 PFPs on offer.",

    technology: [
      { name: "Tailwind", color: "#0ba5e9" },
      { name: "Typescript", color: "#3077c6" },
      { name: "Next.js", color: "#ededed" },
    ],
  },

  {
    title: "canVERSE",
    codeAvailable: false,
    livesiteAvailable: true,
    siteLink: "https://canverse.io",
    description:
      "Web-3 Gaming website with custom auth, wallet connection, and crypto API.",
    descriptionLong: "During my time at canVERSE ",
    features: {},
    technology: [
      { name: "Tailwind", color: "#0ba5e9" },
      { name: "Typescript", color: "#3077c6" },
      { name: "Next.js", color: "#ededed" },
    ],
  },
  {
    title: "canCAT 3D Viewer",
    codeAvailable: false,
    livesiteAvailable: true,
    siteLink: "https://github.com/Benjjt/sound-sauce",
    description: "3D Model Viewer for canCATs NFT collection",
    technology: [
      { name: "Tailwind", color: "#0ba5e9" },
      { name: "Next.js", color: "#ededed" },
      { name: "Three.js", color: "#1a82c3" },
    ],
  },
  {
    title: "This Portfolio",
    codeAvailable: true,
    livesiteAvailable: true,
    siteLink: "https://benthorne.xyz",
    description: "The portfolio you are currently looking at!",
    descriptionLong:
      "Wanting full control over the way my work is presented I saw the oportunity to create a new Next.js project, giving me granular control over style, optimisation and performance. Lightweight, fast and dynamic, I utilise tailwind.css to get the project out to the world as fast as possible",
    features: {
      "Fully Responsive":
        "Taking the 'mobile first' approach allowed me to ensure I'm reaching the largest audience while still providing a consistent user experience. ",
      "CSS Animation":
        "I relish every oportunity to play with new CSS animation libraries. All animations in this site are handled using react-spring, a lightweight and intuative CSS animation library.",
    },
    technology: [
      { name: "Tailwind", color: "#0ba5e9" },
      { name: "Next.js", color: "#ededed" },
      { name: "Three.js", color: "#1a82c3" },
    ],
  },
];

export default projectInfo;
