function MyIsEqual(value, other) {
    if (JSON.stringify(value) === JSON.stringify(other)) {
        return true;
    }
    if (value instanceof Object && other instanceof Object) {
        if (value.constructor !== other.constructor) {
          return false;
        }
        for (const key in value) {
            if (value.hasOwnProperty(key)) {
                if (!other.hasOwnProperty(key) || !MyIsEqual(value[key], other[key])) {
                    return false;
                }
            }
        }
        for (const key in other) {
            if (other.hasOwnProperty(key) && !value.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }
    return false;
}
  