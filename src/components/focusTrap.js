// helper function to get focusable elements from container
// expects two arguments, container: ref and currentFocus: event.target
// returns an object containing focusables: array of elements and currentFocus: number
const getFocusables = (container, currentFocus) => {
  // create array of focusable elements that are children of container
  const focusables = Array.from(container.querySelectorAll('button, input, [role="button"]'));

  // initialize index of current focus
  let focusIndex = 0;
  // iterate through focusables array
  for (let i = 0; i < focusables.length; i += 1) {
    // if current focus is found in focusables array, set focusIndex to i (current index) and break out of loop
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

// custom focus trap function tab navigation
export default function focusTrap(e, container) {
  // call helper function to get focusables and current focus
  const focusData = getFocusables(container, e.target);

  // determine if current focus is parent/ancestor of container
  const isOutsideContainer = !container.contains(e.target);

  // if current focus is outside container or focus is on last focusable element, set focus to first focusable element in container
  if (focusData.focusIndex >= focusData.focusables.length - 1 || isOutsideContainer) {
    // prevent default tab behavior
    e.preventDefault();
    // set focus to first focusable element in container
    focusData.focusables[0].focus();
  }
}
