import { DrinkWaterService } from "../model/service/drinkWaterService";
import { View } from "../view/view";
import { Refrigerator } from "../model/domain/refrigerator";
import { Alice } from "../model/domain/alice";

export class Controller {
    service: DrinkWaterService = new DrinkWaterService(new Refrigerator(), new Alice())
    view: View = new View()

    async start() {
        this.view.printStart()
        await this.processByOption();
    }

    private async processByOption() {
        const option = await this.view.readOption();
        switch (option) {
            case "1":
                const capacity = await this.view.readWaterCapacity();
                this.service.putWaterInRefrigerator(Number(capacity))
                break;
            case "2":
                this.service.putOutWaterFromRefrigeratorByAlice()
                break;
            case "3":
                const drinkCapacity = await this.view.readDrinkingWaterCapacityInput();
                this.service.drunkWaterByAlice(Number(drinkCapacity))
                break;
            case "4":
                const result = this.service.getResult();
                this.view.printEnd(result)
                return;
            default:
                throw Error("adsfa")
        }
        await this.processByOption()
    }
}
