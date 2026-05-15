import { create } from 'zustand';

type State = {
  sources: string[];
  difficulty: string;
  outputFormat: string;
};

type Actions = {
  addSource: (source: string) => void;
  removeSource: (source: string) => void;
  setDifficulty: (difficulty: string) => void;
  setOutputFormat: (outputFormat: string) => void;
};

const useStore = create<State & Actions>((set) => ({
  sources: [],
  difficulty: 'high-school',
  outputFormat: 'flashcards',
  addSource: (source) =>
    set((state) => ({ sources: [...state.sources, source] })),
  removeSource: (source) =>
    set((state) => ({ sources: state.sources.filter((s) => s !== source) })),
  setDifficulty: (difficulty) => set(() => ({ difficulty })),
  setOutputFormat: (outputFormat) => set(() => ({ outputFormat })),
}));

export default useStore;
