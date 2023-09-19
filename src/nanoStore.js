import { atom } from "nanostores";
import { map } from "nanostores";

const products = map({
  donut1: {
    donut: "donut1",
    keyNum: "buyNum1",
    quantity: 0,
    countId: "count1",
    addId: "add1",
  },
  donut2: {
    donut: "donut2",
    keyNum: "buyNum2",
    quantity: 0,
    countId: "count2",
    addId: "add2",
  },
  donut3: {
    donut: "donut3",
    keyNum: "buyNum3",
    quantity: 0,
    countId: "count3",
    addId: "add3",
  },
  donut4: {
    donut: "donut4",
    keyNum: "buyNum4",
    quantity: 0,
    countId: "count4",
    addId: "add4",
  },
  donut5: {
    donut: "donut5",
    keyNum: "buyNum5",
    quantity: 0,
    countId: "count5",
    addId: "add5",
  },
  donut6: {
    donut: "donut6",
    keyNum: "buyNum6",
    quantity: 0,
    countId: "count6",
    addId: "add6",
  },
});

const purchase = (donut, keyNum, quantity, countId, addId) =>
  products.setKey(donut, { donut, keyNum, quantity, countId, addId });

const initialValue = { value: 1 };
const totalValue = { value: 0 };

const c1 = atom(initialValue);

const add1 = () => c1.set({ value: c1.get().value + 1 });

const c2 = atom(initialValue);

const add2 = () => c2.set({ value: c2.get().value + 1 });

const c3 = atom(initialValue);

const add3 = () => c3.set({ value: c3.get().value + 1 });

const c4 = atom(initialValue);

const add4 = () => c4.set({ value: c4.get().value + 1 });

const c5 = atom(initialValue);

const add5 = () => c5.set({ value: c5.get().value + 1 });

const c6 = atom(initialValue);

const add6 = () => c6.set({ value: c6.get().value + 1 });

const total = atom(totalValue);

const addTotal = () => total.set({ value: total.get().value + 1 });

export {
  products,
  purchase,
  add1,
  c1,
  add2,
  c2,
  add3,
  c3,
  add4,
  c4,
  add5,
  c5,
  add6,
  c6,
  total,
  addTotal,
};
