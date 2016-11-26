export const loadState = () => {
  try {
    const state = localStorage.getItem('todolist:store');

    if (!state) {
      return undefined;
    }

    return JSON.parse(state);
  } catch(_) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    localStorage.setItem('todolist:store', JSON.stringify(state));
  } catch(_) {}
};
