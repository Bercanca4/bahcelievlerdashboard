import BahvelievlerImage from "/Users/bercan/Desktop/Bercan Yazılım/dashboard/dashboard/src/assets/bahvelievler.png";
export default function Logo() {
  return (
    <div className="flex items-center justify-center gap-x-4">
      <img
        src={BahvelievlerImage}
        alt="logo"
        className="w-[50px] h-[50px] rounded-full shadow-2xl select-none hover:scale-105 hover:duration transition-all duration-700  border-white border-2  "
      />
      <label className=" text-[32px] font-serif select-none text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
        <i> Bi Destek</i>{" "}
      </label>
    </div>
  );
}
