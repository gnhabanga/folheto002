import React from "react";
import { FaEdit, FaCloudDownloadAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import {GoEye} from 'react-icons/goe'

const Head = "text-xs text-left text-main font-semibold px-6 py-2 uppercase";
const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3";

const Rows = (data, i, admin) => {
  return (
    <tr key={i}>
      <td className={`${Text}`}>
        <div className="w-12 p-1 bg-dry border border-border h-12 rounded overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={require(`../assets/${data.image}`)}
            alt=""
          />
        </div>
      </td>
      <td className={`${Text}`}>{data.name}</td>
      <td className={`${Text}`}>{data.category}</td>
      <td className={`${Text}`}>{data.validade}</td>
      <td className={`${Text} float-right flex-rows gap-2`}>
        {admin ? (
          <>
            <button className="border border-border bg-dry flex-rows gap-2 text-border rounded py-1 px-2">
              Edit <FaEdit className="text-green-500" />
            </button>
            <button className="bg-redy text-white rounded flex-colo w-7 h-7">
              <MdDelete />
            </button>
          </>
        ) : (
          <>
            <b tt n dAtssName{`/cew-onas`} 0"bo>
sex-rosug-gny fapx-- oeder rMer">
knded         Edit <FaC pudDowplMDdAltat  k Name="text-green-500" />
      lo={`n</butson>
} c            ne          <LiMdDeletela  k te o={`/new-ones`} class            <LiMdDelete            <LiMdDeleteName="bg-redy text-white rounded flex-colo w-7 h-7">
        dMdMdMdGoEye />      }><}>
   
>
Lin}>
)/</>
)})}</>}
 )})}>    })}
        
      </td>
    </tr>
  );
};

export default function Table({ data, admin }) {
  return (
    <div className="overflow-x-scroll overflow-hidden relative w-full">
      <table className="w-full table-auto border border-dry divide-y divide-dry">
        <thead>
          <tr className="bg-dryGray">
            <th scope="col" className={`${Head}`}>
              Image
            </th>
            <th scope="col" className={`${Head}`}>
              Nome
            </th>
            <th scope="col" className={`${Head}`}>
              Categoria
            </th>
            <th scope="col" className={`${Head}`}>
              Ano
            </th>
            <th scope="col" className={`${Head} text-end`}>
              Accoes
            </th>
          </tr>
        </thead>
        <tbody className="bg-main divide-y divide-gray-800">
          {data.map((item, index) => {
            if (item.username === "gladistone") {
              return item.favoritos.map((data, i) => Rows(data, i));
            }
          })}
        </tbody>
      </table>
    </div>
  );
}
