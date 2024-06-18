import Image from "next/image";
import ColoredDots from "./ColoredDots";

function Hero() {
  return (
    <section className="text-black bg-[url('/hero@2x.png')] bg-no-repeat bg-cover h-screen z-0">
      <p className=" uppercase text-[150px] text-center leading-[1] h-[556px] mx-[17%] pt-[375px] font-['NeueHaasDisplayRoman'] z-40">
        Iconic printing <br />
        brought one
        <br /> step closer!
      </p>
      <ColoredDots
        color="#27B4F1"
        style={{
          top: "240px",
          left: "746px",
        }}
      />
      <ColoredDots
        color="#EF3A97"
        style={{
          top: "240px",
          left: "820px",
        }}
      />
      <ColoredDots
        color="#F9EF1B"
        style={{
          top: "240px",
          left: "900px",
        }}
      />
      <ColoredDots
        color="#000000"
        style={{
          top: "240px",
          left: "986px",
        }}
      />

      <div className="absolute top-[206px] left-[248px] z-10">
        <Image src="/Gray_Bag@2x.png" alt="Gray Bag" width={446} height={370} />
      </div>
      <div className="absolute top-[142px] left-[1325px] z-10">
        <Image
          src="/Gray_Booklet@2x.png"
          alt="Gray Booklet"
          width={377}
          height={344}
        />
      </div>
      <div className="absolute top-[548px] left-[138px] z-10">
        <Image
          src="/Gray_Sheets@2x.png"
          alt="Gray Sheets"
          width={337}
          height={379}
        />
      </div>
      <div className="absolute top-[737px] left-[809px] z-10">
        <Image
          src="/Gray_FoldedSheet@2x.png"
          alt="Gray Folded Sheet"
          width={377}
          height={309}
        />
      </div>
      <div className="absolute top-[240px] left-[1060px] z-10 ">
        <Image src="/Gray_Box@2x.png" alt="Gray Box" width={268} height={280} />
      </div>
    </section>
  );
}

export default Hero;
