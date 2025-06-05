import { motion } from "framer-motion";
import { DashboardSection } from "./sections/DashboardSection";
import { HeaderSection } from "./sections/HeaderSection";
import { IncomingApplicationsSection } from "./sections/IncomingApplicationsSection";
import { PerformanceReportSection } from "./sections/PerformanceReportSection";
import { UpcomingActionsSection } from "./sections/UpcomingActionsSection";
import { WelcomeSection } from "./sections/WelcomeSection";

export const GigflowwDashboard = (): JSX.Element => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="bg-neutral-50 flex flex-row justify-center w-full min-h-screen">
      <div className="bg-neutral-50 w-full max-w-[1440px] relative">
        <HeaderSection />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="px-4 lg:px-10 py-4 space-y-4"
        >
          <motion.div variants={itemVariants}>
            <DashboardSection />
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-4">
            <motion.div variants={itemVariants} className="flex-1">
              <WelcomeSection />
              <div className="mt-4">
                <PerformanceReportSection />
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="w-full lg:w-[340px]">
              <UpcomingActionsSection />
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <IncomingApplicationsSection />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
