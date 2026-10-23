// Recorde salvo no navegador (pode falhar em aba anônima)
export const loadBest = (key: string) => {
  try {
    return Number(localStorage.getItem(key)) || 0;
  } catch {
    return 0;
  }
};

export const saveBest = (key: string, value: number) => {
  try {
    localStorage.setItem(key, String(value));
  } catch {
    // sem armazenamento: o recorde vale só nesta visita
  }
};

// Ajusta o canvas à densidade de pixels da tela e devolve o contexto
export const setupCanvas = (canvas: HTMLCanvasElement, width: number, height: number) => {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  const ctx = canvas.getContext('2d');
  ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
  return ctx;
};
