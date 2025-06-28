import logo from "../src/assets/Logo.svg";
import menu from "../src/assets/menu.svg"
export default function Navbar() {
  return (
    <div className="h-full flex items-center justify-between py-4">
      <div className=" h-full flex items-center">
        <img src={logo} className="h-8" />
        <p className="font-primary font-bold text-md ml-3">Mug Muse</p>
      </div>

      <div className="flex items-center ">
        <ul className="hidden md:flex space-x-8 font-secondary text-darkBrown text-sm">
          <li className="hover:text-accentBeige cursor-pointer">Home</li>
          <li className="hover:text-accentBeige cursor-pointer">About</li>
          <li className="hover:text-accentBeige cursor-pointer">Menu</li>
          <li className="hover:text-accentBeige cursor-pointer">Contact</li>
        </ul>

        <div className="bg-darkBrown rounded-full px-2 py-1.5 ml-5">
          <p className="text-white font-semibold font-primary text-sm">Buy a Coffee</p>
        </div>
      </div>
      <div className="h-full md:hidden">
        <img src={menu} />
      </div>
    </div>
  );
}
