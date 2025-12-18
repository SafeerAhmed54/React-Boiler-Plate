import React from 'react'

const SectionTitle = ({sectionDescription,sectionTitle , isCenter = false , titleClass , descClass}) => {

  return (
    <div className={`flex flex-col gap-2 ${isCenter ? "items-center" : "items-start"}`}>
      <h2 className={`${titleClass}`}>{sectionTitle}</h2>
      <p className={`${descClass}`}>{sectionDescription}</p>
    </div>
  )
}

export default SectionTitle
