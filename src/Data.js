import { FaHtml5, FaCss3, FaJava, FaReact, FaSass, FaFigma, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { BsMedium } from "react-icons/bs";
// import portfolio from "./assets/portfolio.jpg"
import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"]

export const socialIcons = [
  <FaGithub />,
  <FaInstagram />,
  <FaLinkedin />,
  <BsMedium />
]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Saurabh"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "9123486054"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "saurabhsp317@gmail.com"
  }
]

export const icons = [<FaHtml5 />, <FaCss3 />, <DiJavascript />, <SiTypescript />, <FaReact />, <FaJava />, <FaSass />, <FaFigma />]

export const experiences = [
  {
    id: 1,
    year: "2022",
    position: "Learning Web Developement",
    company: "codingNinjas"
  },
  {
    di: 2,
    year: "2022",
    position: "Started Web Development",
  
  },
  {
    id: 3,
    year: "2021",
    position: "Started My Coding journey",
  
  }
]
export const finishes = [
  {
    id: 1,
    number: '1+',
    itemName: "Years Of Self-Learning"
  },
  {
    id: 2,
    number: "10+",
    itemName: "Mini projects"
  },
  {
    id: 3,
    number: "3+",
    itemName: "Major Projects"
  },

]
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "web",
    git:"https://github.com/saurabh317/TRACy-CRYPTO-APP",
    liveDemo:"",

  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "web",
    git:"local2",
    liveDemo:"",
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "web",
    git:"https://github.com/saurabh317/OMNI__FOOD-FRONT-END-",
    liveDemo:"",
  },
  {
    id: 4,
    img: work4,
    name: "project 4",
    category: "app",
    git:"https://github.com/saurabh317/MUSIC__PLAYER-FRONT-END",
    liveDemo:"",
  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    category: 'app',
    git:"https://github.com/saurabh317/SUPER-HERO-JAVASCRIPT",
    liveDemo:"",
  },
  {
    id: 6,
    img: work6,
    name: "project 6",
    category: "design",
    git:"https://github.com/saurabh317/REACT-PRACTICE-7-TODO-LIST",
    liveDemo:"",
  }
]


export const workNavs = [
  // "All", "Web", "Design"
]

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Bangalore, Karnataka"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "saurabhsp317@gmail.com"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "9123486054"
  }
]
