"use client";

import { IconButton } from "@material-tailwind/react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export function IconButtonCustomStyles() {
    return (
        <div className="flex gap-4">
            <a href="https://github.com/cynosylix" target="_blank" rel="noopener noreferrer">
                <IconButton className="relative group rounded-full bg-[#333333] text-[#E3EFD3] transition-all duration-500 ease-in-out transform hover:scale-125" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <i className="fab fa-github text-lg z-10" />
                </IconButton>
            </a>

            <a href="https://www.facebook.com/profile.php?id=61555551741850&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">

                <IconButton className="relative group rounded-full bg-[#1877F2] text-[#E3EFD3] transition-all duration-500 ease-in-out transform hover:scale-125  " placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <i className="fab fa-facebook-f text-lg z-10" />
                </IconButton>
            </a>
            <a href="https://www.instagram.com/cynosylix/" target="_blank" rel="noopener noreferrer">
                <IconButton className="relative group rounded-full bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] text-[#E3EFD3] transition-all duration-500 ease-in-out transform hover:scale-125"
                    placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <i className="fab fa-instagram text-lg z-10" />
                </IconButton>
            </a>

            <IconButton className="relative group rounded-full bg-[#333333] text-[#E3EFD3] transition-all duration-500 ease-in-out transform hover:scale-125 " placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <i className="fab fa-x-twitter text-lg z-10" />
            </IconButton>
            <a href="https://www.youtube.com/@CynosylixTechnology" target="_blank" rel="noopener noreferrer">

                <IconButton className="relative group rounded-full bg-[#FF0000] text-[#E3EFD3] transition-all duration-500 ease-in-out transform hover:scale-125 " placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <i className="fab fa-youtube text-lg z-10" />
                </IconButton>
            </a>

            <a href="https://www.linkedin.com/in/cynosylix-technology-530baa2a8" target="_blank" rel="noopener noreferrer">
                <IconButton className="relative group rounded-full bg-[#0A66C2] text-[#E3EFD3] transition-all duration-500 ease-in-out transform hover:scale-125 " placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <i className="fab fa-linkedin-in text-lg z-10" />
                </IconButton>
            </a>
        </div>
    );
}
