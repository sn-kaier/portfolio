import React from 'react'

import gql from '../../assets/tech-icons/gql.svg'
import mongo from '../../assets/tech-icons/mongo.svg'
import angular from '../../assets/tech-icons/angular.svg'
import nodeIcon from '../../assets/tech-icons/node-icon.svg'
import vue from '../../assets//tech-iconsvue.svg'
import typeScript from '../../assets/tech-icons/TypeScript.svg'
import StackItem from '../dumb/StackItem/StackItem'

const MyStack = () => {
  const items = [
    {
      name: 'Angular',
      icon: angular,
    },
    {
      name: 'Vue',
      icon: vue,
    },
    {
      name: 'Node.js',
      icon: nodeIcon,
    },
    {
      name: 'TypeScript',
      icon: typeScript,
    },
    {
      name: 'GraphQL',
      icon: gql,
    },
    {
      name: 'MongoDB',
      icon: mongo,
    },
  ]

  return (
    <div className="flex mx-auto justify-center flex-wrap">
      {items.map(({ icon, name }) => (
        <StackItem imgUrl={icon} title={name} />
      ))}
    </div>
  )
}

export default MyStack
