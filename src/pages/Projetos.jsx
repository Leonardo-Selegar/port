import React from "react";
import '../styles/projetos.css';
import Recipes from '../imgs/recipes.png';
import Wallet from '../imgs/Wallet.png';
import Pixel from '../imgs/PixelArt.png';
import Warts from '../imgs/Trybewarts.png';
import SistemaSolar from '../imgs/SistemaSolar.png'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Cronometro from '../imgs/cronometro.png';

function Projetos() {

  const arrayImgs = [ Recipes, Cronometro, Wallet, SistemaSolar, Warts, Pixel];
  const arrayNomesProjetos = ['App de Receitas', 'Cronometro', 'Carteira Digital', 'Sistema Solar', 'TrybeWarts', 'Pixel Art'];

  const arrayLinksProjetos = ['https://leonardo-selegar.github.io/recipes-app/#/', 'https://leonardo-selegar.github.io/cronometro-vue/',
  'https://leonardo-selegar.github.io/trybewallet/#/', 'https://leonardo-selegar.github.io/solar-system/',
  'https://leonardo-selegar.github.io/trybewarts/', 'https://leonardo-selegar.github.io/pixels-art/'];

  const arrayLinksGithub = ['https://github.com/Leonardo-Selegar/recipes-app', 'https://github.com/Leonardo-Selegar/cronometro-vue',
  'https://github.com/Leonardo-Selegar/trybewallet', 'https://github.com/Leonardo-Selegar/solar-system',
  'https://github.com/Leonardo-Selegar/trybewarts', 'https://github.com/Leonardo-Selegar/pixels-art'];

  const arrayDescription = ['Projeto em grupo desenvolvido no final do módulo de front-end na Trybe, nele é possível: ver, buscar, filtrar e favoritar receitas de comidas e bebidas!',
  'Primeiro projeto desenvolvido com vue.js onde foi criado um cronometro onde salva o histórico de pauses e é possivel limpar esse histórico!',
  'Projeto de uma carteira de controle de gastos com conversor de moedas, nele é possível: adicionar e remover um gasto, visualizar uma tabela com seus gastos e o total de gastos convertidos!',
  'Primeiro projeto do módulo de front-end, onde foi consumida uma API de missões espaciais do sistema solar!',
  'Projeto em dupla do módulo de Fundamentos, um formulário da Trybewarts Wizarding School onde os estudantes podem enviar seus feedbacks!',
  'Um dos primeiros projetos que desenvolvi, um editor de arte com pixels onde se pode escolher uma cor em uma paleta de cores e pintar o que quiser em um quadro branco!',
  ];

  const arrayTecs = ['React, CSS, bootstrap e Context Api', 'Vue.js e CSS', 'ReactJS CSS e Redux', 'ReactJS e CSS', 'HTML, CSS E JavaScript', 'HTML, CSS E JavaScript']

  return (
    <div className="pag-3" id="pag3">
      <h1 className="titulo-pag3">Projetos</h1>
          <Carousel>
            {
              arrayImgs.map((img, index) => (
                <Carousel.Item className="container-projects">
                  <Carousel.Caption>
                  <Card className="card-project" bg={'dark'} style={{ width: '25vw' }}>
                  <Card.Img src={img} alt={index} />
                  <Card.Body>
                    <Card.Title>{arrayNomesProjetos[index]}</Card.Title>
                    <Card.Text className="description-card">{arrayDescription[index]}</Card.Text>
                    <Card.Text className="description-card">{`Tecnologias usadas no projeto: ${arrayTecs[index]}.`}</Card.Text>
                    <Button className="button-project button-previl" href={arrayLinksProjetos[index]} target="_blank" rel="noreferrer noopener" variant="primary">VISUALIZAR</Button>
                    <Button className="button-project" href={arrayLinksGithub[index]} target="_blank" rel="noreferrer noopener" variant="primary">GITHUB</Button>
                  </Card.Body>
                  </Card>
                  </Carousel.Caption>
                </Carousel.Item>
              ))
            }
        </Carousel>
      </div>
  )
}

export default Projetos;
