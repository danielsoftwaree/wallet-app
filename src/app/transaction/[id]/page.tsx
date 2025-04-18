"use client";

import React, { useEffect, useState } from "react";
import TransactionDetail from "@/components/TransactionDetail";
import { useTransactionData } from "@/hooks/useTransactionData";
import { Transaction } from "@/types";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ContentAnimator from "@/components/ContentAnimator";
import Container from "@/components/Container";
import { Skeleton } from "@/components/SkeletonLoader";

interface TransactionDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

const TransactionDetailSkeleton: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen pb-6">
      <Container>
        <div className="p-4">
          <div className="text-gray-600 flex items-center gap-2">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-14" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-4 mb-16">
          <Skeleton className="h-16 w-32 mb-6" />
          <Skeleton className="h-4 w-20 mb-2" />
          <Skeleton className="h-4 w-32" />
        </div>

        <div className="bg-white mx-4 rounded-lg shadow-sm overflow-hidden">
          <div className="p-4">
            <div className="flex justify-between items-center mb-3">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-20" />
            </div>
            <Skeleton className="h-4 w-28 mb-3" />
            <Skeleton className="h-4 w-full mt-2" />
          </div>

          <div className="border-t border-gray-200"></div>

          <div className="p-4">
            <div className="flex justify-between items-center">
              <Skeleton className="h-4 w-10" />
              <Skeleton className="h-4 w-16" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default function TransactionDetailPage({
  params,
}: TransactionDetailPageProps) {
  const unwrappedParams = React.use(params) as { id: string };
  const { getTransactionById, loading, error } = useTransactionData();
  const [transaction, setTransaction] = useState<Transaction | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!loading) {
      try {
        const id = parseInt(unwrappedParams.id, 10);

        if (isNaN(id)) {
          setNotFound(true);
          return;
        }

        const foundTransaction = getTransactionById(id);

        if (foundTransaction) {
          setTransaction(foundTransaction);
        } else {
          setNotFound(true);
        }
      } catch (err) {
        console.error("Error processing transaction ID:", err);
        setNotFound(true);
      }
    }
  }, [loading, unwrappedParams.id, getTransactionById]);

  if (loading) {
    return <TransactionDetailSkeleton />;
  }

  if (error) {
    return (
      <div className="bg-gray-100 min-h-screen p-4">
        <Container>
          <ContentAnimator>
            <div className="bg-white rounded-lg p-6 shadow">
              <h2 className="text-xl font-bold text-red-600">Ошибка</h2>
              <p className="mt-2 text-gray-700">{error.message}</p>
              <Link
                href="/"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                Вернуться на главную
              </Link>
            </div>
          </ContentAnimator>
        </Container>
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="bg-gray-100 min-h-screen p-4">
        <Container>
          <ContentAnimator>
            <div className="bg-white rounded-lg p-6 shadow">
              <h2 className="text-xl font-bold">Транзакция не найдена</h2>
              <p className="mt-2 text-gray-700">
                Запрошенная транзакция не существует или была удалена.
              </p>
              <Link
                href="/"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                Вернуться на главную
              </Link>
            </div>
          </ContentAnimator>
        </Container>
      </div>
    );
  }

  if (transaction) {
    return <TransactionDetail transaction={transaction} />;
  }

  return null;
}
