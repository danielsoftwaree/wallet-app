import React from "react";
import { formatCurrency } from "@/utils/formatters";
import { Skeleton } from "./SkeletonLoader";

interface Transaction {
  id: string;
  title: string;
  amount: number;
  date: string;
  type: "income" | "expense";
}

interface LastTransactionsBlockProps {
  transactions?: Transaction[];
  isLoading?: boolean;
}

const LastTransactionsBlock: React.FC<LastTransactionsBlockProps> = ({
  transactions,
  isLoading = false,
}) => {
  const renderTransactionSkeleton = () => (
    <div className="pt-3 pb-3 flex justify-between items-center border-b border-gray-100">
      <div className="flex items-center">
        <Skeleton className="h-8 w-8 rounded-full" />
        <div className="ml-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-3 w-16 mt-1" />
        </div>
      </div>
      <Skeleton className="h-5 w-16" />
    </div>
  );

  return (
    <div className="bg-white rounded-lg py-3 px-3 shadow-sm transition-all hover:shadow-md">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-medium text-black">Last Transactions</h3>
        {!isLoading && transactions && transactions.length > 0 && (
          <span className="text-xs font-medium text-blue-500 cursor-pointer">
            See All
          </span>
        )}
      </div>

      <div className="mt-3">
        {isLoading || !transactions ? (
          <>
            {renderTransactionSkeleton()}
            {renderTransactionSkeleton()}
            {renderTransactionSkeleton()}
          </>
        ) : transactions.length > 0 ? (
          transactions.slice(0, 3).map((transaction) => (
            <div
              key={transaction.id}
              className="pt-3 pb-3 flex justify-between items-center border-b border-gray-100 last:border-0"
            >
              <div className="flex items-center">
                <div
                  className={`h-8 w-8 rounded-full flex items-center justify-center ${
                    transaction.type === "income"
                      ? "bg-green-100 text-green-500"
                      : "bg-red-100 text-red-500"
                  }`}
                >
                  <span className="text-sm">
                    {transaction.type === "income" ? "+" : "-"}
                  </span>
                </div>
                <div className="ml-2">
                  <p className="text-sm text-[#3c3c3c] font-medium">
                    {transaction.title}
                  </p>
                  <p className="text-xs text-[#727272]">{transaction.date}</p>
                </div>
              </div>
              <span
                className={`text-sm font-medium ${
                  transaction.type === "income"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {transaction.type === "income" ? "+" : "-"}{" "}
                {formatCurrency(transaction.amount)}
              </span>
            </div>
          ))
        ) : (
          <div className="py-6 text-center">
            <p className="text-sm text-gray-500">No transactions yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LastTransactionsBlock;
