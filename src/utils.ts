// Функция для нахождения суммы элементов массива
import exp from "constants";

export const arraySum = (arr: number[]) => {
    return arr.reduce((acc, current) => acc + current, 0);
}

// Функция для фильтрации элементов массива по условию
export const arrayFilter = <T>(arr: T[], condition: (item: T) => boolean): T[] => {
    return arr.filter(item => condition(item));
}

// Функция для преобразования элементов массива
export const arrayMap = <T, U>(arr: T[], mapper: (item: T) => U): U[] => {
    return  arr.map(item => mapper(item));
}