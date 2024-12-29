import React from 'react'

export default function SectionTitle({title, text}) {
  return (
    <div>
         <h1 className={`text-${text} xl:text-[120px] lg:text-[90px] sm:text-[80px] xs:text-[56px] text-[45px] xl:leading-[110px] lg:leading-[90px] leading-[49px] sm:leading-[72px] text-primary font-medium`}>
          {title}
        </h1>
    </div>
  )
}
