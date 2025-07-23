import { IconHexagon, IconHexagonLetterV } from "@tabler/icons-react";
import { Slugs } from "../User.tsx";
import { IconCloud } from "./magicui/icon-cloud.tsx";


export function Loader() {
  const images = Slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="relative flex  items-center justify-center  px-20 py-20 pt-20 animate-[ping_1.5s_ease-in-out_1_4.3s]">
      <IconCloud images={images} />
      <IconHexagon size={100} color="#64FFDA" stroke={1.25} className="absolute -z-10 animate-[spin_5s_linear_infinite]" />
      <div className="text-5xl absolute -z-10 text-primaryColor font-semibold">V</div>
    </div>
  );
}
