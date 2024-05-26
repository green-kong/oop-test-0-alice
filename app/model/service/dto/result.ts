export class Result {
    readonly isSuccess: boolean
    readonly isOpened: boolean
    readonly isThirsty: boolean
    readonly remainWaterCapacity: number

    constructor(isSuccess: boolean, isOpened: boolean, isThirsty: boolean, remainWaterCapacity: number) {
        this.isSuccess = isSuccess;
        this.isOpened = isOpened;
        this.isThirsty = isThirsty;
        this.remainWaterCapacity = remainWaterCapacity;
    }
}
