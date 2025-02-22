"use client";

import Providers from "@/src/components/providers";
import {motion} from "framer-motion";
import {ThemeProvider} from "next-themes";
import {useEffect, useState} from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({children}: LayoutProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return;
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <Providers>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.8, ease: "easeOut"}}
      >
        {children}
      </motion.div>
      </Providers>
    </ThemeProvider>
  );
};

export default AppLayout;
