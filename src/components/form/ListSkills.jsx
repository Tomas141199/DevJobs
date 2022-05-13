import { skills } from "./../../helpers/getSkills";
import { useState } from "react";
const ListSkills = ({ setSkillList, actives }) => {
  const [habilidades, setHabilidades] = useState(new Set());

  const activar = (e) => {
    if (e.target.classList.contains("bg-primary-jade")) {
      e.target.classList.remove("bg-primary-jade", "text-white");
      // Eliminar del set de habilidades
      habilidades.delete(e.target.textContent);
    } else {
      e.target.classList.add("bg-primary-jade", "text-white");
      // Agregar al set de habilidades
      habilidades.add(e.target.textContent);
    }
    const stringHabilidades = Array.from(habilidades).join(",");
    setSkillList(stringHabilidades);
  };

  return (
    <div>
      <label className="text-xs">Habilidades requeridas</label>
      <ul className="flex flex-wrap">
        {skills.map((skill, index) => (
          <li
            key={index}
            onClick={activar}
            className="duration-300  text-sm border border-gray-500 px-10 py-1 rounded-sm mb-3 mr-4 cursor-pointer"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListSkills;
