import React, { PropsWithChildren } from 'react'

const BgSection = (props: PropsWithChildren<{imgUrl: string}>) => (
  <section className="flex text-white bg-cover" style={{ backgroundImage: `url(${props.imgUrl})` }}>
    {props.children}
  </section>
)

export default BgSection
