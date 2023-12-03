import { memo } from "react"

export const Small = memo(({value}) => {
    console.log('Me dibujo :c')
  return (
    <small>{value}</small>
  )
})