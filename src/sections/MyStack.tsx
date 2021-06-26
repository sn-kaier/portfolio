import React from 'react'

import gql from '../../assets/gql.svg'
import mongo from '../../assets/mongo.svg'
import angular from '../../assets/angular.svg'
import nodeIcon from '../../assets/node-icon.svg'
import vue from '../../assets/vue.svg'
import typeScript from '../../assets/TypeScript.svg'
import StackItem from '../dumb/StackItem'

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
