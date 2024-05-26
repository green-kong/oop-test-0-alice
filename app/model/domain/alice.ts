import { Water } from "./water";

const ZERO = 0;

export class Alice {
    private _isThirsty: boolean = true
    private _water: Water | null = null

    takeWater(water: Water) {
        if (this._water !== null) {
            throw Error("이미 물을 갖고 있습니다.")
        }
        this._water = water
    }

    drinkWater(capacity: number) {
        if (capacity <= ZERO) {
            throw Error("마시는 물의 양은 0보다 작거나 같을 수 없습니다.")
        }
        if (this._water === null) {
            throw Error("물을 갖고 있지 않습니다.");
        }
        if (!this._isThirsty) {
            throw Error("앨리스가 목마른 상태가 아닙니다.")
        }
        this._water.reduce(capacity);
        this._isThirsty = false
    }

    getRemainWaterCapacity(): number {
        if (this._water === null) {
            throw Error("물을 갖고 있지 않습니다.")
        }
        return this._water.capacity;
    }

    get water(): Water | null {
        return this._water;
    }

    get isThirsty(): boolean {
        return this._isThirsty;
    }
}
