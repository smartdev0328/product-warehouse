import { useState } from "react"

const attr = {
  "TV": [
    { "Screen Type": ["LED", "LCD", "OLED"] },
    { "Screen Size": 0 },
  ],
  "Laptops": [
    { "Processor": ["Intel", "AMD"] },
    { "Ram Memory": 0 },
  ],
  "Shoes": [
    { "Material": ["Leather", "Plastic"] },
    { "Number/Size": 0 },
  ]
}
export default function Register() {
  const [attrNames, setAttrNames] = useState(attr["TV"]);
  console.log(Object.keys(attr))
  const changeCategory = (e) => {
    console.log(e.target.value)
    setAttrNames(attr[e.target.value]);
  }

  return (
    <div className="flex w-full h-full items-center justify-center">
      <div className="w-2/4 p-6 justify-around h-fit rounded-xl bg-card shadow-sm hover:shadow-slate-700 text-white">
        <div className="flex items-center justify-between my-4">
          Category:
          <select onChange={changeCategory} defaultValue={'Choose one'} className="rounded-md w-48 text-black p-1">
            {
              Object.keys(attr).map((item, idx) => (
                <option value={item} key={idx}>{item}</option>
              ))
            }
          </select>
        </div>
        <div className="flex items-center justify-between my-4">
          Name:
          <input className="w-48 rounded-md outline-none px-3 py-1 focus:outline-cyan-300"></input>
        </div>
        <div className="flex items-center justify-between my-4">
          SKUs:
          <input className="w-48 rounded-md outline-none px-3 py-1 focus:outline-cyan-300"></input>
        </div>
        <div className="flex items-center justify-between my-4">
          Brand:
          <input className="w-48 rounded-md outline-none px-3 py-1 focus:outline-cyan-300"></input>
        </div>
        <div className="flex items-center justify-between my-4">
          Cost:
          <input className="w-48 rounded-md outline-none px-3 py-1 focus:outline-cyan-300"></input>
        </div>
        {
          <div className="flex items-center justify-between my-4">
            {Object.keys(attrNames[0])[0]}:
            <select defaultValue={'Choose one'} className="rounded-md w-48 text-black p-1">
              {
                attrNames[0][Object.keys(attrNames[0])[0]].map((item, idx) => (
                  <option value={item} key={idx}>{item}</option>
                ))
              }
            </select>
          </div>
        }
        <div className="w-full flex justify-end">
          <button className="px-5 py-2 rounded-md bg-yellow-700 w-fit hover:bg-yellow-500">Register</button>
        </div>
      </div >
    </div>

  )
}