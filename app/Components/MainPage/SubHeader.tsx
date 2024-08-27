import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDownOutlined";

function SubHeader () {
    return (
        <div className="mt-[98px] flex justify-between" >
            <WalletOptions />
            <ClearAllBtn />
        </div>
    );
}

export default SubHeader;

function WalletOptions () {
    return (
        <div className="border p-2 rounded-md flex items-center gap-2 cursor-pointer " >
            <HomeOutlinedIcon className="text-slate-50" sx={{ fontSize: "27px" }} />
            <span className="text-[15px] mt-1 text-slate-500">Home Wallet</span>
            <KeyboardArrowDown 
            fontSize="small"
            className="mt-[4px] text-slate-500"
            />
        </div>
    );
}

function ClearAllBtn() {
    return (
        <button className="border transition-all text-slate-00 px-6 hover:bg-slate-500 flex text-sm rounded-sm items-center justify-center ">
        <span className="max-md:hidden">Clear All</span>
        </button>
    )
}