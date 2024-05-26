export class Water {
    capacity: number

    constructor(capacity: number) {
        if (capacity <= 0) {
            throw Error("물의 용량은 0보다 커야합니다.");
        }
        this.capacity = capacity;
    }

    reduce(capacity: number) {
        if (this.capacity < capacity) {
            throw Error("물의 용량은 0미만이 될 수 없습니다.");
        }
        this.capacity -= capacity;
    }
}
