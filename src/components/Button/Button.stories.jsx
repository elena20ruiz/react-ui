import React from "react";
import { Button } from "../..";


export default {
  title: 'Button',
  component: Button,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["primary", "secondary", "tertiary"]
      }
    },
    text: {control: "text"}
  }
};

function onClick () {
  alert("Hello! I am an alert box!!");
}

export const Primary = () => <Button type="primary" text="Primary Button"/>;
export const Secondary = () => <Button type="secondary" text="Secondary Button" />;
export const Tertiary = () => <Button type="tertiary" text="Tertiary Button" />;
export const All = () => {
  return (
    <div>
      <Button type="primary" text="Primary Button" onClick={() => onClick()}/>
      <Button type="secondary" text="Secondary Button" onClick={() => onClick()}/>
      <Button type="tertiary" text="Tertiary Button" onClick={() => onClick()}/>
    </div>
  )
}
