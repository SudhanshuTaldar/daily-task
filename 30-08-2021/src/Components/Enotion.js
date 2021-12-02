import { css  } from '@emotion/css'
import React from 'react'

export default function Emotionex() {
const color = 'white';
return (
<div>



<div
className={css`
padding: 32px;
background-color: hotpink;
font-size: 24px;
border-radius: 4px;
&:hover {
color: ${color};
}
`}
>
Hover to change color.
</div>

</div>
)
}