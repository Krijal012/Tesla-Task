export default function Tesla3(){
    return(
        <div className="relative">
            <img 
                src="../src/assets/tesla_3.jpg"
                alt="Tesla Picture 3"
                className="w-full h-auto"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-between text-white py-8">
                {/* Text on top */}
                <div className="flex flex-col items-center text-black font-serif">
                    <h1 className="text-6xl font-bold">Tesla Cybertruck</h1>
                    <h3 className="text-3xl mt-2">
                        <u>Offer ending September 25</u>
                    </h3>
                    <h5 className="text-xl mt-1">From $50000</h5>
                </div>
                
                {/* Buttons on bottom */}
                <div className="flex gap-4">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 cursor-pointer rounded-md font-medium transition-colors">
                        Order Now
                    </button>
                    <button className="bg-white hover:bg-gray-100 text-black px-6 py-2 cursor-pointer rounded-md font-medium transition-colors">
                        Demo Drive
                    </button>
                </div>
            </div>
        </div>
    )
}