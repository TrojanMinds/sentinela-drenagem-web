import Box from "./boxcards";
import Button from "./button";
import Lista from "./lista";
import ItemLista from "./item-lista";

export default function CardsMonetizacao() {
  return (
    <div className="flex w-screen flex-col items-center">
      <Box title="Para Prefeituras: Sistema de Monitoramento e Manutenção de Drenagem">
        <p className="mb-4">
          Para atender às necessidades das prefeituras e garantir a eficácia do
          sistema de monitoramento e manutenção preventiva, o Sentinela de
          Drenagem oferece planos de assinatura personalizados, ajustados ao
          tamanho e à complexidade das cidades. Esses planos visam ajudar na
          gestão eficiente da infraestrutura de drenagem, reduzindo riscos de
          enchentes e melhorando a manutenção preventiva.
        </p>
        <h2 className="mb-4 text-xl">Pacotes disponíveis:</h2>
        <div className="flex">
          <div>
            <h4>1. Plano Básico - R$ 10.000,00/mês</h4>
            <div className="flex flex-col">
              <Lista>
                <ItemLista text="• Ideal para cidades pequenas com até 100 sensores."></ItemLista>
                <ItemLista text="• Monitoramento em tempo real do fluxo de água e obstruções em bueiros e canais."></ItemLista>
                <ItemLista text="• Relatórios mensais sobre o desempenho da drenagem e pontos críticos."></ItemLista>
                <ItemLista text="• Notificações automáticas para equipes de manutenção e autoridades via SMS e email."></ItemLista>
                <ItemLista text="• Suporte técnico básico com tempo de resposta de 48 horas."></ItemLista>
              </Lista>
              <h4>2. Plano Intermediário - R$ 25.000,00/mês</h4>
              <Lista>
                <ItemLista text="• Ideal para cidades de médio porte com até 300 sensores."></ItemLista>
                <ItemLista text="• Todas as funcionalidades do Plano Básico, além de:"></ItemLista>
                <ItemLista text="• Relatórios quinzenais e histórico de dados detalhados"></ItemLista>
                <ItemLista text="• Alertas personalizados e sistema de escalonamento para diferentes níveis de emergência."></ItemLista>
                <ItemLista text="• Integração com dados meteorológicos para simulações de risco."></ItemLista>
                <ItemLista text="• Suporte técnico prioritário com tempo de resposta de 24 horas."></ItemLista>
                <ItemLista text="• Portal público para que moradores possam monitorar o status da drenagem em suas áreas."></ItemLista>
              </Lista>
            </div>
          </div>

          <div className="flex flex-col">
            <h4>Plano Avançado - R$ 50.000,00/mês</h4>
            <Lista>
              <ItemLista text="• Ideal para grandes cidades com até 500 sensores."></ItemLista>
              <ItemLista text="• Inclui todas as funcionalidades dos Planos Básico e Intermediário, além de:"></ItemLista>
              <ItemLista text="• Relatórios semanais e históricos completos, incluindo análise preditiva de futuras obstruções."></ItemLista>
              <ItemLista text="• Agendamento automático de manutenções preventivas."></ItemLista>
              <ItemLista text="• Integração com sistemas de gerenciamento de ordens de serviço para equipes de campo."></ItemLista>
              <ItemLista text="• Simulações de risco detalhadas baseadas em dados meteorológicos e históricos."></ItemLista>
              <ItemLista text="• Suporte técnico 24/7 com resposta imediata."></ItemLista>
              <ItemLista text="• Treinamento para as equipes municipais sobre o uso da plataforma."></ItemLista>
            </Lista>

            <h4>Plano Personalizado</h4>
            <Lista>
              <ItemLista text="• Para cidades com mais de 500 sensores ou com necessidades especiais, oferecemos pacotes personalizados."></ItemLista>
              <ItemLista text="• Esses planos são ajustados com base na infraestrutura da cidade e podem incluir monitoramento expandido, integração com plataformas municipais existentes, e opções adicionais de suporte e relatórios."></ItemLista>
              <ItemLista text="• Preço sob consulta."></ItemLista>
            </Lista>
          </div>
        </div>

        <div>
          <h2 className="mb-4">Benefícios:</h2>
          <ul className="list-inside list-disc">
            <li>
              Redução de custos com manutenção corretiva, ao antecipar
              obstruções e agir preventivamente.
            </li>
            <li>
              Maior segurança para os moradores, ao diminuir os riscos de
              enchentes.
            </li>
            <li>
              Dados detalhados que ajudam na tomada de decisões sobre obras e
              expansões da infraestrutura urbana.
            </li>
            <li>
              Planejamento proativo e suporte contínuo, garantindo que o sistema
              de drenagem funcione de forma eficiente, mesmo em situações de
              chuvas intensas.
            </li>
          </ul>
        </div>

        <div className="flex w-full justify-center">
          <Button></Button>
        </div>
      </Box>

      <Box title="Marketplace de Manutenção">
        <p className="mb-4"></p>
        <h2 className="mb-4 text-xl">Modelos de assinatura:</h2>
        <div className="flex">
          <div className="flex flex-col">
            <h4>Plano Básico: R$ 200/mês</h4>
            <Lista>
              <ItemLista text="• Acesso à plataforma de gerenciamento de serviços de manutenção."></ItemLista>
              <ItemLista text="• Possibilidade de contratar até 5 serviços de manutenção por mês."></ItemLista>
              <ItemLista text="• Suporte técnico via chat durante o horário comercial."></ItemLista>
            </Lista>

            <h4>Plano Intermediário: R$ 400/mês</h4>
            <Lista>
              <ItemLista text="• Todos os benefícios do Plano Básico."></ItemLista>
              <ItemLista text="• Acesso a um número ilimitado de contratações de serviços de manutenção."></ItemLista>
              <ItemLista text="• Relatórios mensais sobre o uso da plataforma e eficácia dos serviços contratados."></ItemLista>
              <ItemLista text="• Suporte técnico prioritário com atendimento via telefone."></ItemLista>
            </Lista>
          </div>
          <div>
            <h4>Plano Premium: R$ 800/mês</h4>
            <Lista>
              <ItemLista text="• Todos os benefícios do Plano Intermediário."></ItemLista>
              <ItemLista text="• Consultoria personalizada para otimização de processos de manutenção."></ItemLista>
              <ItemLista text="• Acesso a treinamento e webinars sobre melhores práticas de gestão de serviços."></ItemLista>
              <ItemLista text="• Relatórios trimestrais detalhados, com análise de dados para tomada de decisão."></ItemLista>
            </Lista>
          </div>
        </div>

        <div>
          <h2 className="mb-4">Benefícios:</h2>
          <ul className="list-inside list-disc">
            <li>
              • Acesso a uma rede de empresas de manutenção selecionadas e
              confiáveis.
            </li>
            <li>
              • Transparência nos preços e na qualidade dos serviços oferecidos.
            </li>
            <li>
              • Facilidade de gerenciamento de contratos e pagamentos através da
              plataforma.
            </li>
          </ul>
        </div>

        <div className="flex w-full justify-center">
          <Button></Button>
        </div>
      </Box>

      <Box title="Relatórios de impacto para investidores">
        <p className="mb-4"></p>
        <h2 className="mb-4 text-xl">Modelos de assinatura:</h2>
        <div className="flex">
          <div className="flex flex-col">
            <h4>Plano Básico: R$ 250/mês</h4>
            <Lista>
              <ItemLista text="• Acesso a relatórios trimestrais sobre a eficácia da plataforma na redução de enchentes."></ItemLista>
              <ItemLista text="• Análise básica dos custos de manutenção reduzidos em comparação com períodos anteriores."></ItemLista>
              <ItemLista text="• Resumo das principais métricas de desempenho da plataforma."></ItemLista>
              <ItemLista text="• Suporte por e-mail para esclarecimento de dúvidas sobre os relatórios."></ItemLista>
            </Lista>

            <h4>Plano Intermediário: R$ 500/mês</h4>
            <Lista>
              <ItemLista text="• Todos os benefícios do Plano Básico."></ItemLista>
              <ItemLista text="• Relatórios mensais detalhados, incluindo dados comparativos e gráficos ilustrativos."></ItemLista>
              <ItemLista text="• Análise aprofundada do impacto social da plataforma em comunidades atendidas."></ItemLista>
              <ItemLista text="• Acesso a um portal online para visualizar relatórios anteriores e gerar gráficos customizados."></ItemLista>
            </Lista>
          </div>
          <div></div>
          <div>
            <h4>Plano Premium: R$ 1.000/mês</h4>
            <Lista>
              <ItemLista text="• Todos os benefícios do Plano Intermediário."></ItemLista>
              <ItemLista text="• Consultoria trimestral com especialistas para discutir os relatórios e sugerir melhorias."></ItemLista>
              <ItemLista text="• Relatórios personalizados com foco em áreas específicas de interesse do investidor."></ItemLista>
              <ItemLista text="• Workshops semestrais sobre tendências de mercado e inovações relacionadas a mitigação de enchentes e eficiência de manutenção."></ItemLista>
            </Lista>
          </div>
        </div>

        <div>
          <h2 className="mb-4">Benefícios:</h2>
          <ul className="list-inside list-disc">
            <li>
              Redução de custos com manutenção corretiva, ao antecipar
              obstruções e agir preventivamente.
            </li>
            <li>
              Maior segurança para os moradores, ao diminuir os riscos de
              enchentes.
            </li>
            <li>
              Dados detalhados que ajudam na tomada de decisões sobre obras e
              expansões da infraestrutura urbana.
            </li>
            <li>
              Planejamento proativo e suporte contínuo, garantindo que o sistema
              de drenagem funcione de forma eficiente, mesmo em situações de
              chuvas intensas.
            </li>
          </ul>
        </div>

        <div className="flex w-full justify-center">
          <Button></Button>
        </div>
      </Box>
    </div>
  );
}
