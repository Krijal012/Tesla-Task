export default function Navbar(){
    return(
        <div className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-white shadow-md">
            <img 
                src="../src/assets/logo.png" 
                alt="Tesla Logo" 
                className="h-8 w-auto"
            />
            <div className="flex gap-8">
                <a href="#vehicle" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                    Vehicle
                </a>
                <a href="#energy" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                    Energy
                </a>
                <a href="#charge" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                    Charge
                </a>
                <a href="#discover" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                    Discover
                </a>
                <a href="#shop" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                    Shop
                </a>
            </div>
            <div className="flex gap-4 items-center">
                {/* Support Icon */}
                <button className="text-gray-700 hover:text-gray-900 transition-colors">
                    <svg className="w-5 h-5 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636L16.95 7.05A7 7 0 1019.95 12.05l1.414 1.414A9 9 0 1118.364 5.636z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
                    </svg>
                </button>

                {/* Language Icon */}
                <button className="text-gray-700 hover:text-gray-900 transition-colors">
                    <svg className="w-5 h-5 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h2m10 0h2M5 12a7 7 0 0014 0M5 12a7 7 0 0114 0M12 3v2m0 10v2M4.222 8h15.556M4.222 16h15.556" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v.01M12 16v.01" />
                    </svg>
                </button>

                {/* Account Icon */}
                <button className="text-gray-700 hover:text-gray-900 transition-colors">
                    <svg className="w-5 h-5 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}