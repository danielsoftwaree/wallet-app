import React, { useMemo } from "react";
import { Transaction } from "@/types";
import { formatCurrency, formatDate } from "@/utils/formatters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAppleAlt,
  faCoffee,
  faCouch,
  faMoneyBill,
  faShoppingCart,
  faUniversity,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

// Маппинг иконок для типов транзакций
const iconMap = {
  apple: faAppleAlt,
  coffee: faCoffee,
  couch: faCouch,
  "money-bill": faMoneyBill,
  "shopping-cart": faShoppingCart,
  university: faUniversity,
  wifi: faWifi,
};

// Цвета фона для иконок
const backgroundColors = [
  "bg-blue-800",
  "bg-purple-800",
  "bg-green-800",
  "bg-red-800",
  "bg-indigo-800",
  "bg-gray-800",
  "bg-pink-800",
];

const getRandomDarkColor = (): string => {
  return backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
};

interface TransactionItemProps {
  transaction: Transaction;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction }) => {
  const {
    id,
    type,
    amount,
    name,
    description,
    date,
    isPending,
    authorizedUser,
    icon,
  } = transaction;

  // Используем useMemo для оптимизации перерисовок компонента
  const iconComponent = useMemo(
    () => iconMap[icon as keyof typeof iconMap] || faMoneyBill,
    [icon]
  );
  const isPayment = type === "Payment";
  const amountWithSign = useMemo(
    () => (isPayment ? `+${formatCurrency(amount)}` : formatCurrency(amount)),
    [amount, isPayment]
  );
  const formattedDate = formatDate(date);
  const iconBackground = useMemo(() => getRandomDarkColor(), []);

  // Формируем второстепенный текст (description)
  const secondaryText = useMemo(() => {
    let text = isPending ? `Pending - ${description}` : description;

    if (authorizedUser) {
      text += `\n${authorizedUser} - ${formattedDate}`;
    } else {
      text += `\n${formattedDate}`;
    }

    return text;
  }, [description, isPending, authorizedUser, formattedDate]);

  return (
    <Link
      href={`/transaction/${id}`}
      className="flex items-start p-3 border-b border-gray-100 hover:bg-gray-50 transition-colors"
    >
      <div
        className={`flex-shrink-0 w-10 h-10 ${iconBackground} rounded flex items-center justify-center mr-3`}
      >
        <FontAwesomeIcon icon={iconComponent} className="text-white h-5 w-5" />
      </div>

      <div className="flex-grow">
        <div className="flex justify-between">
          <h3 className="text-sm font-medium">{name}</h3>
          <span
            className={`text-sm ${
              isPayment ? "text-green-600" : "font-normal"
            }`}
          >
            {amountWithSign}
          </span>
        </div>

        <p className="text-xs text-[#727272] mt-1 whitespace-pre-line">
          {secondaryText}
        </p>
      </div>
    </Link>
  );
};

export default TransactionItem;
