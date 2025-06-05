import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

export const PerformanceReportSection = (): JSX.Element => {
  const currentDate = "Thu 05, Jun 2025";
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const yAxisValues = [80, 70, 60, 50, 40, 30, 20, 10];

  return (
    <Card className="w-full p-5 shadow-drop-s border-[0.5px] border-[#00000026]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-2xl text-[#242831] tracking-[0.48px]">
          Performance Report
        </h2>

        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">{currentDate}</span>
          <Select defaultValue="weekly">
            <SelectTrigger className="w-[111px] h-9 bg-[#fafcf7] rounded-[20px] border border-[#e3efd3]">
              <SelectValue placeholder="Weekly" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <CardContent className="p-0">
        <div className="flex">
          <div className="flex flex-col w-[30px] items-end gap-[3px] mr-4">
            {yAxisValues.map((value, index) => (
              <div
                key={index}
                className="text-[#656565] text-sm leading-8"
              >
                {value}
              </div>
            ))}
          </div>

          <div className="flex-1">
            <div className="relative w-full h-[255px]">
              <img
                className="absolute w-full h-[255px] top-0 left-0"
                alt="Performance graph"
                src="/vector-14.svg"
              />
            </div>

            <div className="flex justify-between mt-4">
              {daysOfWeek.map((day, index) => (
                <div
                  key={index}
                  className="text-[#656565] text-sm text-center whitespace-nowrap"
                >
                  {day}
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};