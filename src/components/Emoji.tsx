import bullEye from "../assets/bulls-eye.webp";
import thumbUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", title: "meh", boxSize: "16px" },
    4: {
      src: thumbUp,
      alt: "recommended",
      title: "recommended",
      boxSize: "16px",
    },
    5: {
      src: bullEye,
      alt: "exceptional",
      title: "exceptional",
      boxSize: "20px",
    },
  };

  return <Image {...emojiMap[rating]} />;
};

export default Emoji;
