function MyDifference(arrA, ...arrB) {
    const set = new Set(arrB.flat());
    return Array.from(arrA.filter(element => !set.has(element)));
}