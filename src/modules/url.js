import { camelCase } from "lodash";

export const getInfoFromUrlHash = urlHash => {
  if (!urlHash) {
    return {error: 'Acesso negado. Você não possui permissões para acessar o aplicativo'}
  }

  return urlHash.substring(1).split('&').reduce((accumulator, hashItem) => {
    if (hashItem) {
      const [key, value] = hashItem.split('=');
      accumulator[camelCase(key)] = decodeURIComponent(value);
    }

    return accumulator;
  }, {})
}
