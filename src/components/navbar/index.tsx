"use client";

import AppLogo from "@/src/svgs/logo";
import WalletIcon from "@/src/svgs/wallet";
import { WalletConnectButton } from "../walletConnectButton";

const NavbarComponent = () => {
  return (
    <div className="w-full h-full flex items-center justify-between">
      <AppLogo />
      
      <div className="min-w-[180px] px-6 h-[40px] space-x-1 flex items-center justify-center rounded-[9999px] text-white bg-gradient-to-r from-pink-500 to-indigo-500 shadow-md transition duration-300 hover:shadow-lg hover:brightness-110">
        <WalletIcon />
        <WalletConnectButton />
      </div>
    </div>
  );
};

export default NavbarComponent;
