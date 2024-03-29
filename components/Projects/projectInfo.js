//screenshots
import soundsauce from "../../public/images/projects/soundsauce/ssScreenshot.jpg";
import portfolio from "../../public/images/projects/portfolio/portfolioScreen.jpg";
import canverse from "../../public/images/projects/canverse/canverseScreen.jpg";
import NFTGalley from "../../public/images/projects/NFTGallery/NFTGallery.jpg";
import pps from "../../public/images/projects/pps/screenshot.jpg";

//project logos
import ssLogo from "../../public/images/projects/soundsauce/ssLogo.svg";
import portfolioLogo from "../../public/images/projects/portfolio/portfolioLogo.png";
import canverselogo from "../../public/images/projects/canverse/canverselogo.png";
import ppsLogo from "../../public/images/projects/pps/lightLogo.png";

//tech logos
import tailwindLogo from "../../public/images/logos/tailwindLogo.png";
import nextLogo from "../../public/images/logos/nextjs-icon.png";
import threeLogo from "../../public/images/logos/threejsLogo.png";
import reactlogo from "../../public/images/logos/reactLogo.png";
import sassLogo from "../../public/images/logos/Sass_logo.png";
import typescriptLogo from "../../public/images/logos/tsLogo.png";

const projectInfo = [
  {
    title: "PPS For Business",
    projectLogo: ppsLogo,
    projectID: "pps",
    codeAvailable: false,
    livesiteAvailable: true,
    screenshot: pps,
    gitHubLink: "",
    siteLink: "https://ppsforbusiness.com",
    description: "A marketing website for a B2B energy saving business.",
    descriptionLong:
      "After an initial assessment into the prexisiting website, recent business growth and the need for more advanced features, I redesigned and coded the website for PPS. ",
    features: {
      "Logo Design":
        "Taking the 'mobile first' approach allowed me to ensure I'm reaching the largest audience while still providing a consistent user experience. ",
      "GSAP Animation":
        "I relish every oportunity to play with new CSS animation libraries. All animations in this site are handled using react-spring, a lightweight and intuative CSS animation library.",
    },
    technology: [
      { name: "Tailwind", color: "#0ba5e9", logo: tailwindLogo },
      { name: "Next.js", color: "#ededed", logo: nextLogo },
      { name: "Typescript", color: "#3077c6", logo: typescriptLogo },
    ],
  },
  {
    title: "My Portfolio",
    projectLogo: portfolioLogo,

    projectID: "portfolio",
    codeAvailable: true,
    livesiteAvailable: true,
    screenshot: portfolio,
    gitHubLink: "https://github.com/Benjjt/New-Portfolio",
    siteLink: "https://benthorne.xyz",
    description: "A portfolio of my complete and ongoing work.",
    descriptionLong:
      "Wanting full control over the way my work is presented I saw the oportunity to create a new Next.js project, giving me granular control over style, optimisation and performance. Lightweight, fast and dynamic, I utilise tailwind.css to get the project out to the world as fast as possible",
    features: {
      "Fully Responsive":
        "Taking the 'mobile first' approach allowed me to ensure I'm reaching the largest audience while still providing a consistent user experience. ",
      "CSS Animation":
        "I relish every oportunity to play with new CSS animation libraries. All animations in this site are handled using react-spring, a lightweight and intuative CSS animation library.",
      "Custom Three.js Render":
        "Using the skills I acquired during my time at canVERSE I've rendered full interactive shapes and gltf files for a user to interact with.",
    },
    technology: [
      { name: "Tailwind", color: "#0ba5e9", logo: tailwindLogo },
      { name: "Next.js", color: "#ededed", logo: nextLogo },
      { name: "Three.js", color: "#1a82c3", logo: threeLogo },
    ],
  },
  {
    title: "canVERSE",
    projectID: "canVERSE",
    projectLogo: canverselogo,
    codeAvailable: false,
    livesiteAvailable: true,
    screenshot: canverse,
    siteLink: "https://canverse.io",
    description:
      "Web-3 Gaming website with custom auth, wallet connection, and crypto API.",
    descriptionLong:
      "My initial task at canVERSE was to replace the prexisting wordpress site with a custom Next.js soloution that would allow us to build custom web-3 tools from the ground up. During my time at canVERSE the site grew to include custom Next.js authentication using web-3 packages such as WAGMI, that allowed users to interact with their NFTs and use them as in-game assets. ",
    features: {
      "Custom Authentication":
        "Building ontop on Next Auth we were able to create a custom authentication provider using prexisting wallet authentication systems such as MetaMask and WalletConnect.",
      "API Intergration":
        "The Next app comunicates restfully with both a Fast API and a Flask API for both user authentication and user actions.",
      "Project Partnerships":
        "By authenticating the ownership of NFTs belonging to specific projects, a user can access exclusive in-game content from canVERSE partners.",
    },
    technology: [
      { name: "Tailwind", color: "#0ba5e9", logo: tailwindLogo },
      { name: "Typescript", color: "#3077c6", logo: typescriptLogo },
      { name: "Next.js", color: "#ededed", logo: nextLogo },
    ],
  },
  {
    title: "NFT Gallery",
    projectID: "NFTGallery",
    screenshot: NFTGalley,
    link: "tbc",
    codeAvailable: false,
    livesiteAvailable: true,
    siteLink: "https://gallery.canverse.io/",
    features: {
      "Attribute-Based Filtering":
        "Filters are established dynamically using the first server-side request to a custom API ",
      "Superfast Initial Load":
        "Recognising the importance of speed and efficiency, I optimised the platform's initial data loading process by utilising Next.js serverside API calls. Client side requests are also cached and used to serve other users who use the same combination of filter parameters. ",
      "Cloudflare Image Optimisation":
        "Cloudflare is used to host PFP images and deliver suitable resolutions depending on a users screen size. ",
    },
    description: "Sort and Filter NFTs based on their attributes.",
    descriptionLong:
      "Anticipating the release of an NFT collection from canVERSE, procedurally generated chess sets, me and Mike Bland (backend developer for canVERSE) set about creating an efficient web app for exploring the 10,000 PFPs on offer.",

    technology: [
      { name: "Tailwind", color: "#0ba5e9", logo: tailwindLogo },
      { name: "Typescript", color: "#3077c6", logo: typescriptLogo },
      { name: "Next.js", color: "#ededed", logo: nextLogo },
    ],
  },
  {
    title: "SoundSauce",
    projectLogo: ssLogo,
    projectID: "SoundSauce",
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
    screenshot: soundsauce,
    codeAvailable: true,
    gitHubLink: "https://github.com/Benjjt/sound-sauce",
    livesiteAvailable: false,
    siteLink: "https://github.com/Benjjt/sound-sauce",
    technology: [
      { name: "React", color: "#0a7ea3", logo: reactlogo },
      { name: "Three.js", color: "#1a82c3", logo: threeLogo },
      { name: "Sass", color: "#bf4080", logo: sassLogo },
    ],
  },

  // {
  //   title: "canCAT 3D Viewer",
  //   projectID: "canCATViewer",
  //   codeAvailable: false,
  //   livesiteAvailable: false,
  //   siteLink: "https://github.com/Benjjt/sound-sauce",
  //   description: "3D Model Viewer for canCATs NFT collection",
  //   technology: [
  //     { name: "Tailwind", color: "#0ba5e9", logo: tailwindLogo },
  //     { name: "Next.js", color: "#ededed", logo: nextLogo },
  //     { name: "Three.js", color: "#1a82c3", logo: threeLogo },
  //   ],
  // },
];

export default projectInfo;
