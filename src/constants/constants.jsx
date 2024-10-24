// IMPORT IMAGE
import hero from "../assets/hero.jpg";
import scene1 from "../assets/scene1.jpg";
import scene2 from "../assets/scene2.jpg";
import scene3 from "../assets/scene3.jpg";

// movie image
import chanta from "../assets/chanta.jpg";
import last from "../assets/last.jpg";
import idiots from "../assets/3idiots.jpg";
import onepiece from "../assets/onepiece.jpg";
import us from "../assets/us.jpg";

// icon sosmed
import fb from "../assets/Facebook Icon.svg";
import linkedin from "../assets/Linkedin Icon.svg";
import twitter from "../assets/Twitter Icon.svg";

export const NavbarItems = [
  {
    id: 1,
    label: "Home",
    link: "/",
  },
  {
    id: 2,
    label: "Movie",
    link: "/movie",
  },
  {
    id: 3,
    label: "Comingsoon",
    link: "/comingsoon",
  },
  {
    id: 4,
    label: "Contact Us",
    link: "/contact",
  },
];

export const HeroItems = [
  {
    id: 1,
    image: hero,
    title: "Movie",
    subtitle: "Come Watch Various Streaming & Thiller Movies and Many others",
    service:
      "Enjoy the various services we provide for streaming movies & watching thillers and you can also get others at a very cheap price",
  },
];

export const SceneItems = [
  {
    id: 1,
    img: scene1,
  },
  {
    id: 2,
    img: scene2,
  },
  {
    id: 3,
    img: scene3,
  },
];

export const movieItems = [
  {
    id: 1,
    img: chanta,
    title: "Dil Chahta Hai",
    year: "2001",
    rating: 4.5,
    genre: "Drama, Romance",
    director: "Farhan Akhtar",
    storyline: "The story revolves around three close friends and their journey through life and love."
  },
  {
    id: 2,
    img: last,
    title: "Last Of Us",
    year: "2023",
    rating: 3,
    genre: "Action, Drama",
    director: "Craig Mazin, Neil Druckmann",
    storyline: "In a post-apocalyptic world, a smuggler is tasked with transporting a teenage girl who may hold the key to humanity's survival."
  },
  {
    id: 3,
    img: idiots,
    title: "3 Idiots",
    year: "2009",
    rating: 4,
    genre: "Comedy, Drama",
    director: "Rajkumar Hirani",
    storyline: "Three engineering students navigate the pressures of academic life while seeking their true passions."
  },
  {
    id: 4,
    img: onepiece,
    title: "One Piece",
    year: "2008",
    rating: 4.6,
    genre: "Action, Adventure",
    director: "Eiichiro Oda",
    storyline: "Follow the adventures of Monkey D. Luffy and his crew as they search for the legendary One Piece treasure."
  },
  {
    id: 5,
    img: us,
    title: "Remember Us",
    year: "2019",
    rating: 4.5,
    genre: "Drama, Thriller",
    director: "J. P. Dutta",
    storyline: "A couple struggles to cope with the loss of their child and must confront their haunting memories."
  },
];


export const iconItems = [
  {
    id: 1,
    img: fb,
  },
  {
    id: 2,
    img: linkedin,
  },
  {
    id: 3,
    img: twitter,
  },
];
