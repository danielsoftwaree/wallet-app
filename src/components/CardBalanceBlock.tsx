import React from "react";
import { CardInfo } from "@/types";
import { formatCurrency } from "@/utils/formatters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { Skeleton } from "./SkeletonLoader";
import ContentFadeIn from "./ContentFadeIn";

interface CardBalanceBlockProps {
  cardInfo?: CardInfo;
  isLoading?: boolean;
}

const CardBalanceBlock: React.FC<CardBalanceBlockProps> = ({
  cardInfo,
  isLoading = false,
}) => {
  if (isLoading || !cardInfo) {
    return (
      <div className="bg-white rounded-lg py-3 px-3 shadow-sm transition-all hover:shadow-md">
        <div className="flex justify-between items-center">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-4 rounded-full" />
        </div>

        <div className="mt-2">
          <Skeleton className="h-8 w-24 mt-2" />
          <Skeleton className="h-4 w-32 mt-2" />
        </div>
      </div>
    );
  }

  const { currentBalance, availableBalance } = cardInfo;

  return (
    <div className="bg-white rounded-lg py-3 px-3 shadow-sm transition-all hover:shadow-md">
      <ContentFadeIn delay={100}>
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-medium text-black">Card Balance</h3>
          <FontAwesomeIcon
            icon={faCreditCard}
            className="h-4 w-4 text-[#3c3c3c]"
          />
        </div>

        <div className="mt-2">
          <span className="text-2xl font-extrabold text-[#3c3c3c] block">
            {formatCurrency(currentBalance)}
          </span>
          <p className="text-sm text-[#727272]">
            {formatCurrency(availableBalance)} Available
          </p>
        </div>
      </ContentFadeIn>
    </div>
  );
};

export default CardBalanceBlock;
