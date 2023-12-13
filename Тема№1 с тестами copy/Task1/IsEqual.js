function MyIsEqual(value, other) {
    if (JSON.stringify(value) === JSON.stringify(other)) {
        return true;
    }
    else {
        return false;
    }
}