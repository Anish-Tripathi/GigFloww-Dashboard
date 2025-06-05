import { ArrowRightIcon } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardFooter } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const IncomingApplicationsSection = (): JSX.Element => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const applications = [
    {
      id: 1,
      name: "Elizabeth Filade",
      experience: "3 years in Software Development",
      companyName: "Tucker Inc",
      companyLogoColor: "#630538",
      companyLogoSrc: "/avatar-1.png",
      dateRange: "12 Dec 2024 - 10 May 2025",
      profileImageUrl: "..//frame-1171275413.png",
    },
    {
      id: 2,
      name: "Andre Suares",
      experience: "3 years in Software Development",
      companyName: "Tucker Inc",
      companyLogoColor: "#ff8877",
      companyLogoSrc: "/components-5--avatar.png",
      dateRange: "12 Dec 2024 - 10 May 2025",
      profileImageUrl: "..//frame-1171275413-1.png",
    },
    {
      id: 3,
      name: "Ishita Ashuth",
      experience: "3 years in Software Development",
      companyName: "Tucker Inc",
      companyLogoColor: "#2c0563",
      companyLogoSrc: "/avatar-2.png",
      dateRange: "12 Dec 2024 - 10 May 2025",
      profileImageUrl: "..//frame-1171275413-3.png",
    },
    {
      id: 4,
      name: "Ishita Ashuth",
      experience: "3 years in Software Development",
      companyName: "Tucker Inc",
      companyLogoColor: "#2c0563",
      companyLogoSrc: "/avatar-3.png",
      dateRange: "12 Dec 2024 - 10 May 2025",
      profileImageUrl: "..//frame-1171275413-3.png",
    },
  ];

  return (
    <Card className="w-full rounded-lg shadow-drop-s border-[0.5px] border-[#00000026]">
      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-10">
          <div>
            <h2 className="font-semibold text-[#242831] text-2xl tracking-[0.48px] leading-8">
              Incoming Application
            </h2>
            <p className="font-normal text-[#3a3a3a] text-base tracking-[0.32px] leading-8">
              Manage application for your job posting
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="h-10 rounded-lg shadow-[0px_2px_4px_#c4c4c426] [background:linear-gradient(105deg,rgba(39,132,184,1)_0%,rgba(17,59,82,1)_100%)] font-medium text-white text-xl">
              See all
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {applications.map((application, index) => (
            <motion.div
              key={application.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <Card className="border border-solid border-[#00000033] rounded-lg hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <motion.div
                      className="w-[50px] h-[50px] rounded-lg bg-cover bg-center overflow-hidden"
                      whileHover={{ scale: 1.1 }}
                    >
                      <img
                        src={application.profileImageUrl}
                        alt={application.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div className="flex flex-col gap-0.5">
                      <h3 className="font-semibold text-[#242831] text-xl tracking-[0.40px] leading-8 whitespace-nowrap">
                        {application.name}
                      </h3>
                      <p className="font-normal text-[#3a3a3a] text-xs tracking-[0.24px] leading-4">
                        {application.experience}
                      </p>
                    </div>
                  </div>

                  <h4 className="font-medium text-[#242831] text-base tracking-[0.32px] leading-4 mb-5">
                    Latest Experience
                  </h4>

                  <div className="flex items-center gap-2 mb-4">
                    <motion.div
                      className="w-[38px] h-[38px] rounded overflow-hidden flex items-center justify-center"
                      style={{ backgroundColor: application.companyLogoColor }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <img
                        className="w-[21px] h-5"
                        alt="Company logo"
                        src={application.companyLogoSrc}
                      />
                    </motion.div>
                    <div className="flex flex-col gap-0.5">
                      <p className="font-medium text-[#3a3a3a] text-xs tracking-[0.24px] leading-4">
                        {application.companyName}
                      </p>
                      <p className="font-normal text-neutral-500 text-[10px] tracking-[0.20px] leading-4 whitespace-nowrap">
                        {application.dateRange}
                      </p>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="p-4 pt-0">
                  <div className="w-full">
                    <Separator className="mb-2" />
                    <motion.button
                      className="w-full flex justify-between items-center group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="font-medium text-[#21729f] text-base leading-[19.6px]">
                        View Resume
                      </span>
                      <motion.div
                        animate={{
                          x: hoveredCard === index ? 5 : 0,
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <ArrowRightIcon className="w-6 h-6 text-[#21729f]" />
                      </motion.div>
                    </motion.button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};