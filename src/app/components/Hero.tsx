const Hero = () => {
    return (
        <div className="relative flex flex-col items-center text-center py-20">
            <p className="font-bold text-blue-600">  Welcome </p>
            <h1 className="font-bold text-white text-6xl leading-tight mt-2">
                Serving with Pride<br/>to Educate the Nation
            </h1>
            <p className="text-white text-lg mt-4">
                We know how large objects will act, but things on a small scale just do not act that way.
            </p>

            <div className="flex items-center justify-center mt-8 gap-4">
                <button className="w-48 p-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition duration-200">
                    Get Offer Now
                </button>
                <button className="w-36 p-4 border border-blue-500 text-blue-500 font-bold rounded-md">
                    Learn More
                </button>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-6">

                <div className="bg-white p-6 rounded-lg shadow-lg w-[328px]">
                    <div className="h-16 w-16 bg-pink-200 rounded mb-4"></div>
                    <h2 className="text-xl font-bold text-gray-800">Training Courses</h2>
                    <p className="text-gray-600 mt-2">
                        The progressive gathering of data on Atomic and Microscopic behaviour...
                    </p>
                </div>



                <div className="bg-white p-6 rounded-lg shadow-lg w-[328px]">
                    <div className="h-16 w-16 bg-green-300 rounded mb-4"></div>
                    <h2 className="text-xl font-bold text-gray-800">More than 1,000 Online Courses</h2>
                    <p className="text-gray-600 mt-2">
                       The progressive gathering of data on Atomic and Microscopic behaviour...
                    </p>
                </div>
                
                

                <div className="bg-blue-500 p-6 rounded-lg shadow-lg w-[328px]">
                    <div className="h-16 w-16 bg-white rounded mb-4"></div>
                    <h2 className="text-xl font-bold text-white">  More training Courses</h2>
                    <p className="text-white mt-2">
                        The progressive gathering of data on Atomic and Microscopic behaviour...
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;