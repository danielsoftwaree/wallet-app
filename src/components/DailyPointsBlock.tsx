import React from "react";
import { formatPoints } from "@/utils/formatters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Skeleton } from "./SkeletonLoader";
import ContentFadeIn from "./ContentFadeIn";

interface DailyPointsBlockProps {
  points?: number;
  isLoading?: boolean;
}

const DailyPointsBlock: React.FC<DailyPointsBlockProps> = ({
  points,
  isLoading = false,
}) => {
  if (isLoading || points === undefined) {
    return (
      <div className="bg-white rounded-lg py-3 px-3 shadow-sm transition-all hover:shadow-md">
        <div className="flex justify-between items-center">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-4 rounded-full" />
        </div>

        <div className="mt-2">
          <Skeleton className="h-8 w-24 mt-2" />
        </div>
      </div>
    );
  }

  const formattedPoints = formatPoints(points);

  return (
    <div className="bg-white rounded-lg py-3 px-3 shadow-sm hover:shadow-md transition-all">
      <ContentFadeIn delay={100}>
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-medium text-black">Daily Points</h3>
          <FontAwesomeIcon icon={faStar} className="h-4 w-4 text-yellow-500" />
        </div>

        <div className="flex items-end mt-2">
          <p className="text-xl text-[#727272]">{formattedPoints}</p>
          <p className="text-xs text-[#727272] ml-1 mb-1">points</p>
        </div>
      </ContentFadeIn>
    </div>
  );
};

export default DailyPointsBlock;
