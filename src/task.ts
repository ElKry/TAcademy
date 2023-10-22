// Задание:
// 1. Исправить тип Person
// 2. В функции getPersonNames исправить типы any
// 3. Убрать коммент в App.tsx и вывести имена в компоненте

type PersonType = {
    occupation?: string;
};
export const users: PersonType[] = [
    {
        name: 'Owen Willson',
        age: 54,
        occupation: 'Actor',
    },
    {
        name: 'Ben Stiller',
        age: 57,
        occupation: 'Filmmaker',
    },
    {
        name: 'Batman',
        age: 'unknown',
        isSuperHero: true,
        occupation: 'vigilante',
    },
];

export const getPersonNames = (arr: any): any => {
    return  arr.map((item: { name: any; }) => item.name);
}

export const personNames = getPersonNames(users);