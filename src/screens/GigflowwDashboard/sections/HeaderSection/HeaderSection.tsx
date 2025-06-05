import { BellIcon, MenuIcon, SettingsIcon } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

export const HeaderSection = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", active: true },
    { name: "People", active: false },
    { name: "Hiring", active: false },
    { name: "Salary", active: false },
    { name: "Reviews", active: false },
  ];

  return (
    <header className="w-full h-[100px] bg-[#fbfbfb] flex items-center justify-center px-4 lg:px-10 relative">
      <div className="w-full max-w-[1360px] h-[80px] rounded-[50px] overflow-hidden shadow-drop-s [background:linear-gradient(180deg,rgb(156,188,248)_0%,rgb(255,255,255)_100%)] flex items-center justify-between px-5">
        <div className="flex items-center gap-4">
          <img
            className="h-[40px] w-auto"
            alt="Gigfloww Logo"
            src="/image-74.png"
          />
        </div>

        <nav className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={item.active ? "default" : "ghost"}
                className={`px-4 py-2 text-lg ${
                  item.active
                    ? "bg-white text-[#31aef3] rounded-[50px] font-medium"
                    : "text-white font-normal hover:bg-white/10"
                }`}
              >
                {item.name}
              </Button>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              size="icon"
              variant="outline"
              className="w-10 h-10 rounded-full bg-white"
            >
              <SettingsIcon className="h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative"
          >
            <Button
              size="icon"
              variant="outline"
              className="w-10 h-10 rounded-full bg-white"
            >
              <BellIcon className="h-5 w-5" />
            </Button>
            <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-[#b20812] text-white rounded-full">
              <span className="text-xs font-semibold">4</span>
            </Badge>
          </motion.div>

          <div className="w-px h-[60px] bg-gray-200 mx-2 hidden lg:block"></div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Avatar className="w-[45px] h-[45px] rounded-full">
              <AvatarImage src="/frame-2610930.png" alt="User profile" />
            </Avatar>
          </motion.div>

          <Button
            className="lg:hidden"
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <MenuIcon className="h-6 w-6 text-white" />
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[100px] left-0 right-0 bg-white shadow-lg rounded-b-lg z-50 lg:hidden"
          >
            <nav className="flex flex-col p-4">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant={item.active ? "default" : "ghost"}
                  className={`w-full justify-start mb-2 ${
                    item.active
                      ? "bg-[#31aef3] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </Button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};