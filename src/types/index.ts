export interface CardInfo {
    maxLimit: number;
    currentBalance: number;
    availableBalance: number;
}

export type TransactionType = 'Payment' | 'Credit';

export interface Transaction {
    id: number;
    type: TransactionType;
    amount: number;
    name: string;
    description: string;
    date: string;
    isPending: boolean;
    authorizedUser?: string;
    additionalInfo?: string;
    icon: string;
    paymentMethod?: string;
    status?: string;
}

export interface AppData {
    cardInfo: CardInfo;
    dailyPoints: number;
    transactions: Transaction[];
} 