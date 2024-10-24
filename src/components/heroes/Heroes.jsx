import { HeroItems, SceneItems } from "../../constants/constants";
import { Button } from "../button/Button";
import { SearchForm } from "../searchForm/SearchForm";

export const Heroes = () => {
  return (
    <div className="-z-10">
      {HeroItems.map((item) => (
        <div key={item.id} className="relative">
          <img src={item.image} alt={item.title} className="w-full h-screen" />
          <div className="flex">
            <div className="absolute top-[36%] lg:left-[21%] 2xl:left-[18%] lg:pl-4 sm:pl-28 w-[500px] transform -translate-x-1/2 text-white">
              <h1 className="text-[32px] font-bold text-white">
                {item.subtitle}
              </h1>
              <h2 className="text-[14px] font-regular text-[#9CA4AB]">
                {item.service}
              </h2>
              <div className="flex items-center justify-start gap-6 mt-6">
                <Button variant="bg-btnSecondary w-[200px] h-[45px]">
                  Show Package
                </Button>
                <Button variant="bg-transparent border border-white w-[200px] h-[45px]">
                  Get Started
                </Button>
              </div>
              <div className="mt-8">
                <h3 className="text-[14px] text-[#9CA4AB] mb-4">
                  HI Welcome, Search your favorite movies in here
                </h3>
                <SearchForm />
              </div>
            </div>
            <div className="absolute flex gap-5 lg:top-[69%] 2xl:top-[65%] right-[0%] overflow-x-hidden">
              {SceneItems.map((scene) => (
                <img key={scene.id} src={scene.img} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
