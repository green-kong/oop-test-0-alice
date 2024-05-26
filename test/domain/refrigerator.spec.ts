import { Refrigerator } from "../../app/model/domain/refrigerator";
import { Water } from "../../app/model/domain/water";

describe('refrigerator 테스트', () => {
    it('refrigerator를 생성한다. 생성된 refrigerator의 기본값 검증', () => {
        //when
        const refrigerator = new Refrigerator();

        //then
        expect(refrigerator.isOpened).toBe(false)
        expect(refrigerator.water).toBe(null)
    });

    it('refrigerator의 isOpened를 true로 변경한다', () => {
        //given
        const refrigerator = new Refrigerator();

        //when
        refrigerator.openRefrigerator()

        //then
        expect(refrigerator.isOpened).toBe(true)
    });

    it('refrigerator가 열려있는 상태에서 열려고 하면 에러가 발생한다.', () => {
        //given
        const refrigerator = new Refrigerator();
        refrigerator.openRefrigerator()

        //when & then
        expect(() => refrigerator.openRefrigerator())
            .toThrow("냉장고가 이미 열려 있습니다.")
    });

    it('refrigerator의 isOpened를 false로 변경한다', () => {
        //given
        const refrigerator = new Refrigerator();
        refrigerator.openRefrigerator()

        //when
        refrigerator.closeRefrigerator()

        //then
        expect(refrigerator.isOpened).toBe(false)
    });

    it('refrigerator가 닫혀있는 상태에서 닫으려고 하면 에러가 발생한다.', () => {
        //given
        const refrigerator = new Refrigerator();

        //when & then
        expect(() => refrigerator.closeRefrigerator())
            .toThrow("냉장고가 닫혀 있습니다.")
    });

    it('물을 넣을 수 있다.', () => {
        //given
        const refrigerator = new Refrigerator();
        const water = new Water(100);
        refrigerator.openRefrigerator()

        //when
        refrigerator.putWater(water)

        //then
        expect(refrigerator.water).toBe(water)
    });

    it('냉장고가 닫혀 있는 상태에서 물을 넣으려 하면 예외가 발생한다', () => {
        //given
        const refrigerator = new Refrigerator();
        const water = new Water(100);

        //when & then
        expect(() => refrigerator.putWater(water))
            .toThrow("냉장고가 닫혀 있습니다.")
    });

    it('냉장고에 이미 물이 있을 때 물을 넣으려 하면 예외가 발생한다.', () => {
        //given
        const refrigerator = new Refrigerator();
        refrigerator.openRefrigerator()
        const water = new Water(100);
        refrigerator.putWater(water)

        //when & then
        expect(() => refrigerator.putWater(water))
            .toThrow("냉장고에 이미 물이 들어있습니다.")
    });

    it('물을 뺄 수 있다.', () => {
        //given
        const refrigerator = new Refrigerator();
        const water = new Water(100);
        refrigerator.openRefrigerator()
        refrigerator.putWater(water)

        //when
        const waterFromRefrigerator = refrigerator.putOutWater();

        //then
        expect(waterFromRefrigerator).toBe(water)
    });

    it('냉장고가 닫혀 있는 상태에서 물을 빼려 하면 예외가 발생한다', () => {
        //given
        const refrigerator = new Refrigerator();
        const water = new Water(100);
        refrigerator.openRefrigerator()
        refrigerator.putWater(water)
        refrigerator.closeRefrigerator()

        //when & then
        expect(() => refrigerator.putOutWater())
            .toThrow("냉장고가 닫혀 있습니다.")
    });

    it('냉장고에 이미 물이 없을 때 물을 꺼내려 하면 예외가 발생한다.', () => {
        //given
        const refrigerator = new Refrigerator();
        refrigerator.openRefrigerator()

        //when & then
        expect(() => refrigerator.putOutWater())
            .toThrow("냉장고에 물이 없습니다.")
    });
});
