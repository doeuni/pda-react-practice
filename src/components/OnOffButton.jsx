import { useState, useEffect } from 'react';

export default function OnOffButton() {
  const [buttonName, setButtonName] = useState('OFF');
  // const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    if (buttonName == 'ON') {
      console.log('on이야');
    } else {
      console.log('off야');
    }
  }, [buttonName]);

  return (
    <div>
      <button
        onClick={() => {
          if (buttonName == 'ON') {
            setButtonName('OFF');
          } else {
            setButtonName('ON');
          }
        }}
      >
        {buttonName}
      </button>
    </div>
  );
}
