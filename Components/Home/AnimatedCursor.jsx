import React from 'react'
import dynamic from 'next/dynamic'

const AnimatedCursor = () => {
    const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
        ssr: false
      });
      return (
        <div>
              <AnimatedCursor
                innerSize={12}
                outerSize={18}
                color='56,237,177'
                outerAlpha={0.4}
                innerScale={0.7}
                outerScale={5}
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
                        '.link'
                    ]}
                />
        </div>
      );
}

export default AnimatedCursor