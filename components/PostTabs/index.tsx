import Image from "next/image";

const PostTabs = () => {
  return (
    <div className="px-8 py-10 mx-5 w-full rounded-xl border lg:w-1/3">
      <div className="flex flex-col space-y-3">
        {/* Button collection */}
        <div className="flex justify-center space-x-3">
          <div className="flex justify-center py-2 w-1/2 text-white bg-gradient-to-r from-blue-800 to-blue-400 rounded-full">
            Popular
          </div>
          <div className="flex justify-center py-2 w-1/2 rounded-full border">
            Recent
          </div>
        </div>
        {/* Blog items */}
        <div className="flex items-center py-2 space-x-4 border-b">
          <div className="w-20 max-w-xs lg:w-24">
            <Image
              src="/img/tabs-1.jpg"
              layout="responsive"
              height={300}
              width={300}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <h5 className="font-bold text-gray-700">
              3 Easy Ways To Make Your iPhone Faster
            </h5>
            <p className="text-sm text-gray-500">29 March 2421</p>
          </div>
        </div>
        {/* Item */}
        <div className="flex items-center py-2 space-x-4 border-b">
          <div className="w-20 max-w-xs lg:w-24">
            <Image
              src="/img/tabs-2.jpg"
              layout="responsive"
              height={300}
              width={300}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <h5 className="font-bold text-gray-700">
              An Incredibly Easy Method That Works For All
            </h5>
            <p className="text-sm text-gray-500">29 March 2421</p>
          </div>
        </div>
        {/* Item */}
        <div className="flex items-center py-2 space-x-4 border-b">
          <div className="w-20 max-w-xs">
            <Image
              src="/img/tabs-3.jpg"
              layout="responsive"
              height={300}
              width={300}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <h5 className="font-bold text-gray-700">
              10 Ways To Immediately Start Selling Furniture
            </h5>
            <p className="text-sm text-gray-500">29 March 2021</p>
          </div>
        </div>
        {/* Item */}
        <div className="flex items-center py-2 space-x-4">
          <div className="w-20 max-w-xs">
            <Image
              src="/img/tabs-4.jpg"
              layout="responsive"
              height={300}
              width={300}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <h5 className="font-bold text-gray-700">
              15 Unheard Ways to Achieve Greater Walker
            </h5>
            <p className="text-sm text-gray-500">29 March 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostTabs;
