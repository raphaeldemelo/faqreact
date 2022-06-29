import {
  Container,
  Card,
  Titulo,
  Detalhes,
  Sumario,
  Resposta,
  Conteudo
} from './styles'

export default function App () {
  return (
    <Container>
      <Card>
        <Titulo>DÚVIDAS FREQUENTES</Titulo>

        <Conteudo>
          <Detalhes>
            <Sumario>O que seria esse projeto?</Sumario>
            <Resposta>
              {' '}
              Seria um projeto com perguntas frequentes, nele também é possível
              treinar responsividade
            </Resposta>
          </Detalhes>

          <Detalhes>
            <Sumario>Posso colocar esse projeto no meu portfólio?</Sumario>
            <Resposta>
              Com certeza. Fique à vontade para usar o que você construir em seu
              portfólio ou até mesmo colocar no seu github, linkedin.
            </Resposta>
          </Detalhes>

          <Detalhes>
            <Sumario>Como acesso a comunidade?</Sumario>
            <Resposta>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              suspendisse iaculis turpis at vel duis interdum.
            </Resposta>
          </Detalhes>

          <Detalhes>
            <Sumario>Como acesso os desafios premium?</Sumario>
            <Resposta>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              suspendisse iaculis turpis at vel duis interdum.
            </Resposta>
          </Detalhes>
        </Conteudo>
      </Card>
    </Container>
  )
}
