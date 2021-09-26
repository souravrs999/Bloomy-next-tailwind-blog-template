import Image from "next/image";

const FeaturedPostLarge = () => {
  return (
    <div className="w-full rounded-xl lg:w-2/3">
      <div className="overflow-hidden relative rounded-xl featured-lg-div">
        <div className="absolute bottom-0 z-20 p-5 w-full md:p-10">
          <div className="flex flex-col space-y-3 md:space-y-5">
            <span className="px-4 py-1 w-24 text-xs text-center text-white bg-gradient-to-r from-blue-800 to-blue-400 rounded-full">
              Inspiration
            </span>
            <h3 className="text-xl font-bold text-white sm:text-3xl">
              5 Easy Ways You Can Turn Future Into Success
            </h3>
            <div className="flex space-x-3 text-xs text-white opacity-70 sm:text-sm">
              <p>Katen Doe</p>
              <p>29 March 2021</p>
            </div>
          </div>
        </div>
        <div className="absolute z-10 w-full h-full bg-gray-900 opacity-70"></div>
        <Image
          src="/img/featured-lg.jpg"
          width={750}
          height={540}
          layout="responsive"
          className="absolute transition-all duration-500 ease-in-out featured-lg-img"
        />
      </div>
    </div>
  );
};
export default FeaturedPostLarge;
