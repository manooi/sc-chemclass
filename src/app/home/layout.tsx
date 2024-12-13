import Image from "next/image";
import chemPic from "../../../public/image/logo.png";

export default function Layout({ children }: { children: React.ReactNode }) {
    const imageStyle: React.CSSProperties = {
      position: "absolute",
      right: "30%",
      bottom: "10%",
      width: "30%",
      // transform: 'translate(60%, 0)'
    };
    

  return (
    <div className="flex h-[100dvh] relative">
      <div className="grow"></div>
      <div className="hidden md:block bg-white grow "></div>
      <Image
        className="hidden md:block absolute"
        src={chemPic}
        alt="Picture of the author"
        style={imageStyle}
      />
      <div className="absolute left-0 top-0 h-[100dvh] w-screen">
        {children}
      </div>
    </div>
  );
}
