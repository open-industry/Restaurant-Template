const getFocusables = (container, currentFocus) => {
  const focusables = Array.from(container.querySelectorAll('button, input, [role="button"]'));

  let focusIndex = 0;
  for (let i = 0; i < focusables.length; i += 1) {
    if (focusables[i] === currentFocus) {
      focusIndex = i;
      break;
    }
  }

  return {
    focusables,
    focusIndex,
  };
};

export default function focusTrap(e, container) {
  const focusData = getFocusables(container, e.target);

  const isOutsideContainer = !container.contains(e.target);

  if (focusData.focusIndex >= focusData.focusables.length - 1 || isOutsideContainer) {
    e.preventDefault();
    focusData.focusables[0].focus();
  }
}
