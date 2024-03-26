import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  nobacCloseImg,
  nobacOpenImg,
  whiteImg,
  yellowImg,
} from "../utils";

export const navLists = ["Store", "Conocenos", "Políticas", "Contacto"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "99,9% de esterilización",
      "con tan sólo 3 minutos",
      "UV tipo C",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Titanium.", "So strong. So light. So Pro."],
    video: highlightSecondVideo,
    videoDuration: 4,
  },
  {
    id: 3,
    textLists: [
      "iPhone 15 Pro Max has the",
      "longest optical zoom in",
      "iPhone ever. Far out.",
    ],
    video: highlightThirdVideo,
    videoDuration: 4,
  },
  {
    id: 4,
    textLists: ["All-new Action button.", "What will yours do?."],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export const models = [
  {
    id: 1,
    title: "Nobac Natural",
    color: ["#F0F0F0", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "Nobac Color Black",
    color: ["#494949", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "Nobac Color Pink",
    color: ["#FF6AD2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "Nobac Color Blue",
    color: ["#08E1FF", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: "C", value: "small", image: nobacCloseImg },
  { label: "O", value: "large", image: nobacOpenImg },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];
