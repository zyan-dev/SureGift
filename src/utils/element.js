export const checkClosestElement = (current, s) => {
  let el = current;
  let ancestor = current;
  if (!document.documentElement.contains(el)) return null;
  do {
    if (ancestor.matches(s)) return ancestor;
    ancestor = ancestor.parentElement;
  } while (ancestor !== null);
  return null;
};
