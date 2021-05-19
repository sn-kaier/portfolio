import React, { PropsWithChildren } from 'react'
import imgUrl from '../../assets/stardust.jpg';

const BgSection = (props: PropsWithChildren<{}>) => (
  <section className="text-white bg-cover" style={{ backgroundImage: `url(${imgUrl})` }}>
    {props.children}
  </section>
)

export default BgSection
