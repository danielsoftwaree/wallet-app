"use client";

import React from "react";
import CardBalanceBlock from "@/components/CardBalanceBlock";
import PaymentDueBlock from "@/components/PaymentDueBlock";
import DailyPointsBlock from "@/components/DailyPointsBlock";
import TransactionsList from "@/components/TransactionsList";
import ContentAnimator from "@/components/ContentAnimator";
import Container from "@/components/Container";
import { useTransactionData } from "@/hooks/useTransactionData";

export default function Home() {
  const { loading, error, transactions, cardInfo, dailyPoints } =
    useTransactionData();

  if (error) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-4">
        <Container>
          <div className="bg-red-100 p-4 rounded-lg text-red-700">
            <h2 className="text-lg font-bold">Something went wrong</h2>
            <p className="mt-2">{error.message}</p>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col bg-slate-50 p-4">
      <Container>
        <div className="grid grid-cols-2 gap-3 mb-4">
          <ContentAnimator delay={350}>
            <div className="flex flex-col space-y-3">
              <CardBalanceBlock
                cardInfo={cardInfo || undefined}
                isLoading={loading}
              />
              <DailyPointsBlock points={dailyPoints} isLoading={loading} />
            </div>
          </ContentAnimator>

          <ContentAnimator delay={300}>
            <div className="h-full">
              <PaymentDueBlock />
            </div>
          </ContentAnimator>
        </div>

        <ContentAnimator delay={500}>
          <TransactionsList transactions={transactions} isLoading={loading} />
        </ContentAnimator>
      </Container>
    </main>
  );
}
