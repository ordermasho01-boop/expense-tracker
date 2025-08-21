import React from 'react'
import { getInitials } from '../utils/getInitials'

const CharAvatar = ({fullName, height, width, style}) => {
  return (
    <div className={`${width || 'w-12'} ${height || 'h-12'} ${style || ''} flex items-center rounded-full font-medium text-gray-900 bg-gray-100`}>
        {getInitials(fullName || "")}
    </div>
  )
}

export default CharAvatar