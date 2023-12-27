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
        if (value.constructor !== other.constructor) {
            return false;
        }

        if (value instanceof Date && other instanceof Date) {
            if (JSON.stringify(value) === JSON.stringify(other)) {
                return true;
            }
            return false;
        }

        if (value instanceof Map && other instanceof Map) {
            return MyIsEqual(Array.from(value), Array.from(other))
        }

        if (value instanceof Set && other instanceof Set) {
            return MyIsEqual(Array.from(value),Array.from(other))
        }

        if (value instanceof RegExp && other instanceof RegExp) {
            return value.source === other.source && value.flags === other.flags;
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
