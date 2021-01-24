//1)
export const myMean = (array: number[]): number => {
    let mySum = array.reduce((total, current) => total + current);
    return mySum / array.length;
  };

console.log(myMean([1,2,3]));
console.log(myMean([3,5,13,23,46,57,68,1,2]));

//2)
export const getPrimes = (array: number[]): number[] => {
    return array.filter(x => getPrimesHelper(x));
};

export const getPrimesHelper = (num: number):boolean => {
    if (num === 1) {return false}
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

console.log(getPrimes([3,5,13,23,46,57,68,1,2]));
console.log(getPrimes([1, 5, 16, 3]));

//3)
export const partition = (
    array: number[],
    belongToGroup1: (element: number) => boolean
  ): { group1: number[]; group2: number[] } => {
    return {
        group1: array.filter(x => belongToGroup1(x)),
        group2: array.filter(x => !belongToGroup1(x))
    };
};

console.log(partition([1, 2, 3, 4, 5, 6], (n) => n % 3 === 0));
console.log(partition([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0));

//4)
type Doggo = {
    name: string, 
    age: number, 
    breed: string};

export const makeSentences = (array: Doggo[]): string[] => {
    return array.map(({name, age, breed}) => `${name} is ${age} years old, and is a ${breed}.`);
};

const doggos = [
    { name: 'Sparky', age: 3.3, breed: 'Pomeranian Husky' },
    { name: 'Oreo', age: 5.4, breed: 'Dalmatian' },
    { name: 'Stella', age: 4.3, breed: 'Alaskan Klee Kai' },
  ];
  
console.log(makeSentences(doggos));

//Optional
export const makeCorrectSentences = (array: Doggo[]): string[] => {
    return array.map(({name, age, breed}) => {
        if ( "aeiou".indexOf(breed[0].toLowerCase()) != -1) {
            return `${name} is ${age} years old, and is an ${breed}.`;
        }
        return `${name} is ${age} years old, and is a ${breed}.`;
    });
}

console.log(makeCorrectSentences(doggos));