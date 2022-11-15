import React, { ReactElement } from 'react'

interface Props{
  title: string;
  children: React.ReactNode;
}

const Tab: React.FC<Props> = ({ children }) => {
  return <>{children}</>
}

export default Tab