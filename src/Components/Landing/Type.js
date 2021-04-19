import React from 'react'
import Typewriter from 'typewriter-effect'

function Type() {
  return (
    <div>
      <Typewriter
        options={{
          strings: [
            'Web Developer',
            'Driven Individual',
            'Loving Father',
            'Dedication Guru',
            'Expert Communicator'
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
        />
      </div>
  )
}

export default Type
