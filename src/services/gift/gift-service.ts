export const fetchGift = (url: string) => {
  return fetch(url, {
    headers: {author: 28},
  }).then(resp => {
    if (!resp.ok) {
      throw Error('Gift no disponibles');
    }
    return resp.json();
  });
};

export const createItem = (url: any, item: any) => {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(item),
  }).then(r => {
    if (!r.ok) {
      throw new Error('No se pudo añadir!');
    }
    return r.json();
  });
};

export const deleteItem = (url: any, item: any) => {
  return fetch(url, {
    method: 'DELETE',
    body: JSON.stringify(item),
  }).then(r => {
    if (!r.ok) {
      throw new Error('No se pudo eliminar!');
    }
    return r.json();
  });
};
