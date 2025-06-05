import { ZapIcon } from "lucide-react";
import React from "react";
import { Alert, AlertDescription } from "../../../../components/ui/alert";

export const DashboardSection = (): JSX.Element => {
  return (
    <Alert className="flex items-center gap-2 p-5 mx-auto my-4 bg-[#fcfcfc] rounded-2xl border border-solid border-[#00000026] shadow-[0px_2px_4px_#0000001a]">
      <div className="flex-shrink-0 w-10 h-10 bg-[#1163c1] rounded-full flex items-center justify-center">
        <ZapIcon className="w-7 h-7 text-white" />
      </div>

      <AlertDescription className="font-medium text-xl text-[#292d32]">
        Optimize your experience on Gigfloww- track your job post, manage teams
        and streamline HR OPERATIONS EFFORTLESSLY TODAY!
      </AlertDescription>
    </Alert>
  );
};
