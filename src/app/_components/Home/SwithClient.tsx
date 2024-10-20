"use client";

import React from "react";
import Nav, { NavButtons } from "./nav";
import Image from "next/image";
import { SessionProvider } from "next-auth/react";
import CardsSistema from "../cardsistema";
import ComunidadeCard from "./ComunidadeCard";

function HomeCard({
  children,
  title,
  imagePath,
  subtitle,
  i,
}: Readonly<{
  children: React.ReactNode;
  title: string;
  imagePath: string;
  subtitle: string;
  i: number;
}>) {
  return (
    <div
      className={`2lg:w-[70%] 2lg:h-[75vh] relative flex h-[90vh] w-[90%] items-center justify-between ${i % 2 == 1 && "flex-row-reverse"}`}
    >
      <div className="2lg:w-[55%] relative h-[80%] w-[60%]">
        <p className="font-Anton absolute top-[-10%] text-[9em] font-bold tracking-[-0.1em] text-white opacity-10">
          0{i + 1}
        </p>
        <div
          className={`absolute right-[0.25%] top-[0.25%] -z-[1] h-[99.5%] w-[99.5%] bg-BG`}
        />
        <div className="absolute -z-[1] h-[80%] w-[30%] bg-BG" />
        <div className={`absolute -z-[2] h-full w-full bg-Blue/50`} />
        <div className="relative flex h-[70%] w-[90%] flex-col gap-4 pl-28 pt-16 text-white">
          <div className="flex items-center gap-4">
            <div className="h-[0.1em] w-[10%] bg-Yellow" />
            <p className="font-Anton font-bold uppercase tracking-widest text-Yellow">
              {subtitle}
            </p>
          </div>
          <p className="font-Anton text-[4em] font-bold tracking-[-.07em]">
            {title}
          </p>
          {children}
        </div>
      </div>
      <Image
        alt={imagePath}
        src={`/pngs/${imagePath}`}
        width={1000}
        height={1000}
        className="2lg:w-[40%] h-[90%] w-[35%] rounded-md object-contain"
      />
    </div>
  );
}

function Sistema() {
  return <CardsSistema />;
}

interface DataSelection {
  imagePath: string;
  html: React.ReactNode;
  title: string;
  subtitle: string;
  secondDesc?: string
}

const DataForSelected: DataSelection[][] = [
  [
    {
      title: "Problema",
      subtitle: "causa",
      imagePath: "H1.png",
      html: (
        <div>
          {" "}
          A falta de manutenção adequada nos sistemas de drenagem urbana, aliada
          à obstrução dos bueiros e canais, é um fator que intensifica o risco
          de enchentes em áreas urbanas. Problemas de drenagem frequentemente
          passam despercebidos até o momento crítico, quando as chuvas intensas
          resultam em alagamentos, causando prejuízos econômicos e sociais. Com
          as mudanças climáticas, o aumento na frequência de chuvas intensas e
          imprevisíveis torna ainda mais urgente a necessidade de monitorar as
          redes de drenagem.
        </div>
      ),
    },
    {
      title: "Nossa Solução",
      subtitle: "Chave do problema",
      imagePath: "H2.png",
      html: <div className="flex flex-col">
        <p className="text-Yellow">Sensores IoT para Monitoramento inteligente: </p>
        <ul>
            <li>Implementação de sensores de Internet das Coisas (IoT) em bueiros e canais de drenagem para monitorar em tempo real o fluxo de água.</li>
            <li>Os sensores detectam obstruções ou entupimentos que possam comprometer o sistema de drenagem, permitindo ações preventivas.</li>
        </ul>
        <p className="text-Yellow">Alertas Automáticos:</p>
        <ul>
            <li>Notificações instantâneas para equipes de manutenção, autoridades e moradores quando um entupimento é detectado ou quando há risco iminente de enchente.</li>
            <li>O sistema garante uma resposta rápida, reduzindo o tempo de inatividade e prevenindo danos.</li>
        </ul>
      </div>,
    },
    {
      title: "Como Funciona",
      subtitle: "Funcionamento",
      imagePath: "H3.png",
      html: <div>  O sensor ultrassônico instalado nos bueiros opera continuamente emitindo ondas sonoras que, ao encontrarem um objeto ou superfície (como o nível da água), são refletidas de volta ao sensor. Com base no tempo que essas ondas levam para retornar, o sensor calcula a distância até o objeto à frente, neste caso, o nível da água. Se o nível da água subir significativamente, o sensor detecta essa mudança em tempo real e, de imediato, transmite as informações coletadas para o sistema central. Esse sistema, por sua vez, aciona automaticamente alertas via celular para equipes de manutenção e moradores da área, permitindo uma resposta ágil e preventiva.</div>,
    },
    {
      title: "Benefícios",
      subtitle: "Impactos sociais",
      imagePath: "H4.png",
      html: <div className="flex flex-col">
            <p className="text-Yellow">Prevenção de Enchentes e Alagamentos:</p>
            <ul>
                <li>A monitoração em tempo real do sistema de drenagem minimiza o risco de enchentes, protegendo áreas urbanas e garantindo a segurança dos cidadãos.</li>
            </ul>
            <p className="text-Yellow">Resposta Rápida e Ação Preventiva:</p>
            <ul>
                <li>As equipes de manutenção podem ser acionadas antes que uma obstrução se torne um problema crítico, prevenindo alagamentos e minimizando os custos com reparos emergenciais.</li>
            </ul>
            <p className="text-Yellow">Eficiência Operacional e Sustentabilidade:</p>
            <ul>
                <li>O sistema otimiza a operação das concessionárias e governos, permitindo uma gestão proativa dos recursos de drenagem.</li>
                <li>A integração com dados meteorológicos permite ações ainda mais preventivas, correlacionando chuvas intensas com os fluxos de água.</li>
            </ul>
        </div>,
    },
  ],
  [],
  [{ title: "test", subtitle: "ggg", imagePath: "", html: Sistema() }],
  [{
    title: "Proteja sua Comunidade, Evite Enchentes!", subtitle: "Educação comunitária", imagePath: "C1.png",
    secondDesc: "A prevenção de enchentes começa com pequenas ações diárias que todos podemos adotar. Ao cuidar dos sistemas de drenagem e colaborar com práticas sustentáveis, você ajuda a proteger sua casa, sua rua e sua comunidade. Confira algumas dicas importantes para colaborar na prevenção de enchentes!",
    html: <>
      <div className="ComunidadeDiv1">
        <h1>1. Não Jogue Lixo nas Ruas ou Bueiros</h1>
        <p>• O acúmulo de lixo nos bueiros e canais de escoamento é uma das principais causas de enchentes.</p>
        <p>• Sempre descarte seu lixo em locais apropriados.</p>
        <p>• Organize ou participe de campanhas de limpeza comunitária.</p>
      </div>
      <div className="ComunidadeDiv1">
        <h1>2. Limpe e Verifique as Calhas e Ralos da Sua Casa</h1>
        <p>• Mantenha as calhas e ralos da sua residência limpos para garantir o escoamento adequado da água.</p>
        <p>• Evite o acúmulo de folhas, resíduos e sujeira que podem bloquear a passagem da água da chuva.</p>
      </div>
      <div className="ComunidadeDiv1">
        <h1>3. Faça o Descarte Correto de Resíduos Sólidos</h1>
        <p>• Lixo descartado inadequadamente pode acabar em bueiros e canais, aumentando o risco de obstrução.</p>
        <p>• Separe o lixo reciclável do orgânico e siga as orientações da coleta seletiva em sua região.</p>
      </div>
      <div className="ComunidadeDiv1">
        <h1>4. Participe da Fiscalização do Sistema de Drenagem</h1>
        <p>• Informe imediatamente à prefeitura ou às autoridades locais qualquer obstrução que você observar em bueiros ou canais próximos à sua residência.</p>
        <p>• Utilize apps de monitoramento urbano ou linhas diretas para comunicar problemas.</p>
      </div>
      <div className="ComunidadeDiv1">
        <h1>5. Evite Pavimentar Todo o Solo do Quintal</h1>
        <p>• Superfícies impermeáveis, como concreto e asfalto, impedem a absorção da água da chuva pelo solo.</p>
        <p>• Se possível, mantenha áreas permeáveis no seu quintal, como jardins ou gramados, para ajudar a absorver o excesso de água.</p>
      </div>
    </>
  },{
    title: "Como Agir Durante Uma Enchente: Guia de Segurança", subtitle: "Guia de Segurança", imagePath: "C2.png",
    secondDesc: "  A prevenção de enchentes começa com pequenas ações diárias que todos podemos adotar. Ao cuidar dos sistemas de drenagem e colaborar com práticas sustentáveis, você ajuda a proteger sua casa, sua rua e sua comunidade. Confira algumas dicas importantes para colaborar na prevenção de enchentes!",
    html: <>
      <div className="ComunidadeDiv1">
        <h1>1. Mantenha a Calma</h1>
        <p>• A primeira regra em situações de emergência é manter a calma.</p>
        <p>• Controle o pânico e ajude os outros a fazerem o mesmo para tomar decisões seguras.</p>
      </div>

      <div className="ComunidadeDiv1">
        <h1>2. Fique Informado</h1>
        <p>• Ouça alertas oficiais: Sintonize em rádios ou acompanhe as redes sociais das autoridades locais para atualizações sobre a situação.</p>
        <p>• Receba alertas em seu celular: Se inscreva em sistemas de alerta de enchentes da sua cidade.</p>
      </div>
      
      <div className="ComunidadeDiv1">
        <h1>3. Evite Sair de Casa</h1>
        <p>• Se você estiver em uma área afetada, permaneça dentro de casa e se afaste de janelas e portas.</p>
        <p>• Suba para andares mais altos ou locais elevados, longe do fluxo de água.</p>
      </div>

      <div className="ComunidadeDiv1">
        <h1>4. Desligue os Equipamentos Elétricos</h1>
        <p>• Corte o fornecimento de energia elétrica e gás para evitar riscos de choques ou explosões.</p>
        <p>• Evite mexer em aparelhos eletrônicos se estiver em contato com água.</p>
      </div>

      <div className="ComunidadeDiv1">
        <h1>5. Evite Contato com a Água da Enchente</h1>
        <p>• A água da enchente pode estar contaminada por esgoto, produtos químicos e detritos.</p>
        <p>• Não caminhe ou dirija por áreas inundadas, pois a água pode esconder buracos, fios elétricos ou correntes perigosas.</p>
      </div>

      <div className="ComunidadeDiv1">
        <h1>6. Caso Precise Evacuar:</h1>
        <p>• Leve apenas o essencial: Documentos, remédios, água potável e alimentos não perecíveis.</p>
        <p>• Siga as rotas de evacuação indicadas pelas autoridades e procure abrigo seguro em áreas elevadas.</p>
        <p>• Ajude crianças, idosos e pessoas com mobilidade reduzida.</p>
      </div>

      <div className="ComunidadeDiv1">
        <h1>7. Nunca Dirija em Áreas Inundadas</h1>
        <p>• A força da água pode arrastar carros, mesmo em enchentes rasas.</p>
        <p>• Desista de tentar atravessar áreas inundadas com seu veículo. Procure rotas alternativas.</p>
      </div>

      <div className="ComunidadeDiv1">
        <h1>8. Atenção Redobrada com Crianças e Animais</h1>
        <p>• Mantenha crianças e animais domésticos em áreas seguras e supervisionados o tempo todo.</p>
        <p>• Explique para as crianças a gravidade da situação e ensine-as a seguirem suas instruções.</p>
      </div>
    </>
  }],
  [],
];

function SwithClient() {
  const [Selected, ChangeSeleted] = React.useState(0);

  return (
    <SessionProvider>
      <div className="flex min-h-screen flex-col items-center overflow-x-hidden bg-BG px-4">
        <Nav func={ChangeSeleted} selected={Selected} />
        <Image
          src={"/pngs/background.png"}
          width={5000}
          height={5000}
          alt="background"
          className="absolute top-0 w-full object-contain"
        />
        <div className="relative z-[10] mb-[10%] flex h-[100vh] w-[60%] flex-col items-center pt-[20%]">
          <div>
            <div className="flex w-full items-center gap-4">
              <div className="h-[0.2em] w-[8%] bg-Yellow" />
              <p className="font-Aton font-bold tracking-widest text-Yellow">
                {NavButtons[Selected]}
              </p>
            </div>
            <p className="font-Alfa text-[5em] font-bold tracking-wider text-white">
              Sentinela de Drenagem
            </p>
          </div>
        </div>
        <div className="absolute top-0 h-[100vh] w-full bg-gradient-to-tl from-transparent via-transparent to-BG/80" />
        <div className="absolute bottom-[-30%] h-[175vh] w-full bg-gradient-to-b from-transparent via-transparent to-BG" />
        <div className="absolute bottom-[-100%] h-[70vh] w-full bg-BG" />

        <div className="z-10 flex w-full flex-col items-center justify-center gap-[10em] my-[10%]">
          {DataForSelected[Selected]?.map((obj, i) => {
            if (Selected == 0)
              return HomeCard({ children: obj.html, ...obj, i });
            if (Selected == 2) return Sistema();
            if (Selected == 3) return ComunidadeCard({ children: obj.html, ...obj, i})
          })}
        </div>
      </div>
    </SessionProvider>
  );
}

export default SwithClient;
