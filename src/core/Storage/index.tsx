import {MMKV} from 'react-native-mmkv';
import {StateStorage} from 'zustand/middleware';

const storage = new MMKV();

export const zustandStorage: StateStorage = {
  setItem: (name, value) => {
    return storage.set(name, value);
  },
  getItem: key => {
    const value = storage.getString(key);
    return value ?? null;
  },
  removeItem: key => {
    return storage.delete(key);
  },
};
