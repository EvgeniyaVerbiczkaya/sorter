class Sorter {

    constructor() {
        this.arr = new Array();
        this.elements_counter = 0;
        this.comparator = (left, right) => left - right;
    }

    add(element) {
        this.arr.push(element);
        this.elements_counter++;
    }

    at(index) {
        return this.arr[index];
    }

    get length() {
        return this.elements_counter;
    }

    toArray() {
        return this.arr;
    }

    sort(indices) {
        let new_arr = new Array();

        for (let i = 0; i < indices.length; i++) {
            new_arr.push(this.arr[indices[i]]);
        }

        new_arr.sort(this.comparator);
        indices.sort((a, b) => a - b);

        for (let j = 0; j < new_arr.length; j++) {
            this.arr[indices[j]] = new_arr[j];
        }
    }

    setComparator(compareFunction) {
        this.comparator = compareFunction;
    }
}

module.exports = Sorter;