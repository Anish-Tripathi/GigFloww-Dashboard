import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const UpcomingActionsSection = (): JSX.Element => {
  const upcomingActions = [
    {
      startTime: "03:30 pm",
      endTime: "04:30 pm",
      type: "Internal Meeting",
      description: "Internal Meeting with Jade Sapphire- UI designer",
    },
    {
      startTime: "05:00 pm",
      endTime: "05:30 pm",
      type: "Internal Meeting",
      description: "Internal Meeting with Content team",
    },
    {
      startTime: "07:00 pm",
      endTime: "07:30 pm",
      type: "Interview",
      description: "Interview with Achuyut - UI intern",
    },
    {
      startTime: "05:00 pm",
      endTime: "05:30 pm",
      type: "Internal Meeting",
      description: "Internal Meeting with Content team",
    },
    {
      startTime: "05:00 pm",
      endTime: "05:30 pm",
      type: "Internal Meeting",
      description: "Internal Meeting with Content team",
    },
    {
      startTime: "05:00 pm",
      endTime: "05:30 pm",
      type: "Internal Meeting",
      description: "Internal Meeting with Content team",
    },
  ];

  return (
    <Card className="h-[613px] border-[0.5px] border-[#13361c26] shadow-drop-s">
      <CardContent className="p-5">
        <div className="flex justify-between items-center mb-5">
          <h3 className="font-medium text-xl text-[#292d32]">
            Upcoming Actions
          </h3>
          <div className="w-10 h-10 rounded-[40px] border border-[#00000026] flex items-center justify-center">
            <img
              className="w-6 h-6"
              alt="Material symbols"
              src="/material-symbols-light-event-upcoming.svg"
            />
          </div>
        </div>

        <div className="space-y-3 overflow-y-auto max-h-[500px] pr-2">
          {upcomingActions.map((action, index) => (
            <React.Fragment key={index}>
              <div className="flex gap-2">
                <div className="flex flex-col">
                  <span className="font-medium text-base text-[#242831]">
                    {action.startTime}
                  </span>
                  <span className="font-normal text-xs text-[#8a8a8a] mt-[7px]">
                    {action.endTime}
                  </span>
                </div>

                <div className="flex gap-2">
                  <img
                    className="w-px h-[61px]"
                    alt="Line"
                    src="/line-66.svg"
                  />

                  <div className="flex flex-col gap-2">
                    <span className="font-normal text-xs text-[#3a3a3a]">
                      {action.type}
                    </span>
                    <span className="font-medium text-base text-[#242831e6]">
                      {action.description}
                    </span>
                  </div>
                </div>
              </div>

              {index < upcomingActions.length - 1 && (
                <Separator className="my-3 bg-[#13361c26]" />
              )}
            </React.Fragment>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};