"use client"
import { useEffect, useState } from "react"

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#000')

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length)
  }

  useEffect(() => {
    if (typeOfColor === 'rgb') handleCreateRandomRgbColor()
    else handleCreateRandomHexColor()
  }, [typeOfColor])

  function handleCreateRandomHexColor() {
    const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

    let hexColor = "#"

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)]
    }
    setColor(hexColor)
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256)
    const g = randomColorUtility(256)
    const b = randomColorUtility(256)

    setColor(`rgb(${r},${g},${b})`)
  }

  return (
    <div
      style={{ background: color }}
      className="flex flex-col items-center justify-center w-screen h-screen"
    >
      <button
        className="px-4 py-2 my-2 text-white bg-blue-500 rounded"
        onClick={() => setTypeOfColor('hex')}>
        Generate HEX Color
      </button>
      <button
        className="px-4 py-2 my-2 text-white bg-blue-500 rounded"
        onClick={() => setTypeOfColor('rgb')}>
        Generate RGB Color
      </button>
      <button 
        className="px-4 py-2 my-2 text-white bg-blue-500 rounded"
        onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>
        Generate Random Color
      </button>

      <div
        className="flex flex-col items-center gap-4 mt-10 text-6xl text-white"
      >
        <h3>{typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  )
}
