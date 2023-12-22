function MyIsEqual(value, other) {
    if (value === other) {
        return true;
    }

    if (value == null || other == null || (!isObject(value) && !isObject(other))) {
        return value !== value && other !== other;
    }

    if (!isObject(value) || !isObject(other)) {
        if (value.valueOf() === other.valueOf()) {
            return true;
        }

        return false;
    }

    if (isObject(value) && isObject(other)) {
        if (value instanceof Date && other instanceof Date) {
            if (JSON.stringify(value) === JSON.stringify(other)) {
                return true;
            }
            return false;
        }

        if(value instanceof Map && other instanceof Map){
            return compareMaps(value, other)
        }

        if(value instanceof Set && other instanceof Set){
            return compareSet(value, other)
        }

        if(value instanceof RegExp && other instanceof RegExp){
            return value.source === other.source && value.flags === other.flags;
        }

        if(value.constructor !== other.constructor){
            return false;
        }

        let valueKeys = Object.keys(value);
        let otherKeys = Object.keys(other);

        if (valueKeys.length !== otherKeys.length) {
            return false;
        }

        for (let i = 0; i < valueKeys.length; i++) {
            const key = valueKeys[i];
            if (!otherKeys.includes(key) || !MyIsEqual(value[key], other[key])) {
                return false;
            }
        }

        return true;
    }

    return true;
}

function isObject(object) {
    if (object !== null && typeof object === "object") {
        return true;
    }

    return false;
}

function compareMaps(map1, map2) {
    let testVal;
    if (map1.size !== map2.size) {
        return false;
    }
    for (let [key, val] of map1) {
        testVal = map2.get(key);
        if (testVal !== val || (testVal === undefined && !map2.has(key))) {
            return false;
        }
    }
    return true;
}

function compareSet(set1, set2){    
    if(set1.size !== set2.size){
        return false;
    }

    let arrForSet1 = Array.from(set1);
    let arrForSet2 = Array.from(set2);

    return MyIsEqual(arrForSet1, arrForSet2);

    /*const failedElements = set1.filter(obj1 => {
  return !set2.some(obj2 => checkFunction(obj1, obj2));
});*/
}