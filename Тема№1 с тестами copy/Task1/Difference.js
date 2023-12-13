function MyDifference(arrA, arrB) {
    return Array.from(arrA.filter(x => !arrB.includes(x)));
}