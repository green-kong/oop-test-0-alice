import * as process from "node:process";
import * as readline from "node:readline";
import { Result } from "../model/service/dto/result";

export class View {

    printStart() {
        console.log("목마른 앨리스가 물을 먹게 도와주세요.")
    }

    printEnd(result: Result) {
        const endMessage = `\n실행결과 : ${result.isSuccess ? "성공" : "실패"}
-------------------------------
${result.isOpened ? "냉장고 열려 있음" : "냉장고 닫혀 있음"}
${result.isThirsty ? "앨리스 갈증 해소 안됨" : "앨리스 갈증 해소 됨"}
남아 있는 물의 양 : ${result.remainWaterCapacity}`;
        console.log(endMessage)
    }

    async readOption(): Promise<string> {
        const message: string = `\n실행 옵션을 선택해 주세요
1. 냉장고에 물 넣기
2. 앨리스가 냉장고에서 물 꺼내기
3. 앨리스 물 마시기
4. 종료`
        return await this.readLineAsync(message)
    }

    async readWaterCapacity(): Promise<string> {
        return await this.readLineAsync("\n냉장고에 넣을 물의 양을 입력해주세요.")
    }

    async readDrinkingWaterCapacityInput() {
        return await this.readLineAsync("\n앨리스가 마실 물의 양을 입력해주세요.")
    }

    private readLineAsync(message: string): Promise<string> {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
        return new Promise((resolve, reject) => {
            rl.question(`${message} \n`, (input: string) => {
                resolve(input)
                rl.close()
            })
        })
    }
}
