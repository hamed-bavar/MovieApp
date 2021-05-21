import  { useLayoutEffect, useState } from 'react';
function useDevice() {
  const [Device, setDevice] = useState([""]);
  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth < 590)
        setDevice(["Mobile"])
      else if (window.innerWidth < 860)
        setDevice(["Tablet"])
      else
        setDevice(["Desktop"])
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return Device;
}

export default useDevice;