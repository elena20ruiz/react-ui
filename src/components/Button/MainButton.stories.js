
import React from 'react'
import MainButton from './MainButton.jsx'
import { withKnobs } from '@storybook/addon-knobs'
export default { title: 'Main button component', decorators: [withKnobs]}

export const button = () => {
  return <MainButton message={"Hello"}></MainButton>
}