export default function Banner() {
  return (
    <div className=" flex justify-center items-center banner-bg">
      <div>
        <h1 className="text-center text-5xl font-bold">FlavourRush</h1>
        <h3 className="text-center text-3xl my-4">
          Discover the best food & drinks in Bangladesh
        </h3>
        {/* banner text and search  */}
        <div className=" flex flex-col item-center">
          <div
            style={{
              boxShadow: "-1px 0px 9px 0px rgba(0,0,0,0.1)",
            }}
            className=" pl-5 py-5 rounded-lg flex w-full"
          >
            <input
              className="border-2 mr-4 w-[80%] pl-2 py-2 rounded border-gray-200"
              placeholder="Enter your full address"
              type="text"
            />
            <input
              className="bg-pink-600 text-white py-2 px-2 rounded"
              type="submit"
              value="Find Food"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
