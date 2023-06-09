import type { NextApiRequest, NextApiResponse } from 'next'

type Image = {
  name: string;
  link: string;
}

type News = {
  title: string;
  description: string;
  datetime: Date;
  images: Image[];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<News[]>
) {
  res.status(200).json([{ 
    title: "CNS e ENSP dialogam aprofundamento da parceria entre as entidades",
    description: `
      image1 
      O CNS recebeu nesta quinta (30/03) a visita de representantes da Escola Nacional de Saúde Pública Sérgio Arouca (ENSP) para debater uma agenda estratégica que aprofunde a parceria entre as entidades. O diálogo se deu dentro da pauta da 186ª Reunião Ordinária da Mesa Diretora do Conselho.
      Em sua fala dirigida aos membros da Mesa Diretora do CNS, Marco Menezes, diretor da ENSP, destacou a importância do estreitamento das relações e o estabelecimento de uma agenda estratégica conjunta, focando no aprofundamento da participação popular e na cooperação para o fortalecimento do SUS.
      Ao longo de sua apresentação, Menezes sublinhou alguns pontos centrais para a consolidação desta estratégia comum, que segundo o diretor, passam pelo “reconhecimento da intrínseca relação entre os movimentos sociais, a garantia da democracia e a saúde, sobretudo, num contexto de reconstrução de uma agenda nacional para o enfrentamento das desigualdades sociais”.
      image2
      Eduardo Melo, vice-diretor da Escola de Governo em Saúde da ENSP, apresentou um documento contendo dez propostas preliminares para o estabelecimento desta parceria. Dentre os pontos, estão a realização de eventos conjuntos para debater o SUS, um programa de fomento de pesquisas que atendam ao CNS, ações que fortaleçam a participação social na saúde, interlocução e troca de experiências com atores e movimentos de outros países e a centralidade da comunicação no diálogo com a população.
      Os conselheiros e conselheiras destacaram alguns pontos sobre formação, produção de estudos sobre a situação dos trabalhadores da saúde, demanda por análises de conjuntura, intensificação nas ações da comunicação, além de suporte à atualização cadastral, assinatura da revista Radis e o apoio do CNS no fortalecimento da atuação das instituições públicas acadêmico-científicas na formação, pesquisa e cooperação técnica para a saúde pública.
      Ascom CNS
    `,
    datetime: new Date(Date.UTC(2023, 3, 30, 19, 26)),
    images: [{
      name: "icon",
      link: "http://conselho.saude.gov.br/images/noticias/2023/52781860819_ecab92cd61_k.jpg"
    }, {
      name: "image1",
      link: "http://conselho.saude.gov.br/images/noticias/2023/52781860819_ecab92cd61_k.jpg"
    }, {
      name: "image2",
      link: "http://conselho.saude.gov.br/images/WhatsApp_Image_2023-03-30_at_15.18.15.jpeg"
    }]
  }, {
    title: "17ª CNS: Juventude rural, migrantes e negros estão entre as populações que organizam conferências livres de saúde",
    description: `
      image1 
      As conferências livres são etapas preparatórias para a 17ª Conferência Nacional de Saúde (CNS). Elas podem ser
      realizadas por organizações e movimentos sociais que queiram discutir questões específicas, no âmbito da saúde
      pública, para serem apresentadas na etapa nacional da 17ª CNS, que será realizada em Brasília, de 2 a 5 de julho.

      Desde novembro, quando se iniciou o período de realização das etapas preparatórias para a 17ª CNS, já aconteceram
      diversas conferências em diferentes regiões do Brasil, seja em formato presencial ou online, entre elas sobre Saúde
      Pública Veterinária, Juventudes e dos Povos Tradicionais de Matriz Africana.

      A próxima conferência livre nacional de saúde está agendada para 18/04, com o tema Acesso a Medicamentos em
      Defesa da Vida, e no dia 25/04 será a vez da Juventude do Campo, da Floresta e das Águas organizarem a sua.

      A partir de maio, o calendário inclui as conferências livres nacionais sobre: Demências; Saúde da População Negra;
      Educação Popular em Saúde; Populações Migrantes; Maconha Medicinal; Saúde dos Trabalhadores e das
      Trabalhadoras; Saúde Bucal; Saúde das Mulheres, entre outras.

      As conferências livres possibilitam a ampliação da participação social para os debates e para a formulação de propostas
      em torno do tema da 17ª CNS, podendo ser realizadas também em âmbito municipal, intermunicipal, regional,
      macrorregional e estadual.

      Umas das grandes inovações trazidas para esta edição da Conferência Nacional de Saúde é a possibilidade que
      Conferências Livres de Saúde elenquem propostas para a etapa nacional. É importante destacar que elas não
      competem ou substituem a realização das conferências das etapas municipal e estadual.

      (https://docs.google.com/spreadsheets/d/1fQCHZbqpgL_hBGDnRfv8kDyhwYB38g7k/edit#gid=822759385)[Acesse o calendário de Conferências Livres Nacionais de Saúde]
      (http://www.conselho.saude.gov.br/ultimas-noticias-cns/2901-conferencias-livres-de-saude-confira-o-passo-a-passo-para-realizacao-e-integracao-da-atividade-na-etapa-nacional)[Confira o passo a passo para realização e integração da atividade na etapa nacional]
      Ascom CNS
    `,
    datetime: new Date(Date.UTC(2023, 3, 30, 19, 26)),
    images: [{
      name: "icon",
      link: "http://conselho.saude.gov.br/images/52667315094_cb5555913c_c.jpg"
    }, {
      name: "image1",
      link: "http://conselho.saude.gov.br/images/52667315094_cb5555913c_c.jpg"
    }]
  }])
}
