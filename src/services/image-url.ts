import NoImage from "../assets/no-image-placeholder-6f3882e0.webp";

const getCroppedImageUrl = (url: string) => {
  if (!url) return NoImage;

  return url.replace("media/", "media/crop/600/400/");
};

export default getCroppedImageUrl;
