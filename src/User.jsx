import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {

    const {firstName, lastName} = useParams();
  return (
    <div>
      <h1>This is user {firstName} {lastName} Page</h1>
    </div>
  )
}
