import React from "react";
import Image from "next/image";
// import Logo from '@assets/logo.png';
// import LinkedIn from '@assets/linkedin.webp';
// import GitHub from '@assets/github.png';

export default function Footer() {
    return (
        <div className="bg-red-500 text-white flex flex-col items-center justify-between w-full h-40 md:h-32 py-4 md:py-2">
            
            <div className="w-28 h-5 md:w-36 md:h-6 flex justify-center items-center mt-2 md:mt-8">
                {/* <Image src={Logo} alt="Logo" className="w-full h-full" /> */}
            </div>

            {/* desktop footer */}
            <div className="w-full hidden md:flex flex-col justify-end mt-auto px-4">
                <div className="flex flex-row items-center justify-between">
                    <p className="text-xs md:text-sm"> © 2024 PoleSwapper </p>

                    <div className="flex flex-col md:flex-row md:space-x-4 justify-center items-center space-y-2 md:space-y-0">
                        <p className="text-xs md:text-sm"> Terms of Service </p>
                        <p className="text-xs md:text-sm"> poleswapper@gmail.com </p>
                        <p className="text-xs md:text-sm"> Privacy Policy </p>
                    </div>
                </div>
            </div>

            {/* mobile footer */}
            <div className="w-full flex md:hidden flex-col justify-end px-2">

                <div className="flex flex-col justify-center items-center space-y-1">
                    <p className="text-xs md:text-sm"> Terms of Service </p>
                    <p className="text-xs md:text-sm"> poleswapper@gmail.com </p>
                    <p className="text-xs md:text-sm"> Privacy Policy </p>
                </div>

                <div className="flex flex-row justify-between items-center mt-2">
                    <p className="text-xs md:text-sm"> © 2024 PoleSwapper </p>
                </div>
            </div>
        </div>
    );
}
