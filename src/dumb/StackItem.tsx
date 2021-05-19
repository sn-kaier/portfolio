import React, { MouseEventHandler } from 'react'

import classes from './StackItem.module.css';

const StackItem = (props: { click?: MouseEventHandler, imgUrl: string, title: string }) => {
  return (
    <div
      onClick={props.click}
      className={classes.StackItem}>
      <img className="w-12" src={props.imgUrl} alt='' />
      {props.title}
    </div>
  )
}

export default StackItem
