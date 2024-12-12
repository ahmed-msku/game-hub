import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "476e8157ffeb43c097e8bab83762b9bf",
  },
});
