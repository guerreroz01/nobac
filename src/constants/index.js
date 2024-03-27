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
    videoDuration: 5,
  },
  {
    id: 2,
    textLists: [
      "Magnet design fácil de usar",
      "puedes colgar tu cepillo",
      "para secar y esterilizar",
    ],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: ["Recargable USB", "2 horas de carga = ", "1 mes de uso"],
    video: highlightThirdVideo,
    videoDuration: 5,
  },
  {
    id: 4,
    textLists: ["Fácil de transportar", "para tus viajes o el ", "uso diario"],
    video: highlightFourthVideo,
    videoDuration: 5,
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
    color: ["#FFA4E8", "#ffffff", "#C9C8C2"],
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
