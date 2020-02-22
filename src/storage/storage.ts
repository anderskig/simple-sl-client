export interface Site {
  name: string,
  siteId: number,
  timeToWalk: number,
}

const defaults = {
  sites: [
    { name: 'Ekuddsvägen', siteId: 4042, timeToWalk: 10 },
    { name: 'Finntorp', siteId: 4046, timeToWalk: 15 },
    { name: 'Saltsjö-Järla', siteId: 9429, timeToWalk: 15 },
  ],
} as {
  [key: string]: any
};

const storage = window.localStorage;

export const set = (key: string, value: Object) => storage.setItem(key, JSON.stringify(value));

const get = (key: string) => {
  const value = storage.getItem(key);
  if (value === null) {
    set(key, defaults[key]);
    return defaults[key];
  }
  return JSON.parse(value);
};

export const getSites = (): Array<Site> => {
  return get('sites');
}

export const setStorageTimeToWalk = (timeToWalk: number, siteId: number) => {
  const sites = getSites();
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
