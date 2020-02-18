const defaults = {
  sites: [
    { name: 'Ekuddsvägen', siteId: 4042 },
    { name: 'Finntorp', siteId: 4046 },
    { name: 'Saltsjö-Järla', siteId: 9429 },
  ],
};

const storage = window.localStorage;

export const set = (key, value) => storage.set(key, JSON.stringify(value));

export const get = key => {
  const value = storage.getItem(key);
  if (value === null) {
    set(key, defaults[key]);
    get(key);
  }
  return JSON.parse(value);
};
