import Image from "next/image";
import { Movie } from "../typings";

interface Props {
  netFlixOriginals: Movie[];
}

function Banner({ netFlixOriginals }: Props) {
  return (
    <div>
      <div>
        <Image src={""} alt={""} />
      </div>
    </div>
  );
}

export default Banner;
