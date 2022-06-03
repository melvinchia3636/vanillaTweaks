import React from 'react';

// Ts-ignore
import Lottie from 'react-lottie';
import loadingAnim from './loadingAnim.json';

function Loading() {
  return (
    <Lottie
      options={{
        loop: true,
        autoplay: true,
        animationData: loadingAnim,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      }}
      height={160}
      width={160}
      isStopped={false}
      isPaused={false}
    />
  );
}

export default Loading;
