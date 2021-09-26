import Image from "next/image";
import Container from "@/components/Container";

const Home: React.FC = () => {
  return (
    <Container>
      <section className="py-5 flex space-x-5">
        <div className="w-2/3 h-80 border rounded-xl"></div>
        <div className="w-1/3 border rounded-xl px-10 py-5">
          <div className="flex flex-col space-y-3">
            {/* Button collection */}
            <div className="flex justify-center space-x-3">
              <div className="bg-gradient-to-r from-blue-800 to-blue-400 px-10 py-2 rounded-full text-white">
                Popular
              </div>
              <div className="px-10 py-2 border rounded-full">Recent</div>
            </div>
            {/* Blog items */}
            <div className="flex space-x-4 py-2 border-b">
              <div className="w-1/3 max-w-xs">
                <Image
                  src="/img/tabs-1.jpg"
                  layout="responsive"
                  height={300}
                  width={300}
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <h5 className="text-gray-700 font-bold">
                  3 Easy Ways To Make Your iPhone Faster
                </h5>
                <p className="text-gray-500 text-sm">29 March 2021</p>
              </div>
            </div>
            {/* Item */}
            <div className="flex space-x-4 py-2 border-b">
              <div className="w-1/3 max-w-xs">
                <Image
                  src="/img/tabs-2.jpg"
                  layout="responsive"
                  height={300}
                  width={300}
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <h5 className="text-gray-700 font-bold">
                  An Incredibly Easy Method That Works For All
                </h5>
                <p className="text-gray-500 text-sm">29 March 2021</p>
              </div>
            </div>
            {/* Item */}
            <div className="flex space-x-4 py-2 border-b">
              <div className="w-1/3 max-w-xs">
                <Image
                  src="/img/tabs-3.jpg"
                  layout="responsive"
                  height={300}
                  width={300}
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <h5 className="text-gray-700 font-bold">
                  10 Ways To Immediately Start Selling Furniture
                </h5>
                <p className="text-gray-500 text-sm">29 March 2021</p>
              </div>
            </div>
            {/* Item */}
            <div className="flex space-x-4 py-2">
              <div className="w-1/3 max-w-xs">
                <Image
                  src="/img/tabs-4.jpg"
                  layout="responsive"
                  height={300}
                  width={300}
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <h5 className="text-gray-700 font-bold">
                  15 Unheard Ways to Achieve Greater Walker
                </h5>
                <p className="text-gray-500 text-sm">29 March 2021</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};
export default Home;
