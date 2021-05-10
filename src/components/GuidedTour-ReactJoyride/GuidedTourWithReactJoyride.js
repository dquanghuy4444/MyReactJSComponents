import './GuidedTourWithReactJoyride.css';
import Joyride, { CallBackProps, STATUS, Step, StoreHelpers } from 'react-joyride';

function GuidedTourWithReactJoyride() { 
  
  const steps = [
    {
      content: <h2>Let's begin our journey!</h2>,
      locale: { skip: <strong aria-label="skip">SKIP</strong> },
      placement: 'center',
      target: 'body',
    },
    {
      content: <h2>Sticky elements</h2>,
      floaterProps: {
        disableAnimation: true,
      },
      spotlightPadding: 20,
      target: '.guided3',
    },
  ]

  return (
    <div>
        <Joyride
          continuous={true}
          run={ true }
          scrollToFirstStep={true}
          showProgress={true}
          showSkipButton={true}
          steps={steps}
          styles={{
            options: {
              zIndex: 10000,
            },
          }}
        />
      <div className="guided2">
        <div className="guided3">
          Huy dz
        </div>
      </div>
    </div>
  );
}

export default GuidedTourWithReactJoyride;
