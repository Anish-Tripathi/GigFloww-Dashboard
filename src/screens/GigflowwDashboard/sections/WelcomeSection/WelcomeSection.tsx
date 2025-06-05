import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const cardData = [
  {
    title: "Employees",
    count: "24",
    iconBg: "bg-[#edd3ef]",
    iconSrc: "/formkit-people.svg",
    iconAlt: "Formkit people",
  },
  {
    title: "Hiring",
    count: "5",
    iconBg: "bg-[#d3e3ef]",
    iconSrc: "/healthicons-job-status-level-outline.svg",
    iconAlt: "Healthicons job",
  },
  {
    title: "Projects",
    count: "1",
    iconBg: "bg-[#e3efd3]",
    iconSrc: "/vector-1.svg",
    iconAlt: "Projects icon",
  },
];

export const WelcomeSection = (): JSX.Element => {
  return (
    <section className="flex flex-col md:flex-row gap-4 w-full">
      {cardData.map((card, index) => (
        <Card
          key={index}
          className="flex-1 min-w-[280px] h-[200px] relative border-[0.5px] border-solid border-[#13361c26] shadow-drop-s hover:shadow-lg transition-shadow"
        >
          <CardContent className="p-5 h-full flex flex-col">
            <div className="flex justify-between items-start">
              <div className="font-medium text-[#1d1d1d] text-2xl">
                {card.title}
              </div>

              <div
                className={`${card.iconBg} w-10 h-10 rounded-full flex items-center justify-center`}
              >
                <img
                  className="w-6 h-6"
                  alt={card.iconAlt}
                  src={card.iconSrc}
                />
              </div>
            </div>

            <div className="font-semibold text-[#1d1d1d] text-[28px] tracking-[0.56px] leading-10 mt-6">
              {card.count}
            </div>

            <div className="mt-auto">
              <div className="w-full h-px bg-[#13361c26]" />
              <button className="w-full flex items-center justify-between mt-4 group">
                <span className="font-medium text-[#21729f] text-base">
                  View Details
                </span>
                <ArrowRightIcon className="w-6 h-6 text-[#21729f] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};