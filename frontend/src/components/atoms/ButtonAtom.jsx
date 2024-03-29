import React from 'react'
import Button from '@mui/material/Button';

export default function ButtonAtom({children, ...props}) {
  return (
    <>
    <Button {...props}>{children}</Button>
    </>
  )
}
