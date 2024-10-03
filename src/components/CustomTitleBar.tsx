import { useDispatch } from "react-redux";
import { toggleSidebar } from "../redux/sidebarSlice";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdDarkMode } from "react-icons/md";
import { toggleTheme } from "../redux/themeSlice";
import { RiHome5Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useState } from "react"; // 추가

const CustomTitleBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div
            className={`h-[50px] w-full fixed z-50`}
        >
            <div
                className="h-[50px] flex flex-row pl-[100px] px-3 gap-2 z-50 text-sidebarForeground"
            >
                <button onClick={() => dispatch(toggleSidebar())} className="flex items-center hover:animate-pulse">
                    <RxHamburgerMenu className="size-6" />
                </button>
                <button onClick={() => dispatch(toggleTheme())} className="flex items-center hover:animate-pulse">
                    <MdDarkMode className="size-6" />
                </button>
                <button onClick={() => navigate('/')} className="flex items-center hover:animate-pulse">
                    <RiHome5Line className="size-6" />
                </button>
                <div
                    className="flex-grow"
                    style={{ WebkitAppRegion: 'drag' } as React.CSSProperties}
                />
            </div>
        </div>
    );
};

export default CustomTitleBar;