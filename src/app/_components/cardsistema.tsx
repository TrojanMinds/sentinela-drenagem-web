import Box from "./boxcardsistema";

export default function CardsSistema() {
  return (
    <div className="flex w-screen flex-col items-center">
      <Box title="Geração de relatórios">
        <div>
          <p>
            <span className="ml-1">O</span> sistema é capaz de gerar relatórios automáticos detalhades sobre a
            eficiência do sistema de drenagem urbana. Esses relatórios são
            baseados nos dados coletados em tempo real pelos sensores instalados
            nos bueiros e canals de drenagem.
          </p>
          <p>Cada relatório destaca:</p>
          <p className="ml-4">
            <span className="text-Yellow">• Eficiência da drenagem:</span> Avalia o desempenho dos sistemas de
            escoamento, identificando áreas com bom funcionamento e aquelas que
            apresentam fluxo reduzido ou bloqueios frequentes.
          </p>
          <p className="ml-4 mb-4">
            <span className="text-Yellow">• Pontos criticos: </span>Identifica e classifica as áreas mais vulneráveis,
            onde há maior risco de obstruções ou inundações, com base em
            ocorrências anteriores e o volume de água monitorado.
          </p>
          <p className="text-xl">Análise Preditiva</p>
          <p className="ml-4">
            A partir dos dades históricos e de informações meteorológicas, o
            sistema utiliza algoritmos de análise preditiva para antecipar áreas
            de risco, com base no comportamento passado dos bueiros e previsões
            de chuvas, o sistema pode prever futuras obstruções ou enchentes,
            permitindo uma resposta proativa e eficiente, isso auxilia na
            priorização de manutenções preventivas, reduzindo riscos e custos
            com danes causados por inundações.
          </p>
        </div>
      </Box>
      <Box title="Armazenamento e histórico de dados">
        <div></div>
      </Box>
      <Box title="Alertas e notificações">
        <div></div>
      </Box>
      <Box title="Manutenção preditiva">
        <div></div>
      </Box>
      <Box title="Modelos previsionais">
        <div></div>
      </Box>
    </div>
  );
}
