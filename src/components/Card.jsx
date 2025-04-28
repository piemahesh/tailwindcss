export const Card = () => {
  return (
    <div className="h-[450px]  transition-all duration-300 scale-[0.9] hover:scale-[1]  rounded-md shadow-white shadow-md  w-[300px] bg-white">
      {/* first block */}
      <div className="bg-neutral-100 rounded-md h-1/2  relative p-4 flex flex-col items-center">
        <div className="h-32 w-32  rounded-full">
          <img
            className="h-full w-full object-cover"
            src="https://sm.ign.com/ign_pk/cover/a/avatar-gen/avatar-generations_rpge.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-semibold">Avatar Blue Boy</h1>
          <h2 className="text-gray-500">@avatar</h2>
          <p className="text-gray-500">avatar designer</p>
        </div>
        <div className="h-10 absolute -right-6 bottom-[30%] w-10 flex text-white items-center justify-center text-2xl bg-red-400 rounded-full">
          +
        </div>
      </div>
      {/* second block */}
      <div className="flex flex-col items-center  h-1/2 justify-between p-2">
        <div className="flex items-center w-full justify-between p-2">
          <div className="flex flex-col items-center text-xs">
            <h1 className="font-black">17</h1>
            <p className="text-gray-500">SHOTS</p>
          </div>
          <div className="flex flex-col items-center text-xs">
            <h1 className="font-black">17</h1>
            <p className="text-gray-500">SHOTS</p>
          </div>
          <div className="flex flex-col items-center text-xs">
            <h1 className="font-black">17</h1>
            <p className="text-gray-500">SHOTS</p>
          </div>
        </div>

        <button className="bg-teal-300 text-white py-2 w-full max-w-[180px] rounded-full">
          send message
        </button>

        <p>More ^</p>
      </div>
    </div>
  );
};
