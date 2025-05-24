"use client";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Flex
      backgroundImage={`url(https://static.vecteezy.com/ti/vetor-gratis/p1/7384234-fundo-ceu-azul-e-nuvens-brancas-vetor.jpg)`}
      backgroundSize="400%"
      backgroundPosition="bottom"
    >
      <Box display="flex" m="2rem" gap={25}>
        <Image
          borderRadius="15px"
          h="700px"
          src="https://cdn.awsli.com.br/1605/1605630/arquivos/pg-inicial2.jpg"
          display={{ base: "none", xl: "flex" }}
        />
        <Box p="2rem" display="flex" flexDir="column" gap={5}>
          <Heading>Sobre nós</Heading>
          <Text fontSize="1.1rem" color="black" textAlign="justify">
            A StreetWarShop não nasceu em um escritório com ar-condicionado nem
            foi projetada por grandes agências. Ela nasceu no calor do asfalto
            de Goiás, sob o sol escaldante do Centro-Oeste, entre ruas
            rabiscadas por grafite e pistas de skate improvisadas em
            estacionamentos vazios. Nasceu de uma inquietação, de um sentimento
            de que a moda podia — e devia — ser uma forma de resistência
            cultural. Era 2015. No centro de Goiânia, enquanto o mundo da moda
            ainda via o streetwear como um nicho alternativo, um grupo de jovens
            com sede de expressão, arte e liberdade começou a imprimir suas
            ideias em tecidos. Camisetas feitas à mão com frases ousadas,
            símbolos urbanos e referências que misturavam rap, pixo, protesto e
            regionalismo. O estoque? Cabia todo em uma mochila. As “lojas”?
            Praças, shows underground, encontros de breakdance e feiras de arte
            independente. Foi assim que nasceu a StreetWarShop — muito antes de
            ser marca, foi atitude. A ideia era simples e poderosa: transformar
            a roupa em uma extensão da alma. Algo que dissesse “eu sou daqui,
            mas estou indo muito além”. E foi exatamente isso que aconteceu. Em
            poucos anos, a StreetWarShop deixou de ser um segredo dos becos
            goianienses e se espalhou pelas grandes capitais brasileiras.
            Primeiro, nos rolês alternativos de Brasília e Belo Horizonte.
            Depois, nos festivais de cultura urbana em São Paulo, Recife e Porto
            Alegre. Mas o que realmente chamou atenção foi o contraste: enquanto
            grandes marcas tentavam capturar a essência da rua em gabinetes de
            marketing, a StreetWarShop era a rua. Era o grafiteiro que vestia
            sua arte. O skatista que arranhava a camiseta numa manobra mal
            sucedida. O rapper que subia no palco com a estampa estampando a
            rima. Era visceral, verdadeira, bruta. A marca ganhou projeção
            nacional e internacional não só pela estética — mas pelo conceito.
            Quando chegou à Europa em 2020, através de uma collab com artistas
            de Berlim, os olhos do mundo se voltaram para aquela marca
            brasileira que falava de favela, cerrado, grafite e revolução
            estética com a mesma elegância que outras falavam de alta costura.
            Em 2022, veio a primeira pop-up em Tóquio. Em 2023, um desfile
            colaborativo nas ruas do Brooklyn. Em 2024, a StreetWarShop lançou
            sua própria linha de sneakers — orgulhosamente fabricados no Brasil.
            Masmesmo com o mundo assistindo, a essência nunca mudou. Cada peça
            ainda carrega a identidade de onde tudo começou: de um bairro
            simples de Goiânia, onde os muros falam, o asfalto ensina, e a
            criatividade não tem limite. Os tecidos evoluíram. As costuras são
            mais complexas. A produção cresceu. Mas o espírito é o mesmo:
            rebelde, criativo e genuíno. Hoje, a StreetWarShop é muito mais que
            moda. É uma plataforma cultural. Apoia artistas independentes, lança
            zines urbanos, organiza batalhas de rap e patrocina eventos de
            cultura de rua. Cada coleção é uma narrativa — sobre resistência,
            ancestralidade, pertencimento e futuro. Porque vestir StreetWarShop
            é vestir uma ideia. É gritar sem dizer uma palavra. É pertencer a um
            movimento que não se curva, não se cala e não se vende. Das vielas
            de Goiás para as ruas do mundo, seguimos firmes: armados com
            criatividade, vestindo atitude, e levando nossa bandeira de volta
            pra rua — onde tudo começou.
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};
export default About;
