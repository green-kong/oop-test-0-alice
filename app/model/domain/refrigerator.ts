import { Water } from "./water";

export class Refrigerator {
    isOpened: boolean = false
    water: Water | null = null

    openRefrigerator() {
        if (this.isOpened) {
            throw Error("냉장고가 이미 열려 있습니다.")
        }
        this.isOpened = true;
    }

    closeRefrigerator() {
        this.validateIsClosed();
        this.isOpened = false;
    }

    private validateIsClosed() {
        if (!this.isOpened) {
            throw Error("냉장고가 닫혀 있습니다.")
        }
    }

    putWater(water: Water) {
        this.validateIsClosed()
        if (this.water !== null) {
            throw Error("냉장고에 이미 물이 들어있습니다.")
        }
        this.water = water;
    }

    putOutWater(): Water {
        this.validateIsClosed()
        if (this.water === null) {
            throw Error("냉장고에 물이 없습니다.")
        }
        const water = this.water;
        this.water = null
        return water
    }
}
