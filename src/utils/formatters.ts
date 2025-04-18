import { format, isThisWeek, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';

export const formatCurrency = (amount: number): string => {
    return amount.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    });
};

export const formatPoints = (points: number): string => {
    if (points >= 1000) {
        return `${Math.round(points / 1000)}K`;
    }
    return points.toString();
};

export const formatDate = (dateString: string): string => {
    const date = parseISO(dateString);

    // Используем сравнение с текущей неделей для определения формата
    if (isThisWeek(date, { weekStartsOn: 1 })) {
        // Для дат этой недели возвращаем день недели на русском
        return format(date, 'EEEE', { locale: ru });
    }

    // Для более старых дат возвращаем дату в формате MM/dd/yy
    return format(date, 'MM/dd/yy');
};

export const formatDateWithTime = (dateString: string): string => {
    const date = parseISO(dateString);
    return format(date, 'MM/dd/yy, HH:mm');
};

// Функция для вычисления сезона по месяцу
export const getSeason = (date: Date = new Date()): 'spring' | 'summer' | 'autumn' | 'winter' => {
    const month = date.getMonth();

    if (month >= 2 && month <= 4) return 'spring';
    if (month >= 5 && month <= 7) return 'summer';
    if (month >= 8 && month <= 10) return 'autumn';
    return 'winter';
};

// Расчет дня сезона (сколько дней прошло с начала сезона)
export const getDayOfSeason = (date: Date = new Date()): number => {
    const month = date.getMonth();
    const day = date.getDate();

    // Начало сезонов (месяцы с 0-индексом)
    const seasonStarts = {
        spring: 2, // Март
        summer: 5, // Июнь
        autumn: 8, // Сентябрь
        winter: 11 // Декабрь
    };

    const season = getSeason(date);
    const seasonStartMonth = seasonStarts[season];

    if (month === seasonStartMonth) {
        return day;
    } else {
        // Рассчитываем количество дней с начала сезона
        let daysInSeasonStartMonth = 31;
        if (seasonStartMonth === 3 || seasonStartMonth === 5 || seasonStartMonth === 8 || seasonStartMonth === 10) {
            daysInSeasonStartMonth = 30;
        } else if (seasonStartMonth === 1) {
            daysInSeasonStartMonth = date.getFullYear() % 4 === 0 ? 29 : 28;
        }

        return daysInSeasonStartMonth + day;
    }
};

// Расчет Daily Points по алгоритму из тех. задания
export const calculateDailyPoints = (): number => {
    const today = new Date();
    const dayOfSeason = getDayOfSeason(today);

    if (dayOfSeason === 1) {
        return 2; // Первый день сезона - 2 очка
    } else if (dayOfSeason === 2) {
        return 3; // Второй день сезона - 3 очка
    } else {
        // Для третьего дня и далее применяем формулу
        let pointsYesterday = 3; // поинты за 2-й день
        let pointsDayBeforeYesterday = 2; // поинты за 1-й день

        // Рассчитываем поинты для всех дней, начиная с 3-го
        for (let day = 3; day <= dayOfSeason; day++) {
            const todayPoints = Math.round(0.6 * pointsYesterday + 1.0 * pointsDayBeforeYesterday);
            pointsDayBeforeYesterday = pointsYesterday;
            pointsYesterday = todayPoints;
        }

        return pointsYesterday;
    }
}; 