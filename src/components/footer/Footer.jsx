import { NavbarItems, iconItems } from "../../constants/constants";

export const Footer = () => {
  return (
    <div className="mt-20 mb-5">
      <div className="flex justify-evenly">
        <div>
          <h1 className="text-xl font-bold">NAVIGATION</h1>
          <ul className="mt-5">
            {NavbarItems.map((item) => (
              <li
                key={item.label}
                className="text-base text-[#9CA4AB] hover:text-white mb-3 font-normal cursor-pointer"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-bold">LEGAL</h1>
          <ul className="mt-5">
            {NavbarItems.map((item) => (
              <li
                key={item.label}
                className="text-base text-[#9CA4AB] hover:text-white mb-3 font-normal cursor-pointer"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-bold">TALK TO US</h1>
          <div className="mt-3">
            <p className="text-base text-[#9CA4AB] hover:text-white mb-3 font-normal cursor-pointer">
              support@gmail.com
            </p>
            <p className="text-base text-[#9CA4AB] hover:text-white mb-3 font-normal cursor-pointer">
              +62 878 8888 888
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold">FOLLOW US</h1>
          <div className="mt-3 gap-2 flex justify-center items-center">
            {iconItems.map((item) => (
              <img key={item.id} src={item.img} alt={item.label} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <p className="text-base text-[#9CA4AB] font-normal hover:text-white cursor-pointer">
          Copyright 2022. All Rights Reserved
        </p>
      </div>
    </div>
  );
};
