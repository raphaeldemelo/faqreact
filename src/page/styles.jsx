import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: rgb(20, 22, 37);
  background: linear-gradient(
    0deg,
    rgba(20, 22, 37, 1) 0%,
    rgba(30, 36, 79, 1) 50%
  );
  align-items: center;
  justify-content: center;
`

export const Card = styled.main`
  background-color: #fff;
  width: 919px;
  height: 515px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 90%;
  }
`
export const Titulo = styled.h1`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
`
export const Detalhes = styled.details`
  background-color: #f2f2f2;
  display: flex;
  width: 90%;
  border-radius: 8px;
  border: 1px solid #b8b8b8;
  padding: 1rem 1.6rem;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 90%;
    padding: 10px;
  }
`

export const Conteudo = styled.main`
  display: flex;
  width: 90%;
  flex-direction: column;
  gap: 14px;

  @media (max-width: 768px) {
    width: 90%;
    padding: 10px;
  }
`

export const Sumario = styled.summary`
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const Resposta = styled.p`
  font-size: 11.68px;
  font-weight: 400;
  color: #878787;
`
