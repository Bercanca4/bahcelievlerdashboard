import { Link } from "react-router-dom";
export default function Logo() {
  return (
    <Link
      to="/"
      className="flex items-ceneter justify-center text-white text-[20px] py-2  gap-x-2">
      <label className="  text-white   ">
        <i> Bahçelievler Belediyesi</i>{" "}
        <span className=" text-[18px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
          +1
        </span>
      </label>
    </Link>
  );
}
