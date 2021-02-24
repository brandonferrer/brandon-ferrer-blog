import localforage from "localforage";
import memoryDriver from "localforage-memoryStorageDriver";
import { setup } from "axios-cache-adapter";

// Register custom memoryDriver to localforage
localforage.defineDriver(memoryDriver);

// Create localforage instance
const localforageStore = localforage.createInstance({
  // List of drivers used
  driver: [
    localforage.INDEXEDDB,
    localforage.LOCALSTORAGE,
    memoryDriver._driver,
  ],
  // Prefix all storage keys to prevent conflicts
  name: "bf-cache",
});

// Axios instance
export const igClient = setup({
    baseURL: 'https://graph.instagram.com',
    cache: {
        maxAge: 60 * 60 * 1000, // Set cache time to 1 hour
        exclude: { query: false },
        store: localforageStore, // Pass localforage store to axios-cache-adapter
    },
});
