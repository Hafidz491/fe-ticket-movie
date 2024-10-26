import dramatic from "../../assets/dramatic.svg";
import { NavbarItems } from "../../constants/constants";
import { Button } from "../button/Button";
import { Link } from "react-router-dom";
import { useAuth } from "../../components/auth/authContext"; // Pastikan path sesuai

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth(); // Mengambil status autentikasi

  return (
    <div className="absolute top-0 left-0 z-10 flex items-center justify-between w-full px-10 py-4 navbar">
      <div>
        <img src={dramatic} alt="logo" />
      </div>
      <div className="flex items-center justify-center gap-7">
        {NavbarItems.map((item) => (
          <Link
            key={item.label}
            to={item.link}  
            className="text-base font-normal cursor-pointer"
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-5">
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-100 rounded-md px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
        <svg
          xmlns ="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
        </svg>
      </div>
      <div>
        {!isAuthenticated ? (
          <Link to="/login">
            <Button variant="bg-[#FFA500] w-[100px] h-[40px]">Login</Button>
          </Link>
        ) : (
          <>
            <Link to="/profile">
                  <img 
                    src="path_to_your_image.png" // Ganti dengan path gambar Anda
                    alt="Profile"
                    className="w-[40px] h-[40px] cursor-pointer" // Sesuaikan ukuran gambar
                  />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
