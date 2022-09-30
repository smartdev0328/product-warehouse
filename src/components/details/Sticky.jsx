import { useState } from 'react'
const drawMenu = (menuIsOpen) => {
  if (menuIsOpen) {
    return (
      <div className="relative">
        <div className="absolute top-[16px] right-[-4px] w-[120px] h-fit bg-card rounded-md menu-drop p-1">
          <p className="p-1 text-white text-center text-base hover:bg-mainBack rounded-sm cursor-pointer">TV</p>
          <p className="p-1 text-white text-center text-base hover:bg-mainBack rounded-sm  cursor-pointer">Laptop</p>
          <p className="p-1 text-white text-center text-base hover:bg-mainBack rounded-sm cursor-pointer">Shoes</p>
        </div>
      </div>
    )
  }
}
export default function Sticky() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <div className="fixed top-16 right-4 w-[30px] h-[30px] bg-card rounded-lg p-[4px] flex justify-center items-center" onClick={() => setMenuIsOpen(!menuIsOpen)} >
      <img src="/img/list.svg" className="w-[22px]" />
      {drawMenu(menuIsOpen)}
    </div>
  )
}