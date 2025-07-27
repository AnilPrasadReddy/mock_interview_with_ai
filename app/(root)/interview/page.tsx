import Agent from '@/components/Agent'
import React from 'react'

function page() {
  return (
    <div>
      <h1>Interview Page</h1>
      <Agent userName={"You"} userId='1' type='generate'/>
    </div>
  )
}

export default page
