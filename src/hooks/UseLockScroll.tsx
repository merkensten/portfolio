import * as React from 'react';

function UseLockScroll() {
  const lockScroll = React.useCallback(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  const unlockScroll = React.useCallback(() => {
    document.body.style.overflow = '';
  }, []);

  return { lockScroll, unlockScroll };
}

export default UseLockScroll;
