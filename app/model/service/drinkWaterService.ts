import { Refrigerator } from "../domain/refrigerator";
import { Alice } from "../domain/alice";
import { Water } from "../domain/water";
import { Result } from "./dto/result";

export class DrinkWaterService {
    refrigerator: Refrigerator
    alice: Alice

    constructor(refrigerator: Refrigerator, alice: Alice) {
        this.refrigerator = refrigerator;
        this.alice = alice;
    }

    putWaterInRefrigerator(capacity: number) {
        const water = new Water(capacity);
        this.refrigerator.openRefrigerator()
        this.refrigerator.putWater(water)
        this.refrigerator.closeRefrigerator()
    }

    putOutWaterFromRefrigeratorByAlice() {
        this.refrigerator.openRefrigerator();
        const water = this.refrigerator.putOutWater();
        this.refrigerator.closeRefrigerator();
        this.alice.takeWater(water);
    }

    drunkWaterByAlice(capacity: number) {
        this.alice.drinkWater(capacity)
    }

    getResult(): Result {
        const isOpened = this.refrigerator.isOpened;
        const isThirsty = this.alice.isThirsty;
        const remainWaterCapacity = this.alice.getRemainWaterCapacity();
        const isSuccess = !isOpened && !isThirsty
        return new Result(isSuccess, isOpened, isThirsty, remainWaterCapacity)
    }
}
