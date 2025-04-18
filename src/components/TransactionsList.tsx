import React from "react";
import { Transaction } from "@/types";
import TransactionItem from "./TransactionItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHistory } from "@fortawesome/free-solid-svg-icons";
import ContentAnimator from "./ContentAnimator";

interface TransactionsListProps {
  transactions: Transaction[];
  isLoading?: boolean;
}

const TransactionSkeleton = () => {
  return (
    <div className="divide-y divide-gray-100">
      {[...Array(3)].map((_, index) => (
        <div key={index} className="p-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-gray-200 animate-pulse"></div>
            <div className="ml-3">
              <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-3 w-24 bg-gray-200 rounded mt-2 animate-pulse"></div>
            </div>
          </div>
          <div className="h-5 w-20 bg-gray-200 rounded animate-pulse"></div>
        </div>
      ))}
    </div>
  );
};

const TransactionsList: React.FC<TransactionsListProps> = ({
  transactions,
  isLoading = false,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-all hover:shadow-md">
      <div className="p-4 pb-3 border-b border-gray-100">
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faHistory}
            className="h-4 w-4 text-[#727272] mr-2"
          />
          <h2 className="text-lg font-medium text-gray-700">
            Latest Transactions
          </h2>
        </div>
        <p className="text-xs text-[#727272] mt-1">
          Your recent account activity
        </p>
      </div>
      {isLoading ? (
        <TransactionSkeleton />
      ) : transactions.length === 0 ? (
        <div className="p-6 text-center text-[#727272]">
          No transactions to display
        </div>
      ) : (
        <ContentAnimator delay={200}>
          <div className="divide-y divide-gray-100">
            {transactions.map((transaction) => (
              <TransactionItem key={transaction.id} transaction={transaction} />
            ))}
          </div>
        </ContentAnimator>
      )}
    </div>
  );
};

export default TransactionsList;
