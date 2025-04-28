import React from 'react'

const PlaceholderCard = () => {
  return (
    <fieldset className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-y-2.5 paper min-h-[4.6rem] rounded-xl py-3 px-6 border border-gray-100 animate-pulse">
      <div className="space-y-1">
        <div className="placeholder-color h-5 w-32"></div>

        <div className="flex items-center gap-3">
          <div className="placeholder-color h-5 w-28"></div>
          <div className="placeholder-color h-5 w-16 rounded-full"></div>
        </div>
      </div>

      <div className="space-y-1 flex flex-col items-end">
        <div className="placeholder-color h-5 w-14"></div>

        <div className="placeholder-color h-5 w-36"></div>
      </div>
    </fieldset>
  )
}

export default PlaceholderCard