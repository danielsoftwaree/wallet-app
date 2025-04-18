import { useState, useEffect } from 'react';
import data from '@/data/data.json';
import { Transaction, AppData, CardInfo } from '@/types';

export const useTransactionData = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [cardInfo, setCardInfo] = useState<CardInfo | null>(null);
    const [dailyPoints, setDailyPoints] = useState<number>(0);

    useEffect(() => {
        try {
            setTimeout(() => {
                const typedData = data as unknown as AppData;
                setTransactions(typedData.transactions);
                setCardInfo(typedData.cardInfo);
                setDailyPoints(typedData.dailyPoints);

                setLoading(false);
            }, 1000);
        } catch (err) {
            setError(err instanceof Error ? err : new Error('Unknown error'));
            setLoading(false);
        }
    }, []);

    const getTransactionById = (id: number): Transaction | undefined => {
        return transactions.find(transaction => transaction.id === id);
    };

    const recalculateBalance = () => {
        if (!cardInfo) return;

        const calculatedAvailable = cardInfo.maxLimit - cardInfo.currentBalance;

        setCardInfo({
            ...cardInfo,
            availableBalance: calculatedAvailable
        });
    };

    return {
        loading,
        error,
        transactions,
        cardInfo,
        dailyPoints,
        getTransactionById,
        recalculateBalance
    };
}; 