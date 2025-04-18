import React from "react";
import { Transaction } from "@/types";
import { formatCurrency, formatDateWithTime } from "@/utils/formatters";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/Container";

interface TransactionDetailProps {
  transaction: Transaction;
}

const TransactionDetail: React.FC<TransactionDetailProps> = ({
  transaction,
}) => {
  const {
    amount,
    name,
    description,
    date,
    status = "Approved",
    paymentMethod = "Card",
  } = transaction;

  const formattedDate = formatDateWithTime(date);

  return (
    <div className="bg-gray-100 min-h-screen pb-6">
      <Container>
        <div className="p-4">
          <Link href="/" className="text-gray-600 flex items-center gap-2">
            <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
            <span>Back</span>
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center mt-4 mb-16">
          <h1 className="text-5xl font-semibold text-black mb-6">
            {formatCurrency(amount)}
          </h1>
          <div className="text-gray-400 mb-2">{name}</div>
          <div className="text-gray-400">{formattedDate}</div>
        </div>

        <div className="bg-white mx-4 rounded-lg shadow-sm overflow-hidden">
          <div className="p-4">
            <div className="flex justify-between items-center mb-3">
              <div className="text-gray-600">Status:</div>
              <div className="text-gray-800">{status}</div>
            </div>
            <div className="flex justify-between items-center mb-3">
              <div className="text-gray-600">{paymentMethod}</div>
            </div>
            {description && (
              <div className="text-[#727272] text-sm mb-3">{description}</div>
            )}
          </div>

          <div className="border-t border-gray-200"></div>

          <div className="p-4">
            <div className="flex justify-between items-center">
              <div className="text-gray-600">Total</div>
              <div className="text-gray-600">{formatCurrency(amount)}</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TransactionDetail;
