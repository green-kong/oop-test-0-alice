import { Water } from "../../app/model/domain/water";

describe('water test', () => {
    it('Water를 생성한다', () => {
        //given
        const capacity = 1;

        //when
        const water = new Water(capacity);

        //then
        expect(water.capacity).toBe(capacity);
    });

    it('Water 생성 시 capacity가 0이하이면 예외가 발생한다', () => {
        //given
        const capacity = 0;

        //when & then
        expect(() => {
            new Water(capacity)
        })
            .toThrow("물의 용량은 0보다 커야합니다.");
    });

    it('물의 용량이 줄어든다', () => {
        //given
        const water = new Water(100);

        //when
        water.reduce(30);

        //then
        expect(water.capacity).toBe(70);
    })

    it('reduce 하는 capacity가 기존 capacity보다 크면 예외가 발생한다', () => {
        //given
        const water = new Water(100);

        //when & then
        expect(() => water.reduce(101))
            .toThrow("물의 용량은 0미만이 될 수 없습니다.");
    });
});
