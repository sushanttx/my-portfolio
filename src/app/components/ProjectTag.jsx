import React from 'react'

const ProjectTag = ({name, onClick, isSelected}) => {
    const buttonStyles = isSelected ? "text-white bg:blue-300" : "text-[#ADB7BE] border-slate-600 hover:text-white"
  return (
    <button className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`} onClick={() => onClick(name)}>
        {name}
    </button>
  )
}

export default ProjectTag