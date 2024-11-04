import AnimatedCursor from "react-animated-cursor";
export default function CursorMove() {
  return (
    <>
       <AnimatedCursor
      innerSize={0}
      outerSize={20}
      color='193, 11, 111'
      outerAlpha={0.2}
      innerScale={1}
      outerScale={5}
      showSystemCursor={true}
      
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        {
          target: '.custom',
          options: {
            innerSize: 12,
            outerSize: 12,
            color: '255, 255, 255',
            outerAlpha: 0.3,
            innerScale: 0.7,
            outerScale: 5
          }
        }
      ]}
    />
    </>
  );
}
