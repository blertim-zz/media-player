import { v4 as uuidv4 } from "uuid";
import earth from "./image/earth.jpg";
import planetEarth from "./image/planet.jpg";
import apokolips from "./image/apokolips.jpg";
import aurora from "./image/aurora.jpg";

function chillHop() {
  return [
    {
      name: "Home Court",
      cover: earth,
      artist: "Earth",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12128",
      color: ["#9b9595"],
      id: uuidv4(),
      active: true,
    },

    {
      name: "Peaches",
      cover: aurora,
      artist: "Aurora",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=13005",
      color: ["#9b9595"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Lilo",
      cover: apokolips,
      artist: "Apokalips",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9335",
      color: ["#9b9595"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Toofpick",
      cover: planetEarth,
      artist: "Planet Earth",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11778",
      color: ["#9b9595"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
