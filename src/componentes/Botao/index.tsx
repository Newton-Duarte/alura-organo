import { ReactNode } from 'react'
import './Botao.css'

interface BotaoProps {
  children: ReactNode;
}

export const Botao = ({ children }: BotaoProps) => {
  return (
    <button className='botao'>
      {children}
    </button>
  );
}