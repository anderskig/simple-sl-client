const defaults = {
  sites: [
    { name: 'Ekuddsvägen', siteId: 4042, timeToWalk: 10 },
    { name: 'Finntorp', siteId: 4046, timeToWalk: 15 },
    { name: 'Saltsjö-Järla', siteId: 9429, timeToWalk: 15 },
  ],
};

const storage = window.localStorage;

export const set = (key, value) => storage.setItem(key, JSON.stringify(value));

export const get = key => {
  const value = storage.getItem(key);
  if (value === null) {
    set(key, defaults[key]);
    return defaults[key];
  }
  return JSON.parse(value);
};

export const setStorageTimeToWalk = (timeToWalk, siteId) => {
  const sites = get('sites');
  const newSites = sites.map(site => {
    if (siteId === site.siteId) {
      site.timeToWalk = timeToWalk;
      return site;
    } else {
      return site;
    }
  });
  set('sites', newSites);
};
