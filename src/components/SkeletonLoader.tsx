import React from "react";

interface SkeletonProps {
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className = "" }) => {
  return (
    <div className={`animate-pulse bg-gray-200 rounded-md ${className}`} />
  );
};

export const CardBalanceSkeletonLoader: React.FC = () => {
  return (
    <div className="bg-white rounded-lg py-3 px-3 shadow-sm transition-all">
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
};

export const DailyPointsSkeletonLoader: React.FC = () => {
  return (
    <div className="bg-white rounded-lg py-3 px-3 shadow-sm">
      <div className="flex items-center justify-between">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-4 rounded-full" />
      </div>

      <div className="flex items-end mt-2">
        <Skeleton className="h-6 w-16 mt-2" />
      </div>
    </div>
  );
};

export const PaymentDueSkeletonLoader: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm h-full flex flex-col">
      <div className="flex justify-between items-center">
        <Skeleton className="h-4 w-24" />
      </div>

      <Skeleton className="h-4 w-32 mt-2" />

      <div className="flex-grow flex items-center justify-center mt-auto">
        <Skeleton className="h-16 w-16 rounded-full mb-4" />
      </div>
    </div>
  );
};

export const TransactionItemSkeletonLoader: React.FC = () => {
  return (
    <div className="flex items-start p-3 border-b border-gray-100">
      <Skeleton className="flex-shrink-0 w-10 h-10 rounded mr-3" />

      <div className="flex-grow">
        <div className="flex justify-between">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-16" />
        </div>

        <Skeleton className="h-3 w-32 mt-2" />
        <Skeleton className="h-3 w-24 mt-1" />
      </div>
    </div>
  );
};

export const TransactionsListSkeletonLoader: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 pb-3 border-b border-gray-100">
        <div className="flex items-center">
          <Skeleton className="h-4 w-4 mr-2 rounded-full" />
          <Skeleton className="h-6 w-40" />
        </div>
        <Skeleton className="h-3 w-32 mt-1" />
      </div>

      <div>
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <TransactionItemSkeletonLoader key={index} />
          ))}
      </div>
    </div>
  );
};
