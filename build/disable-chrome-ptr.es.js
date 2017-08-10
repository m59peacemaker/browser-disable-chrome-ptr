// https://docs.google.com/document/d/12Ay4s3NWake8Qd6xQeGiYimGJ_gCe0UMDZKwP9Ni4m8/edit#

const disableChromePtr = ({ disablePullGlow = true } = {}) => {
  let shouldDisablePtr, lastTouchY;

  const touchstart = e => {
    lastTouchY = 0;
    shouldDisablePtr = window.pageYOffset === 0;
  };

  const touchmove = e => {
    const touchY = e.touches[0].clientY;
    const touchYDelta = touchY - lastTouchY;
    lastTouchY = touchY;

    if (shouldDisablePtr) {
      shouldDisablePtr = false;

      if (touchYDelta > 0) {
        return e.preventDefault()
      }
    }

    if (disablePullGlow && window.pageYOffset === 0 && touchYDelta > 0) {
      return e.preventDefault()
    }
  };

  document.addEventListener('touchstart', touchstart, { passive: true }),
  document.addEventListener('touchmove', touchmove, { passive: false });

  return () => {
    document.removeEventListener('touchstart', touchstart);
    document.removeEventListener('touchmove', touchmove);
  }
};

export default disableChromePtr;
