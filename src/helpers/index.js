// resmi buluta yukler ve urli dondurur

import axios from "axios";

export const upload = async (file) => {
  // form verisiini belirle

  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "flowimage");

  // buluta resmi yukle
  const res = await axios.post(
    "https://api.cloudinary.com/v1_1/dutzkb1qo/image/upload",
    data
  );

  //   resmin url dondur

  return res.data.url;
};
