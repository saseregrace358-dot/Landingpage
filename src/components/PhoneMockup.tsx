interface PhoneMockupProps {
  image: string;
}

export default function PhoneMockup({ image }: PhoneMockupProps) {
  return (
    <div className="relative mx-auto w-[220px] sm:w-[250px] lg:w-[270px]">
      {/* Phone Shadow */}
      <div className="absolute inset-0 scale-95 rounded-[42px] bg-black/20 blur-xl"></div>

      {/* Phone Body */}
      <div className="relative rounded-[42px] bg-black p-[10px] shadow-2xl">
        {/* Dynamic Island */}
        <div className="absolute left-1/2 top-3 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-black"></div>

        {/* Screen */}
        <div className="relative h-[460px] overflow-hidden rounded-[34px] bg-white">
          <img
            src={image}
            alt="DGTrack POS"
            className="h-full w-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}