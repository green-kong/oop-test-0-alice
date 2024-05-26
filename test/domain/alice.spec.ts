import { Alice } from "../../app/model/domain/alice";
import { Water } from "../../app/model/domain/water";

describe('alice 테스트', () => {
    it('앨리스는 최초에 물을 소유하고있지 않고, 목이 마른 상태이다', () => {
        //when
        const alice = new Alice();

        //then
        expect(alice.isThirsty).toBe(true)
        expect(alice.water).toBeNull()
    });

    it('alice가 물을 갖는다', () => {
        //given
        const alice = new Alice();
        const water = new Water(100);

        //when
        alice.takeWater(water);

        //then
        expect(alice.water).toBe(water)
    });

    it('alice가 이미 물을 갖고 있을때, 물을 가지려 하면 예외가 발생한다', () => {
        //given
        const alice = new Alice();
        const water = new Water(100);
        alice.takeWater(water);

        //when & then
        expect(() => alice.takeWater(water))
            .toThrow("이미 물을 갖고 있습니다.");
    });

    it('앨리스가 물을 마시면 isThirsty 가 false가 된다', () => {
        //given
        const alice = new Alice();
        const water = new Water(100);
        alice.takeWater(water);

        //when
        alice.drinkWater(80);

        //then
        expect(alice.isThirsty).toBe(false)
    });

    it('마시는 물의 양이 0보다 작으면 예외가 발생한다', () => {
        //given
        const alice = new Alice();
        const water = new Water(100);
        alice.takeWater(water);

        //when & then
        expect(() => alice.drinkWater(0))
            .toThrow("마시는 물의 양은 0보다 작거나 같을 수 없습니다.")
    });

    it('alice가 목이 마르지 않다면, 물을 마시려 할때 예외가 발생한다', () => {
        //given
        const alice = new Alice();
        const water = new Water(100);
        alice.takeWater(water);
        alice.drinkWater(10);

        //when & then
        expect(() => alice.drinkWater(10))
            .toThrow("앨리스가 목마른 상태가 아닙니다.");
    });

    it('alice가 물을 갖고 있지 않다면, 예외가 발생한다', () => {
        //given
        const alice = new Alice();

        //when & then
        expect(() => alice.drinkWater(10))
            .toThrow("물을 갖고 있지 않습니다.");
    });
});
