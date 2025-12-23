import { create } from "zustand";             //create is used to create a global store

type  CounterState = {            //This is TypeScript type definition,It helps with type safety and auto-suggestions in VS Code.
    count: number;
    increment: () => void;
    decrement: () =>  void;
    reset: () => void
};

export const useCounterStore = create<CounterState>((set) => ({  //useCounterStore is a custom React hook
count: 0,
increment: () => set((state) => ({ count: state.count + 1 })),  //set is used to update the state
decrement: () => set((state) => ({ count: state.count - 1 })),
reset: () => set({count: 0}),
}));
