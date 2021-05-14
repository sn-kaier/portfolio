import React, { MouseEventHandler, PropsWithChildren } from 'react'

const Button = (props: PropsWithChildren<{ click: MouseEventHandler }>) => {
  return (
    <button
      onClick={props.click}
      className="bg-blue-500 text-white rounded px-3 font-bold transition focus:outline-none select-none hover:ring ring-yellow-400 ring-offset-2">
      {props.children}
    </button>
  )
}

export default Button
