import Box from "./boxcards";

export default function CardsSistema() {
  return (
    <div className="flex w-screen flex-col items-center">
      <Box title="Geração de relatórios">
        <div>
          <p>
            <span className="ml-1">O</span> sistema é capaz de gerar relatórios
            automáticos detalhades sobre a eficiência do sistema de drenagem
            urbana. Esses relatórios são baseados nos dados coletados em tempo
            real pelos sensores instalados nos bueiros e canals de drenagem.
          </p>
          <p>Cada relatório destaca:</p>
          <p className="ml-4">
            <span className="text-Yellow">• Eficiência da drenagem:</span>{" "}
            Avalia o desempenho dos sistemas de escoamento, identificando áreas
            com bom funcionamento e aquelas que apresentam fluxo reduzido ou
            bloqueios frequentes.
          </p>
          <p className="mb-4 ml-4">
            <span className="text-Yellow">• Pontos criticos: </span>Identifica e
            classifica as áreas mais vulneráveis, onde há maior risco de
            obstruções ou inundações, com base em ocorrências anteriores e o
            volume de água monitorado.
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
        <div>
          <p>
            O sistema armazena de forma contínua e segura os dados coletados
            pelos sensores sobre o desempenho dos bueiros e canais de drenagem
            ao longo do tempo. Essas informações incluem:
          </p>
          <div className="ml-4">
            <p>
              <span className="text-Yellow">•Níveis de água monitorados:</span>{" "}
              Registros sobre o comportamento do fluxo de água nos bueiros, como
              variações sazonais ou após chuvas intensas.
            </p>
            <p>
              <span className="text-Yellow">•Ocorrências de obstruções: </span>
              Histórico de detecção de bloqueios ou entupimentos e a rapidez com
              que foram resolvidos.
            </p>
            <p>
              <span className="text-Yellow">
                •Dados meteorológicos correlacionados:
              </span>{" "}
              Conexão com informações sobre chuvas e eventos climáticos,
              permitindo análises detalhadas sobre o impacto das condições
              climáticas no desempenho da drenagem
            </p>
          </div>
        </div>
      </Box>
      <Box title="Alertas e notificações">
        <div>
          <p>
            {" "}
            O sistema de monitoramento de drenagem utiliza um robusto mecanismo
            de alertas automáticos, que visa garantir uma resposta rápida e
            eficiente em caso de obstruções ou riscos iminentes de enchentes.
            Esses alertas são enviados automaticamente para os públicos
            relevantes, como equipes de manutenção, autoridades competentes e
            moradores locais, por meio de SMS, email ou aplicativo móvel.
          </p>
          <h3 className="mt-4 text-2xl">Alertas Automáticos</h3>
          <p>
            Quando o sistema detecta um entupimento nos bueiros ou canais de
            drenagem ou identifica um aumento significativo no nível da água,
            ele envia notificações automáticas em tempo real. Isso possibilita
            uma ação imediata, seja para prevenir uma enchente ou para iniciar
            manutenções de emergência.
          </p>
          <h3 className="mt-4 text-2xl">Alertas Personalizados</h3>
          <p>
            Os usuários podem personalizar o sistema de alertas de acordo com
            suas necessidades. Moradores e comerciantes podem escolher monitorar
            áreas específicas (como suas residências ou locais de trabalho),
            recebendo notificações apenas dos pontos de interesse selecionados.
            Isso permite um acompanhamento direcionado, melhorando a eficiência
            na comunicação de riscos.
          </p>
          <h3 className="mt-4 text-2xl">Escalonamento de Alertas</h3>
          <p>
            O sistema diferencia entre situações de manutenção preventiva e em
            ergências. Para isso, os alertas são classificados por criticidade,
            com avisos para manutenção preventiva sendo enviados antecipadamente
            para as equipes responsáveis, enquanto alertas de emergência são
            direcionados para autoridades e grupos de resposta rápida. Esse
            escalonamento permite uma alocação eficiente de recursos e evita a
            sobrecarga de notificações para os usuários.
          </p>
        </div>
      </Box>
      <Box title="Manutenção preditiva">
        <div>
          <p>
            {" "}
            O sistema de monitoramento de drenagem é projetado para ir além da
            simples detecção de problemas em tempo real. Ele integra dados
            meteorológicos e históricos, permitindo uma abordagem preditiva para
            a manutenção das infraestruturas de drenagem. Utilizando essas
            informações, o sistema gera cenários de risco detalhados, simulando
            possíveis enchentes e identificando áreas com maior probabilidade de
            enfrentar problemas futuros. Essa simulação preventiva ajuda a
            prever a necessidade de intervenções antes que os problemas ocorram,
            permitindo que a equipe de manutenção tome medidas proativas. Com
            base nas previsões de chuvas intensas ou mudanças climáticas, o
            sistema pode recomendar ou agendar automaticamente manutenções
            preventivas nas áreas mais vulneráveis, garantindo que o fluxo de
            água nos bueiros e canais de drenagem continue eficiente e
            prevenindo obstruções antes que causem enchentes. Além disso, o
            sistema prioriza as áreas de intervenção com base na urgência,
            otimizando os recursos e assegurando que os pontos críticos sejam
            resolvidos antes que situações emergenciais se desenvolvam. Isso não
            apenas reduz o risco de enchentes, mas também diminui custos
            operacionais a longo prazo, promovendo um sistema de drenagem mais
            eficiente e sustentável.
          </p>
        </div>
      </Box>
      <Box title="Modelos previsionais">
        <div>
          <p>
            Os modelos previsionais no sistema de monitoramento de drenagem são
            uma ferramenta essencial para antecipar enchentes e riscos de
            obstrução, baseando-se em dados meteorológicos e históricos. O
            sistema se integra com previsões do tempo, correlacionando-as com o
            fluxo de água nos bueiros e canais de drenagem. Quando há uma
            previsão de chuvas intensas ou condições climáticas adversas, o
            sistema utiliza esses dados para gerar cenários de risco em tempo
            real. Esses cenários simulam situações em que o nível da água pode
            subir rapidamente, indicando áreas críticas com maior chance de
            inundação ou bloqueios. A análise desses cenários permite prever
            onde as obstruções podem ocorrer e quais locais estão mais
            vulneráveis. Isso oferece uma vantagem significativa para que ações
            preventivas sejam tomadas antes que o problema se agrave. Com essa
            abordagem, as autoridades e equipes de manutenção podem planejar
            intervenções preventivas com antecedência, minimizando o impacto das
            enchentes e evitando emergências. Além disso, os modelos
            previsionais ajudam a direcionar recursos de forma mais eficiente,
            priorizando áreas com maior risco e potencial de obstrução,
            resultando em uma gestão mais eficaz da drenagem urbana.
          </p>
        </div>
      </Box>
    </div>
  );
}
