import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group' // ES6



const Fader = ({ children }) => (
      <CSSTransitionGroup
        transitionName='example'
        transitionEnterTimeout={500}
        transitionLeaveTimeout={200}
        className='fader-parent'
        >
        { children }
      </CSSTransitionGroup>
    
)

export default Fader;