# Sentinela de Drenagem

A crescente urbanização, sem o devido planejamento de infraestrutura, tem gerado problemas graves nas cidades, sendo um dos mais preocupantes as enchentes. A falta de manutenção e a obstrução dos sistemas de drenagem, como bueiros e canais, potencializam os riscos de inundações em áreas urbanas. As chuvas intensas, aliadas a sistemas de drenagem incapazes de suportar o volume de água, resultam em alagamentos que impactam diretamente a vida da população, causando prejuízos materiais, transtornos no trânsito e, em casos mais graves, colocando em risco a segurança e saúde das pessoas.

A **Sentinela de Drenagem** surge como uma solução inovadora para este problema. Ao implementar sensores IoT (Internet das Coisas) em pontos estratégicos da drenagem urbana, o sistema monitora continuamente o fluxo de água e detecta obstruções antes que estas possam causar danos significativos. Quando um entupimento é identificado ou há sinais de risco iminente de enchente, alertas automáticos são enviados para as equipes de manutenção e moradores da região afetada. Com isso, é possível agir de maneira preventiva, garantindo uma resposta rápida e eficiente antes que a situação se agrave. Além disso, o sistema armazena dados históricos e gera relatórios que auxiliam na análise preditiva, permitindo que futuras obstruções sejam evitadas por meio de manutenções planejadas.

## Objetivo do Projeto e sua Relevância no Contexto Urbano

O objetivo principal do projeto **Sentinela de Drenagem** é desenvolver uma solução tecnológica que utilize dispositivos IoT para monitorar os sistemas de drenagem em áreas urbanas, prevenindo enchentes e minimizando seus impactos. O projeto visa criar uma plataforma integrada que permita o acompanhamento em tempo real do fluxo de água em bueiros e canais, gerando alertas automáticos em caso de obstruções ou funcionamento anormal.

A relevância deste projeto no contexto urbano é inegável. As enchentes são um problema recorrente nas grandes cidades, especialmente em períodos de chuvas intensas. Muitas vezes, a falta de um sistema eficiente de manutenção e monitoramento agrava a situação, levando a prejuízos econômicos e transtornos para os moradores. A implementação de um sistema como o **Sentinela de Drenagem** não só protege a população, mas também contribui para a eficiência da gestão pública, otimizando os processos de manutenção e reduzindo custos com obras emergenciais e reparos. Além disso, a plataforma traz benefícios ao possibilitar a tomada de decisões mais precisas com base em dados históricos e preditivos, o que pode auxiliar no planejamento urbano a longo prazo, prevenindo crises e melhorando a qualidade de vida nas cidades.

## O Dispositivo IoT

O coração do sistema **Sentinela de Drenagem** é um dispositivo IoT robusto e eficiente, projetado para monitorar o nível da água e as condições climáticas em tempo real. A seguir, detalhamos os componentes e a arquitetura técnica que compõem este dispositivo:

### Componentes Utilizados:
- **Microcontrolador ESP32**: O ESP32 é responsável por todo o processamento e comunicação do dispositivo. Ele gerencia a leitura dos sensores, processa os dados coletados e envia essas informações via Wi-Fi para o servidor de monitoramento. O ESP32 foi escolhido por sua alta capacidade de processamento, baixo consumo de energia e integração nativa com redes Wi-Fi, o que o torna ideal para aplicações IoT.
- **Sensor Ultrassônico HC-SR04**: Este sensor é utilizado para medir o nível da água em bueiros e canais de drenagem. Ele funciona emitindo ondas ultrassônicas que são refletidas pela superfície da água, calculando a distância com base no tempo que o som leva para retornar. Esses dados são fundamentais para detectar mudanças no nível de água que possam indicar entupimentos ou bloqueios.
- **Sensor de Umidade e Temperatura DHT22**: O DHT22 é responsável por monitorar as condições climáticas do ambiente, como temperatura e umidade. Esses dados complementam as informações de nível de água, oferecendo uma visão mais completa das condições que podem influenciar o sistema de drenagem.
- **LED Indicador**: O dispositivo também inclui um LED que serve como indicador visual. O LED pode piscar ou mudar de cor para indicar diferentes estados, como normalidade, alerta ou erro de comunicação.
- **Fonte de Alimentação**: O dispositivo é alimentado por uma fonte externa, garantindo que ele opere de forma contínua e estável, mesmo em ambientes hostis e com variações climáticas.

### Funcionamento Técnico:
O microcontrolador ESP32 lê os dados tanto do sensor HC-SR04 quanto do DHT22 de forma contínua. Utilizando a conectividade Wi-Fi, ele envia essas informações para o servidor, onde os dados são processados e exibidos na plataforma de monitoramento. O código do ESP32 foi desenvolvido em C++, utilizando o framework Arduino, devido à sua simplicidade e ampla compatibilidade com dispositivos IoT. A plataforma **PlatformIO**, integrada ao Visual Studio Code, foi utilizada como ambiente de desenvolvimento para programar e depurar o microcontrolador, otimizando o processo de criação e implementação do código.

> Confira o código completo e instruções detalhadas sobre o dispositivo IoT no [repositório oficial](https://github.com/seu-repositorio-dispositivo).

## Protótipo do Projeto (Wokwi)

O simulador Wokwi foi utilizado para desenvolver e testar o protótipo do dispositivo IoT, garantindo que todos os componentes funcionem corretamente antes da implementação física.

![Imagem do dispositivo no simulador Wokwi](#)