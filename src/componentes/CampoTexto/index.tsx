import React from 'react';
import './CampoTexto.css'

interface CampoTextoProps {
  label: string;
  valor: string;
  obrigatorio?: boolean;
  placeholder: string;
  aoAlterado: (texto: string) => void;
}

const CampoTexto = (props: CampoTextoProps) => {

  const placeholderModificada = `${props.placeholder}...`

  const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
    props.aoAlterado(evento.target.value)
  }

  return (
    <div className="campo-texto">
      <label>
        {props.label}
      </label>
      <input value={props.valor} onChange={aoDigitado} required={!!props.obrigatorio} placeholder={placeholderModificada} />
    </div>
  )
}

export default CampoTexto