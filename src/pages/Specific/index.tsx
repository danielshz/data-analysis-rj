import NeighborhoodsMap from '../../components/NeighborhoodsMap';
import NavBar from '../../components/NavBar';

import { FiArrowUpCircle, FiArrowDownCircle, FiBarChart2, FiPlusCircle } from 'react-icons/fi';

import { Container, Content, Map, Cards, Card } from './styles';

export default function Specific() {
  const captionColors = ['#D83535','#D95F36','#D97D36','#D9A536','#D9D336'];
  const captionItems = ['Extrema Pobreza', 'Pobreza', 'Baixa Renda', 'Acima de 1/2 S.M.', 'Acima de 1 S.M.']

  const data = [
    {
        "nome": "Paquetá                   ",
        "codbairro": "013",
        "regiao_adm": "PAQUETA                 ",
        "codra": 21,
        "rp": "Centro",
        "cod_rp": "1.1",
        "value": 40
    },
    {
        "nome": "Freguesia (Ilha)          ",
        "codbairro": "098",
        "regiao_adm": "ILHA DO GOVERNADOR      ",
        "codra": 20,
        "rp": "Ilha do Governador",
        "cod_rp": "3.7",
        "value": 400
    },
    {
        "nome": "Bancários                 ",
        "codbairro": "097",
        "regiao_adm": "ILHA DO GOVERNADOR      ",
        "codra": 20,
        "rp": "Ilha do Governador",
        "cod_rp": "3.7",
        "value": 326
    },
    {
        "nome": "Galeão                    ",
        "codbairro": "104",
        "regiao_adm": "ILHA DO GOVERNADOR      ",
        "codra": 20,
        "rp": "Ilha do Governador",
        "cod_rp": "3.7",
        "value": 679
    },
    {
        "nome": "Tauá                      ",
        "codbairro": "101",
        "regiao_adm": "ILHA DO GOVERNADOR      ",
        "codra": 20,
        "rp": "Ilha do Governador",
        "cod_rp": "3.7",
        "value": 520
    },
    {
        "nome": "Portuguesa                ",
        "codbairro": "103",
        "regiao_adm": "ILHA DO GOVERNADOR      ",
        "codra": 20,
        "rp": "Ilha do Governador",
        "cod_rp": "3.7",
        "value": 598
    },
    {
        "nome": "Moneró                    ",
        "codbairro": "102",
        "regiao_adm": "ILHA DO GOVERNADOR      ",
        "codra": 20,
        "rp": "Ilha do Governador",
        "cod_rp": "3.7",
        "value": 600
    },
    {
        "nome": "Vigário Geral             ",
        "codbairro": "048",
        "regiao_adm": "VIGARIO GERAL           ",
        "codra": 31,
        "rp": "Penha",
        "cod_rp": "3.5",
        "value": 352
    },
    {
        "nome": "Cocotá                    ",
        "codbairro": "096",
        "regiao_adm": "ILHA DO GOVERNADOR      ",
        "codra": 20,
        "rp": "Ilha do Governador",
        "cod_rp": "3.7",
        "value": 524
    },
    {
        "nome": "Jardim América            ",
        "codbairro": "049",
        "regiao_adm": "VIGARIO GERAL           ",
        "codra": 31,
        "rp": "Penha",
        "cod_rp": "3.5",
        "value": 995
    },
    {
        "nome": "Jardim Carioca            ",
        "codbairro": "100",
        "regiao_adm": "ILHA DO GOVERNADOR      ",
        "codra": 20,
        "rp": "Ilha do Governador",
        "cod_rp": "3.7",
        "value": 88
    },
    {
        "nome": "Pavuna                    ",
        "codbairro": "114",
        "regiao_adm": "PAVUNA                  ",
        "codra": 25,
        "rp": "Pavuna",
        "cod_rp": "3.6",
        "value": 273
    },
    {
        "nome": "Cordovil                  ",
        "codbairro": "046",
        "regiao_adm": "VIGARIO GERAL           ",
        "codra": 31,
        "rp": "Penha",
        "cod_rp": "3.5",
        "value": 603
    },
    {
        "nome": "Jardim Guanabara          ",
        "codbairro": "099",
        "regiao_adm": "ILHA DO GOVERNADOR      ",
        "codra": 20,
        "rp": "Ilha do Governador",
        "cod_rp": "3.7",
        "value": 544
    },
    {
        "nome": "Parada de Lucas           ",
        "codbairro": "047",
        "regiao_adm": "VIGARIO GERAL           ",
        "codra": 31,
        "rp": "Penha",
        "cod_rp": "3.5",
        "value": 974
    },
    {
        "nome": "Parque Colúmbia           ",
        "codbairro": "159",
        "regiao_adm": "PAVUNA                  ",
        "codra": 25,
        "rp": "Pavuna",
        "cod_rp": "3.6",
        "value": 124
    },
    {
        "nome": "Praia da Bandeira         ",
        "codbairro": "095",
        "regiao_adm": "ILHA DO GOVERNADOR      ",
        "codra": 20,
        "rp": "Ilha do Governador",
        "cod_rp": "3.7",
        "value": 777
    },
    {
        "nome": "Penha Circular            ",
        "codbairro": "044",
        "regiao_adm": "PENHA                   ",
        "codra": 11,
        "rp": "Penha",
        "cod_rp": "3.5",
        "value": 479
    },
    {
        "nome": "Cacuia                    ",
        "codbairro": "093",
        "regiao_adm": "ILHA DO GOVERNADOR      ",
        "codra": 20,
        "rp": "Ilha do Governador",
        "cod_rp": "3.7",
        "value": 331
    },
    {
        "nome": "Irajá                     ",
        "codbairro": "076",
        "regiao_adm": "IRAJA                   ",
        "codra": 14,
        "rp": "Madureira",
        "cod_rp": "3.3",
        "value": 613
    },
    {
        "nome": "Anchieta                  ",
        "codbairro": "107",
        "regiao_adm": "ANCHIETA                ",
        "codra": 22,
        "rp": "Pavuna",
        "cod_rp": "3.6",
        "value": 74
    },
    {
        "nome": "Acari                     ",
        "codbairro": "111",
        "regiao_adm": "PAVUNA                  ",
        "codra": 25,
        "rp": "Pavuna",
        "cod_rp": "3.6",
        "value": 803
    },
    {
        "nome": "Pitangueiras              ",
        "codbairro": "094",
        "regiao_adm": "ILHA DO GOVERNADOR      ",
        "codra": 20,
        "rp": "Ilha do Governador",
        "cod_rp": "3.7",
        "value": 267
    },
    {
        "nome": "Costa Barros              ",
        "codbairro": "113",
        "regiao_adm": "PAVUNA                  ",
        "codra": 25,
        "rp": "Pavuna",
        "cod_rp": "3.6",
        "value": 672
    },
    {
        "nome": "Brás de Pina              ",
        "codbairro": "045",
        "regiao_adm": "PENHA                   ",
        "codra": 11,
        "rp": "Penha",
        "cod_rp": "3.5",
        "value": 284
    },
    {
        "nome": "Penha                     ",
        "codbairro": "043",
        "regiao_adm": "PENHA                   ",
        "codra": 11,
        "rp": "Penha",
        "cod_rp": "3.5",
        "value": 68
    },
    {
        "nome": "Zumbi                     ",
        "codbairro": "092",
        "regiao_adm": "ILHA DO GOVERNADOR      ",
        "codra": 20,
        "rp": "Ilha do Governador",
        "cod_rp": "3.7",
        "value": 326
    },
    {
        "nome": "Ribeira                   ",
        "codbairro": "091",
        "regiao_adm": "ILHA DO GOVERNADOR      ",
        "codra": 20,
        "rp": "Ilha do Governador",
        "cod_rp": "3.7",
        "value": 512
    },
    {
        "nome": "Coelho Neto               ",
        "codbairro": "110",
        "regiao_adm": "PAVUNA                  ",
        "codra": 25,
        "rp": "Pavuna",
        "cod_rp": "3.6",
        "value": 192
    },
    {
        "nome": "Guadalupe                 ",
        "codbairro": "106",
        "regiao_adm": "ANCHIETA                ",
        "codra": 22,
        "rp": "Pavuna",
        "cod_rp": "3.6",
        "value": 143
    },
    {
        "nome": "Parque Anchieta           ",
        "codbairro": "108",
        "regiao_adm": "ANCHIETA                ",
        "codra": 22,
        "rp": "Pavuna",
        "cod_rp": "3.6",
        "value": 770
    },
    {
        "nome": "Barros Filho              ",
        "codbairro": "112",
        "regiao_adm": "PAVUNA                  ",
        "codra": 25,
        "rp": "Pavuna",
        "cod_rp": "3.6",
        "value": 959
    },
    {
        "nome": "Vista Alegre              ",
        "codbairro": "075",
        "regiao_adm": "IRAJA                   ",
        "codra": 14,
        "rp": "Madureira",
        "cod_rp": "3.3",
        "value": 785
    },
    {
        "nome": "Ricardo de Albuquerque    ",
        "codbairro": "109",
        "regiao_adm": "ANCHIETA                ",
        "codra": 22,
        "rp": "Pavuna",
        "cod_rp": "3.6",
        "value": 162
    },
    {
        "nome": "Colégio                   ",
        "codbairro": "077",
        "regiao_adm": "IRAJA                   ",
        "codra": 14,
        "rp": "Madureira",
        "cod_rp": "3.3",
        "value": 767
    },
    {
        "nome": "Honório Gurgel            ",
        "codbairro": "087",
        "regiao_adm": "MADUREIRA               ",
        "codra": 15,
        "rp": "Madureira",
        "cod_rp": "3.3",
        "value": 731
    },
    {
        "nome": "Olaria                    ",
        "codbairro": "042",
        "regiao_adm": "RAMOS                   ",
        "codra": 10,
        "rp": "Ramos",
        "cod_rp": "3.1",
        "value": 80
    },
    {
        "nome": "Vila da Penha             ",
        "codbairro": "074",
        "regiao_adm": "IRAJA                   ",
        "codra": 14,
        "rp": "Madureira",
        "cod_rp": "3.3",
        "value": 245
    },
    {
        "nome": "Maré                      ",
        "codbairro": "157",
        "regiao_adm": "COMPLEXO DA MARE        ",
        "codra": 30,
        "rp": "Ramos",
        "cod_rp": "3.1",
        "value": 92
    },
    {
        "nome": "Vila Militar              ",
        "codbairro": "135",
        "regiao_adm": "REALENGO                ",
        "codra": 33,
        "rp": "Bangu",
        "cod_rp": "5.1",
        "value": 836
    },
    {
        "nome": "Cidade Universitária      ",
        "codbairro": "105",
        "regiao_adm": "ILHA DO GOVERNADOR      ",
        "codra": 20,
        "rp": "Ilha do Governador",
        "cod_rp": "3.7",
        "value": 938
    },
    {
        "nome": "Rocha Miranda             ",
        "codbairro": "086",
        "regiao_adm": "MADUREIRA               ",
        "codra": 15,
        "rp": "Madureira",
        "cod_rp": "3.3",
        "value": 997
    },
    {
        "nome": "Ramos                     ",
        "codbairro": "041",
        "regiao_adm": "RAMOS                   ",
        "codra": 10,
        "rp": "Ramos",
        "cod_rp": "3.1",
        "value": 589
    },
    {
        "nome": "Realengo                  ",
        "codbairro": "139",
        "regiao_adm": "REALENGO                ",
        "codra": 33,
        "rp": "Bangu",
        "cod_rp": "5.1",
        "value": 605
    },
    {
        "nome": "Vila Kosmos               ",
        "codbairro": "072",
        "regiao_adm": "IRAJA                   ",
        "codra": 14,
        "rp": "Madureira",
        "cod_rp": "3.3",
        "value": 796
    },
    {
        "nome": "Marechal Hermes           ",
        "codbairro": "090",
        "regiao_adm": "MADUREIRA               ",
        "codra": 15,
        "rp": "Madureira",
        "cod_rp": "3.3",
        "value": 193
    },
    {
        "nome": "Vicente de Carvalho       ",
        "codbairro": "073",
        "regiao_adm": "IRAJA                   ",
        "codra": 14,
        "rp": "Madureira",
        "cod_rp": "3.3",
        "value": 996
    },
    {
        "nome": "Paciência                 ",
        "codbairro": "148",
        "regiao_adm": "SANTA CRUZ              ",
        "codra": 19,
        "rp": "Santa Cruz",
        "cod_rp": "5.3",
        "value": 923
    },
    {
        "nome": "Engenho da Rainha         ",
        "codbairro": "055",
        "regiao_adm": "INHAUMA                 ",
        "codra": 12,
        "rp": "Inhaúma",
        "cod_rp": "3.4",
        "value": 533
    },
    {
        "nome": "Complexo do Alemão        ",
        "codbairro": "156",
        "regiao_adm": "COMPLEXO DO ALEMÃO      ",
        "codra": 29,
        "rp": "Inhaúma",
        "cod_rp": "3.4",
        "value": 166
    },
    {
        "nome": "Vaz Lobo                  ",
        "codbairro": "084",
        "regiao_adm": "MADUREIRA               ",
        "codra": 15,
        "rp": "Madureira",
        "cod_rp": "3.3",
        "value": 734
    },
    {
        "nome": "Padre Miguel              ",
        "codbairro": "140",
        "regiao_adm": "BANGU                   ",
        "codra": 17,
        "rp": "Bangu",
        "cod_rp": "5.1",
        "value": 1
    },
    {
        "nome": "Bento Ribeiro             ",
        "codbairro": "089",
        "regiao_adm": "MADUREIRA               ",
        "codra": 15,
        "rp": "Madureira",
        "cod_rp": "3.3",
        "value": 106
    },
    {
        "nome": "Turiaçú                   ",
        "codbairro": "085",
        "regiao_adm": "MADUREIRA               ",
        "codra": 15,
        "rp": "Madureira",
        "cod_rp": "3.3",
        "value": 420
    },
    {
        "nome": "Bonsucesso                ",
        "codbairro": "040",
        "regiao_adm": "RAMOS                   ",
        "codra": 10,
        "rp": "Ramos",
        "cod_rp": "3.1",
        "value": 390
    },
    {
        "nome": "Inhaúma                   ",
        "codbairro": "054",
        "regiao_adm": "INHAUMA                 ",
        "codra": 12,
        "rp": "Inhaúma",
        "cod_rp": "3.4",
        "value": 709
    },
    {
        "nome": "Tomás Coelho              ",
        "codbairro": "056",
        "regiao_adm": "INHAUMA                 ",
        "codra": 12,
        "rp": "Inhaúma",
        "cod_rp": "3.4",
        "value": 828
    },
    {
        "nome": "Santíssimo                ",
        "codbairro": "143",
        "regiao_adm": "CAMPO GRANDE            ",
        "codra": 18,
        "rp": "Campo Grande",
        "cod_rp": "5.2",
        "value": 192
    },
    {
        "nome": "Madureira                 ",
        "codbairro": "083",
        "regiao_adm": "MADUREIRA               ",
        "codra": 15,
        "rp": "Madureira",
        "cod_rp": "3.3",
        "value": 252
    },
    {
        "nome": "Osvaldo Cruz              ",
        "codbairro": "088",
        "regiao_adm": "MADUREIRA               ",
        "codra": 15,
        "rp": "Madureira",
        "cod_rp": "3.3",
        "value": 453
    },
    {
        "nome": "Santa Cruz                ",
        "codbairro": "149",
        "regiao_adm": "SANTA CRUZ              ",
        "codra": 19,
        "rp": "Santa Cruz",
        "cod_rp": "5.3",
        "value": 728
    },
    {
        "nome": "Magalhães Bastos          ",
        "codbairro": "138",
        "regiao_adm": "REALENGO                ",
        "codra": 33,
        "rp": "Bangu",
        "cod_rp": "5.1",
        "value": 126
    },
    {
        "nome": "Senador Camará            ",
        "codbairro": "142",
        "regiao_adm": "BANGU                   ",
        "codra": 17,
        "rp": "Bangu",
        "cod_rp": "5.1",
        "value": 267
    },
    {
        "nome": "Cavalcanti                ",
        "codbairro": "080",
        "regiao_adm": "MADUREIRA               ",
        "codra": 15,
        "rp": "Madureira",
        "cod_rp": "3.3",
        "value": 867
    },
    {
        "nome": "Campo dos Afonsos         ",
        "codbairro": "136",
        "regiao_adm": "REALENGO                ",
        "codra": 33,
        "rp": "Bangu",
        "cod_rp": "5.1",
        "value": 687
    },
    {
        "nome": "Higienópolis              ",
        "codbairro": "050",
        "regiao_adm": "INHAUMA                 ",
        "codra": 12,
        "rp": "Inhaúma",
        "cod_rp": "3.4",
        "value": 432
    },
    {
        "nome": "Manguinhos                ",
        "codbairro": "039",
        "regiao_adm": "RAMOS                   ",
        "codra": 10,
        "rp": "Ramos",
        "cod_rp": "3.1",
        "value": 544
    },
    {
        "nome": "Engenheiro Leal           ",
        "codbairro": "081",
        "regiao_adm": "MADUREIRA               ",
        "codra": 15,
        "rp": "Madureira",
        "cod_rp": "3.3",
        "value": 704
    },
    {
        "nome": "Pilares                   ",
        "codbairro": "071",
        "regiao_adm": "MEIER                   ",
        "codra": 13,
        "rp": "Méier",
        "cod_rp": "3.2",
        "value": 195
    },
    {
        "nome": "Del Castilho              ",
        "codbairro": "053",
        "regiao_adm": "INHAUMA                 ",
        "codra": 12,
        "rp": "Inhaúma",
        "cod_rp": "3.4",
        "value": 609
    },
    {
        "nome": "Piedade                   ",
        "codbairro": "069",
        "regiao_adm": "MEIER                   ",
        "codra": 13,
        "rp": "Méier",
        "cod_rp": "3.2",
        "value": 289
    },
    {
        "nome": "Cascadura                 ",
        "codbairro": "082",
        "regiao_adm": "MADUREIRA               ",
        "codra": 15,
        "rp": "Madureira",
        "cod_rp": "3.3",
        "value": 278
    },
    {
        "nome": "Vila Valqueire            ",
        "codbairro": "125",
        "regiao_adm": "JACAREPAGUA             ",
        "codra": 16,
        "rp": "Jacarepaguá",
        "cod_rp": "4.1",
        "value": 494
    },
    {
        "nome": "Maria da Graça            ",
        "codbairro": "052",
        "regiao_adm": "INHAUMA                 ",
        "codra": 12,
        "rp": "Inhaúma",
        "cod_rp": "3.4",
        "value": 373
    },
    {
        "nome": "Quintino Bocaiúva         ",
        "codbairro": "079",
        "regiao_adm": "MADUREIRA               ",
        "codra": 15,
        "rp": "Madureira",
        "cod_rp": "3.3",
        "value": 907
    },
    {
        "nome": "Jardim Sulacap            ",
        "codbairro": "137",
        "regiao_adm": "REALENGO                ",
        "codra": 33,
        "rp": "Bangu",
        "cod_rp": "5.1",
        "value": 363
    },
    {
        "nome": "Campinho                  ",
        "codbairro": "078",
        "regiao_adm": "MADUREIRA               ",
        "codra": 15,
        "rp": "Madureira",
        "cod_rp": "3.3",
        "value": 8
    },
    {
        "nome": "Abolição                  ",
        "codbairro": "070",
        "regiao_adm": "MEIER                   ",
        "codra": 13,
        "rp": "Méier",
        "cod_rp": "3.2",
        "value": 349
    },
    {
        "nome": "Senador Vasconcelos       ",
        "codbairro": "145",
        "regiao_adm": "CAMPO GRANDE            ",
        "codra": 18,
        "rp": "Campo Grande",
        "cod_rp": "5.2",
        "value": 280
    },
    {
        "nome": "Cosmos                    ",
        "codbairro": "147",
        "regiao_adm": "CAMPO GRANDE            ",
        "codra": 18,
        "rp": "Campo Grande",
        "cod_rp": "5.2",
        "value": 569
    },
    {
        "nome": "Jacarezinho               ",
        "codbairro": "155",
        "regiao_adm": "JACAREZINHO             ",
        "codra": 28,
        "rp": "Méier",
        "cod_rp": "3.2",
        "value": 56
    },
    {
        "nome": "Cachambi                  ",
        "codbairro": "065",
        "regiao_adm": "MEIER                   ",
        "codra": 13,
        "rp": "Méier",
        "cod_rp": "3.2",
        "value": 788
    },
    {
        "nome": "Praça Seca                ",
        "codbairro": "124",
        "regiao_adm": "JACAREPAGUA             ",
        "codra": 16,
        "rp": "Jacarepaguá",
        "cod_rp": "4.1",
        "value": 192
    },
    {
        "nome": "Benfica                   ",
        "codbairro": "012",
        "regiao_adm": "SAO CRISTOVAO           ",
        "codra": 7,
        "rp": "Centro",
        "cod_rp": "1.1",
        "value": 45
    },
    {
        "nome": "Engenho de Dentro         ",
        "codbairro": "066",
        "regiao_adm": "MEIER                   ",
        "codra": 13,
        "rp": "Méier",
        "cod_rp": "3.2",
        "value": 156
    },
    {
        "nome": "São Cristóvão             ",
        "codbairro": "010",
        "regiao_adm": "SAO CRISTOVAO           ",
        "codra": 7,
        "rp": "Centro",
        "cod_rp": "1.1",
        "value": 728
    },
    {
        "nome": "Vasco da Gama             ",
        "codbairro": "158",
        "regiao_adm": "SAO CRISTOVAO           ",
        "codra": 7,
        "rp": "Centro",
        "cod_rp": "1.1",
        "value": 708
    },
    {
        "nome": "Inhoaíba                  ",
        "codbairro": "146",
        "regiao_adm": "CAMPO GRANDE            ",
        "codra": 18,
        "rp": "Campo Grande",
        "cod_rp": "5.2",
        "value": 266
    },
    {
        "nome": "Todos os Santos           ",
        "codbairro": "064",
        "regiao_adm": "MEIER                   ",
        "codra": 13,
        "rp": "Méier",
        "cod_rp": "3.2",
        "value": 904
    },
    {
        "nome": "Jacaré                    ",
        "codbairro": "051",
        "regiao_adm": "MEIER                   ",
        "codra": 13,
        "rp": "Méier",
        "cod_rp": "3.2",
        "value": 59
    },
    {
        "nome": "Encantado                 ",
        "codbairro": "068",
        "regiao_adm": "MEIER                   ",
        "codra": 13,
        "rp": "Méier",
        "cod_rp": "3.2",
        "value": 994
    },
    {
        "nome": "Rocha                     ",
        "codbairro": "058",
        "regiao_adm": "MEIER                   ",
        "codra": 13,
        "rp": "Méier",
        "cod_rp": "3.2",
        "value": 289
    },
    {
        "nome": "Méier                     ",
        "codbairro": "063",
        "regiao_adm": "MEIER                   ",
        "codra": 13,
        "rp": "Méier",
        "cod_rp": "3.2",
        "value": 286
    },
    {
        "nome": "Gamboa                    ",
        "codbairro": "002",
        "regiao_adm": "PORTUARIA               ",
        "codra": 1,
        "rp": "Centro",
        "cod_rp": "1.1",
        "value": 156
    },
    {
        "nome": "Santo Cristo              ",
        "codbairro": "003",
        "regiao_adm": "PORTUARIA               ",
        "codra": 1,
        "rp": "Centro",
        "cod_rp": "1.1",
        "value": 881
    },
    {
        "nome": "Centro                    ",
        "codbairro": "005",
        "regiao_adm": "CENTRO                  ",
        "codra": 2,
        "rp": "Centro",
        "cod_rp": "1.1",
        "value": 945
    },
    {
        "nome": "Sampaio                   ",
        "codbairro": "060",
        "regiao_adm": "MEIER                   ",
        "codra": 13,
        "rp": "Méier",
        "cod_rp": "3.2",
        "value": 818
    },
    {
        "nome": "Riachuelo                 ",
        "codbairro": "059",
        "regiao_adm": "MEIER                   ",
        "codra": 13,
        "rp": "Méier",
        "cod_rp": "3.2",
        "value": 746
    },
    {
        "nome": "Saúde                     ",
        "codbairro": "001",
        "regiao_adm": "PORTUARIA               ",
        "codra": 1,
        "rp": "Centro",
        "cod_rp": "1.1",
        "value": 994
    },
    {
        "nome": "São Francisco Xavier      ",
        "codbairro": "057",
        "regiao_adm": "MEIER                   ",
        "codra": 13,
        "rp": "Méier",
        "cod_rp": "3.2",
        "value": 162
    },
    {
        "nome": "Engenho Novo              ",
        "codbairro": "061",
        "regiao_adm": "MEIER                   ",
        "codra": 13,
        "rp": "Méier",
        "cod_rp": "3.2",
        "value": 725
    },
    {
        "nome": "Mangueira                 ",
        "codbairro": "011",
        "regiao_adm": "SAO CRISTOVAO           ",
        "codra": 7,
        "rp": "Centro",
        "cod_rp": "1.1",
        "value": 440
    },
    {
        "nome": "Tanque                    ",
        "codbairro": "123",
        "regiao_adm": "JACAREPAGUA             ",
        "codra": 16,
        "rp": "Jacarepaguá",
        "cod_rp": "4.1",
        "value": 131
    },
    {
        "nome": "Taquara                   ",
        "codbairro": "122",
        "regiao_adm": "JACAREPAGUA             ",
        "codra": 16,
        "rp": "Jacarepaguá",
        "cod_rp": "4.1",
        "value": 160
    },
    {
        "nome": "Água Santa                ",
        "codbairro": "067",
        "regiao_adm": "MEIER                   ",
        "codra": 13,
        "rp": "Méier",
        "cod_rp": "3.2",
        "value": 303
    },
    {
        "nome": "Lins de Vasconcelos       ",
        "codbairro": "062",
        "regiao_adm": "MEIER                   ",
        "codra": 13,
        "rp": "Méier",
        "cod_rp": "3.2",
        "value": 400
    },
    {
        "nome": "Freguesia (Jacarepaguá)   ",
        "codbairro": "120",
        "regiao_adm": "JACAREPAGUA             ",
        "codra": 16,
        "rp": "Jacarepaguá",
        "cod_rp": "4.1",
        "value": 274
    },
    {
        "nome": "Cidade Nova               ",
        "codbairro": "008",
        "regiao_adm": "RIO COMPRIDO            ",
        "codra": 3,
        "rp": "Centro",
        "cod_rp": "1.1",
        "value": 374
    },
    {
        "nome": "Praça da Bandeira         ",
        "codbairro": "032",
        "regiao_adm": "TIJUCA                  ",
        "codra": 8,
        "rp": "Tijuca",
        "cod_rp": "2.2",
        "value": 546
    },
    {
        "nome": "Vila Isabel               ",
        "codbairro": "036",
        "regiao_adm": "VILA ISABEL             ",
        "codra": 9,
        "rp": "Tijuca",
        "cod_rp": "2.2",
        "value": 256
    },
    {
        "nome": "Maracanã                  ",
        "codbairro": "035",
        "regiao_adm": "VILA ISABEL             ",
        "codra": 9,
        "rp": "Tijuca",
        "cod_rp": "2.2",
        "value": 957
    },
    {
        "nome": "Glória                    ",
        "codbairro": "016",
        "regiao_adm": "BOTAFOGO                ",
        "codra": 4,
        "rp": "Zona Sul",
        "cod_rp": "2.1",
        "value": 917
    },
    {
        "nome": "Rio Comprido              ",
        "codbairro": "007",
        "regiao_adm": "RIO COMPRIDO            ",
        "codra": 3,
        "rp": "Centro",
        "cod_rp": "1.1",
        "value": 898
    },
    {
        "nome": "Santa Teresa              ",
        "codbairro": "014",
        "regiao_adm": "SANTA TEREZA            ",
        "codra": 23,
        "rp": "Centro",
        "cod_rp": "1.1",
        "value": 176
    },
    {
        "nome": "Estácio                   ",
        "codbairro": "009",
        "regiao_adm": "RIO COMPRIDO            ",
        "codra": 3,
        "rp": "Centro",
        "cod_rp": "1.1",
        "value": 692
    },
    {
        "nome": "Tijuca                    ",
        "codbairro": "033",
        "regiao_adm": "TIJUCA                  ",
        "codra": 8,
        "rp": "Tijuca",
        "cod_rp": "2.2",
        "value": 384
    },
    {
        "nome": "Catumbi                   ",
        "codbairro": "006",
        "regiao_adm": "RIO COMPRIDO            ",
        "codra": 3,
        "rp": "Centro",
        "cod_rp": "1.1",
        "value": 440
    },
    {
        "nome": "Grajaú                    ",
        "codbairro": "038",
        "regiao_adm": "VILA ISABEL             ",
        "codra": 9,
        "rp": "Tijuca",
        "cod_rp": "2.2",
        "value": 266
    },
    {
        "nome": "Pechincha                 ",
        "codbairro": "121",
        "regiao_adm": "JACAREPAGUA             ",
        "codra": 16,
        "rp": "Jacarepaguá",
        "cod_rp": "4.1",
        "value": 369
    },
    {
        "nome": "Andaraí                   ",
        "codbairro": "037",
        "regiao_adm": "VILA ISABEL             ",
        "codra": 9,
        "rp": "Tijuca",
        "cod_rp": "2.2",
        "value": 807
    },
    {
        "nome": "Catete                    ",
        "codbairro": "018",
        "regiao_adm": "BOTAFOGO                ",
        "codra": 4,
        "rp": "Zona Sul",
        "cod_rp": "2.1",
        "value": 689
    },
    {
        "nome": "Flamengo                  ",
        "codbairro": "015",
        "regiao_adm": "BOTAFOGO                ",
        "codra": 4,
        "rp": "Zona Sul",
        "cod_rp": "2.1",
        "value": 201
    },
    {
        "nome": "Laranjeiras               ",
        "codbairro": "017",
        "regiao_adm": "BOTAFOGO                ",
        "codra": 4,
        "rp": "Zona Sul",
        "cod_rp": "2.1",
        "value": 421
    },
    {
        "nome": "Guaratiba                 ",
        "codbairro": "151",
        "regiao_adm": "GUARATIBA               ",
        "codra": 26,
        "rp": "Guaratiba",
        "cod_rp": "5.4",
        "value": 415
    },
    {
        "nome": "Vargem Grande             ",
        "codbairro": "131",
        "regiao_adm": "BARRA DA TIJUCA         ",
        "codra": 24,
        "rp": "Barra da Tijuca",
        "cod_rp": "4.2",
        "value": 454
    },
    {
        "nome": "Alto da Boa Vista         ",
        "codbairro": "034",
        "regiao_adm": "TIJUCA                  ",
        "codra": 8,
        "rp": "Tijuca",
        "cod_rp": "2.2",
        "value": 529
    },
    {
        "nome": "Cosme Velho               ",
        "codbairro": "019",
        "regiao_adm": "BOTAFOGO                ",
        "codra": 4,
        "rp": "Zona Sul",
        "cod_rp": "2.1",
        "value": 56
    },
    {
        "nome": "Curicica                  ",
        "codbairro": "119",
        "regiao_adm": "JACAREPAGUA             ",
        "codra": 16,
        "rp": "Jacarepaguá",
        "cod_rp": "4.1",
        "value": 840
    },
    {
        "nome": "Botafogo                  ",
        "codbairro": "020",
        "regiao_adm": "BOTAFOGO                ",
        "codra": 4,
        "rp": "Zona Sul",
        "cod_rp": "2.1",
        "value": 682
    },
    {
        "nome": "Urca                      ",
        "codbairro": "022",
        "regiao_adm": "BOTAFOGO                ",
        "codra": 4,
        "rp": "Zona Sul",
        "cod_rp": "2.1",
        "value": 95
    },
    {
        "nome": "Cidade de Deus            ",
        "codbairro": "118",
        "regiao_adm": "CIDADE DE DEUS          ",
        "codra": 34,
        "rp": "Jacarepaguá",
        "cod_rp": "4.1",
        "value": 819
    },
    {
        "nome": "Sepetiba                  ",
        "codbairro": "150",
        "regiao_adm": "SANTA CRUZ              ",
        "codra": 19,
        "rp": "Santa Cruz",
        "cod_rp": "5.3",
        "value": 187
    },
    {
        "nome": "Anil                      ",
        "codbairro": "116",
        "regiao_adm": "JACAREPAGUA             ",
        "codra": 16,
        "rp": "Jacarepaguá",
        "cod_rp": "4.1",
        "value": 802
    },
    {
        "nome": "Jacarepaguá               ",
        "codbairro": "115",
        "regiao_adm": "JACAREPAGUA             ",
        "codra": 16,
        "rp": "Jacarepaguá",
        "cod_rp": "4.1",
        "value": 166
    },
    {
        "nome": "Camorim                   ",
        "codbairro": "129",
        "regiao_adm": "BARRA DA TIJUCA         ",
        "codra": 24,
        "rp": "Barra da Tijuca",
        "cod_rp": "4.2",
        "value": 815
    },
    {
        "nome": "Humaitá                   ",
        "codbairro": "021",
        "regiao_adm": "BOTAFOGO                ",
        "codra": 4,
        "rp": "Zona Sul",
        "cod_rp": "2.1",
        "value": 665
    },
    {
        "nome": "Gardênia Azul             ",
        "codbairro": "117",
        "regiao_adm": "JACAREPAGUA             ",
        "codra": 16,
        "rp": "Jacarepaguá",
        "cod_rp": "4.1",
        "value": 994
    },
    {
        "nome": "Jardim Botânico           ",
        "codbairro": "028",
        "regiao_adm": "LAGOA                   ",
        "codra": 6,
        "rp": "Zona Sul",
        "cod_rp": "2.1",
        "value": 36
    },
    {
        "nome": "Vargem Pequena            ",
        "codbairro": "130",
        "regiao_adm": "BARRA DA TIJUCA         ",
        "codra": 24,
        "rp": "Barra da Tijuca",
        "cod_rp": "4.2",
        "value": 240
    },
    {
        "nome": "Copacabana                ",
        "codbairro": "024",
        "regiao_adm": "COPACABANA              ",
        "codra": 5,
        "rp": "Zona Sul",
        "cod_rp": "2.1",
        "value": 408
    },
    {
        "nome": "Leme                      ",
        "codbairro": "023",
        "regiao_adm": "COPACABANA              ",
        "codra": 5,
        "rp": "Zona Sul",
        "cod_rp": "2.1",
        "value": 808
    },
    {
        "nome": "Lagoa                     ",
        "codbairro": "027",
        "regiao_adm": "LAGOA                   ",
        "codra": 6,
        "rp": "Zona Sul",
        "cod_rp": "2.1",
        "value": 479
    },
    {
        "nome": "Itanhangá                 ",
        "codbairro": "127",
        "regiao_adm": "BARRA DA TIJUCA         ",
        "codra": 24,
        "rp": "Barra da Tijuca",
        "cod_rp": "4.2",
        "value": 748
    },
    {
        "nome": "Gávea                     ",
        "codbairro": "029",
        "regiao_adm": "LAGOA                   ",
        "codra": 6,
        "rp": "Zona Sul",
        "cod_rp": "2.1",
        "value": 336
    },
    {
        "nome": "Barra da Tijuca           ",
        "codbairro": "128",
        "regiao_adm": "BARRA DA TIJUCA         ",
        "codra": 24,
        "rp": "Barra da Tijuca",
        "cod_rp": "4.2",
        "value": 836
    },
    {
        "nome": "Leblon                    ",
        "codbairro": "026",
        "regiao_adm": "LAGOA                   ",
        "codra": 6,
        "rp": "Zona Sul",
        "cod_rp": "2.1",
        "value": 40
    },
    {
        "nome": "Ipanema                   ",
        "codbairro": "025",
        "regiao_adm": "LAGOA                   ",
        "codra": 6,
        "rp": "Zona Sul",
        "cod_rp": "2.1",
        "value": 28
    },
    {
        "nome": "São Conrado               ",
        "codbairro": "031",
        "regiao_adm": "LAGOA                   ",
        "codra": 6,
        "rp": "Zona Sul",
        "cod_rp": "2.1",
        "value": 852
    },
    {
        "nome": "Rocinha                   ",
        "codbairro": "154",
        "regiao_adm": "ROCINHA                 ",
        "codra": 27,
        "rp": "Zona Sul",
        "cod_rp": "2.1",
        "value": 233
    },
    {
        "nome": "Pedra de Guaratiba        ",
        "codbairro": "153",
        "regiao_adm": "GUARATIBA               ",
        "codra": 26,
        "rp": "Guaratiba",
        "cod_rp": "5.4",
        "value": 504
    },
    {
        "nome": "Recreio dos Bandeirantes  ",
        "codbairro": "132",
        "regiao_adm": "BARRA DA TIJUCA         ",
        "codra": 24,
        "rp": "Barra da Tijuca",
        "cod_rp": "4.2",
        "value": 245
    },
    {
        "nome": "Vidigal                   ",
        "codbairro": "030",
        "regiao_adm": "LAGOA                   ",
        "codra": 6,
        "rp": "Zona Sul",
        "cod_rp": "2.1",
        "value": 505
    },
    {
        "nome": "Joá                       ",
        "codbairro": "126",
        "regiao_adm": "BARRA DA TIJUCA         ",
        "codra": 24,
        "rp": "Barra da Tijuca",
        "cod_rp": "4.2",
        "value": 891
    },
    {
        "nome": "Barra de Guaratiba        ",
        "codbairro": "152",
        "regiao_adm": "GUARATIBA               ",
        "codra": 26,
        "rp": "Guaratiba",
        "cod_rp": "5.4",
        "value": 656
    },
    {
        "nome": "Grumari                   ",
        "codbairro": "133",
        "regiao_adm": "BARRA DA TIJUCA         ",
        "codra": 24,
        "rp": "Barra da Tijuca",
        "cod_rp": "4.2",
        "value": 771
    },
    {
        "nome": "Caju                      ",
        "codbairro": "004",
        "regiao_adm": "PORTUARIA               ",
        "codra": 1,
        "rp": "Centro",
        "cod_rp": "1.1",
        "value": 146
    },
    {
        "nome": "Deodoro                   ",
        "codbairro": "134",
        "regiao_adm": "REALENGO                ",
        "codra": 33,
        "rp": "Bangu",
        "cod_rp": "5.1",
        "value": 770
    },
    {
        "nome": "Lapa",
        "codbairro": "161",
        "regiao_adm": "CENTRO",
        "codra": 2,
        "rp": "Centro",
        "cod_rp": "1.1",
        "value": 305
    },
    {
        "nome": "Campo Grande",
        "codbairro": "144",
        "regiao_adm": "CAMPO GRANDE            ",
        "codra": 18,
        "rp": "Campo Grande",
        "cod_rp": "5.2",
        "value": 131
    },
    {
        "nome": "Bangu",
        "codbairro": "141",
        "regiao_adm": "BANGU                   ",
        "codra": 17,
        "rp": "Bangu",
        "cod_rp": "5.1",
        "value": 1000
    },
    {
        "nome": "Gericinó",
        "codbairro": "160",
        "regiao_adm": "BANGU                   ",
        "codra": 17,
        "rp": "Bangu",
        "cod_rp": "5.1",
        "value": 161
    },
    {
        "nome": "Jabour",
        "codbairro": "163",
        "regiao_adm": "BANGU",
        "codra": 17,
        "rp": "Bangu",
        "cod_rp": "5.1",
        "value": 131
    },
    {
        "nome": "Vila Kennedy",
        "codbairro": "162",
        "regiao_adm": "BANGU                   ",
        "codra": 17,
        "rp": "Bangu",
        "cod_rp": "5.1",
        "value": 518
    },
    {
        "nome": "Ilha de Guaratiba",
        "codbairro": "164",
        "regiao_adm": "GUARATIBA               ",
        "codra": 26,
        "rp": "Guaratiba",
        "cod_rp": "5.4",
        "value": 425
    }
  ];

  const dataRp = [
    {
        "rp": "Centro",
        "value": 26
    },
    {
        "rp": "Ilha do Governador",
        "value": 216
    },
    {
        "rp": "Penha",
        "value": 245
    },
    {
        "rp": "Pavuna",
        "value": 614
    },
    {
        "rp": "Madureira",
        "value": 74
    },
    {
        "rp": "Ramos",
        "value": 407
    },
    {
        "rp": "Bangu",
        "value": 12
    },
    {
        "rp": "Santa Cruz",
        "value": 749
    },
    {
        "rp": "Inhaúma",
        "value": 549
    },
    {
        "rp": "Campo Grande",
        "value": 212
    },
    {
        "rp": "Méier",
        "value": 272
    },
    {
        "rp": "Jacarepaguá",
        "value": 918
    },
    {
        "rp": "Tijuca",
        "value": 858
    },
    {
        "rp": "Zona Sul",
        "value": 463
    },
    {
        "rp": "Guaratiba",
        "value": 9
    },
    {
        "rp": "Barra da Tijuca",
        "value": 701
    }
  ];

  const dataRA = [
    {
        "codra": 21,
        "value": 597
    },
    {
        "codra": 20,
        "value": 831
    },
    {
        "codra": 31,
        "value": 393
    },
    {
        "codra": 25,
        "value": 272
    },
    {
        "codra": 11,
        "value": 332
    },
    {
        "codra": 14,
        "value": 954
    },
    {
        "codra": 22,
        "value": 599
    },
    {
        "codra": 15,
        "value": 960
    },
    {
        "codra": 10,
        "value": 843
    },
    {
        "codra": 30,
        "value": 18
    },
    {
        "codra": 33,
        "value": 792
    },
    {
        "codra": 19,
        "value": 233
    },
    {
        "codra": 12,
        "value": 122
    },
    {
        "codra": 29,
        "value": 251
    },
    {
        "codra": 17,
        "value": 180
    },
    {
        "codra": 18,
        "value": 817
    },
    {
        "codra": 13,
        "value": 356
    },
    {
        "codra": 16,
        "value": 618
    },
    {
        "codra": 28,
        "value": 836
    },
    {
        "codra": 7,
        "value": 490
    },
    {
        "codra": 1,
        "value": 103
    },
    {
        "codra": 2,
        "value": 543
    },
    {
        "codra": 3,
        "value": 631
    },
    {
        "codra": 8,
        "value": 385
    },
    {
        "codra": 9,
        "value": 650
    },
    {
        "codra": 4,
        "value": 469
    },
    {
        "codra": 23,
        "value": 55
    },
    {
        "codra": 26,
        "value": 482
    },
    {
        "codra": 24,
        "value": 41
    },
    {
        "codra": 34,
        "value": 534
    },
    {
        "codra": 6,
        "value": 702
    },
    {
        "codra": 5,
        "value": 196
    },
    {
        "codra": 27,
        "value": 774
    }
  ];

  const dataN = [
    {
        "codbairro": 13,
        "value": 592
    },
    {
        "codbairro": 98,
        "value": 801
    },
    {
        "codbairro": 97,
        "value": 914
    },
    {
        "codbairro": 104,
        "value": 400
    },
    {
        "codbairro": 101,
        "value": 432
    },
    {
        "codbairro": 103,
        "value": 470
    },
    {
        "codbairro": 102,
        "value": 920
    },
    {
        "codbairro": 48,
        "value": 278
    },
    {
        "codbairro": 96,
        "value": 628
    },
    {
        "codbairro": 49,
        "value": 986
    },
    {
        "codbairro": 100,
        "value": 132
    },
    {
        "codbairro": 114,
        "value": 557
    },
    {
        "codbairro": 46,
        "value": 468
    },
    {
        "codbairro": 99,
        "value": 316
    },
    {
        "codbairro": 47,
        "value": 398
    },
    {
        "codbairro": 159,
        "value": 739
    },
    {
        "codbairro": 95,
        "value": 500
    },
    {
        "codbairro": 44,
        "value": 829
    },
    {
        "codbairro": 93,
        "value": 420
    },
    {
        "codbairro": 76,
        "value": 248
    },
    {
        "codbairro": 107,
        "value": 499
    },
    {
        "codbairro": 111,
        "value": 93
    },
    {
        "codbairro": 94,
        "value": 942
    },
    {
        "codbairro": 113,
        "value": 416
    },
    {
        "codbairro": 45,
        "value": 615
    },
    {
        "codbairro": 43,
        "value": 375
    },
    {
        "codbairro": 92,
        "value": 852
    },
    {
        "codbairro": 91,
        "value": 539
    },
    {
        "codbairro": 110,
        "value": 785
    },
    {
        "codbairro": 106,
        "value": 717
    },
    {
        "codbairro": 108,
        "value": 156
    },
    {
        "codbairro": 112,
        "value": 857
    },
    {
        "codbairro": 75,
        "value": 244
    },
    {
        "codbairro": 109,
        "value": 249
    },
    {
        "codbairro": 77,
        "value": 463
    },
    {
        "codbairro": 87,
        "value": 553
    },
    {
        "codbairro": 42,
        "value": 69
    },
    {
        "codbairro": 74,
        "value": 212
    },
    {
        "codbairro": 157,
        "value": 899
    },
    {
        "codbairro": 135,
        "value": 981
    },
    {
        "codbairro": 105,
        "value": 789
    },
    {
        "codbairro": 86,
        "value": 196
    },
    {
        "codbairro": 41,
        "value": 341
    },
    {
        "codbairro": 139,
        "value": 983
    },
    {
        "codbairro": 72,
        "value": 511
    },
    {
        "codbairro": 90,
        "value": 751
    },
    {
        "codbairro": 73,
        "value": 507
    },
    {
        "codbairro": 148,
        "value": 864
    },
    {
        "codbairro": 55,
        "value": 39
    },
    {
        "codbairro": 156,
        "value": 841
    },
    {
        "codbairro": 84,
        "value": 939
    },
    {
        "codbairro": 140,
        "value": 46
    },
    {
        "codbairro": 89,
        "value": 806
    },
    {
        "codbairro": 85,
        "value": 364
    },
    {
        "codbairro": 40,
        "value": 91
    },
    {
        "codbairro": 54,
        "value": 136
    },
    {
        "codbairro": 56,
        "value": 627
    },
    {
        "codbairro": 143,
        "value": 304
    },
    {
        "codbairro": 83,
        "value": 165
    },
    {
        "codbairro": 88,
        "value": 689
    },
    {
        "codbairro": 149,
        "value": 345
    },
    {
        "codbairro": 138,
        "value": 571
    },
    {
        "codbairro": 142,
        "value": 742
    },
    {
        "codbairro": 80,
        "value": 915
    },
    {
        "codbairro": 136,
        "value": 191
    },
    {
        "codbairro": 50,
        "value": 114
    },
    {
        "codbairro": 39,
        "value": 952
    },
    {
        "codbairro": 81,
        "value": 994
    },
    {
        "codbairro": 71,
        "value": 389
    },
    {
        "codbairro": 53,
        "value": 454
    },
    {
        "codbairro": 69,
        "value": 19
    },
    {
        "codbairro": 82,
        "value": 321
    },
    {
        "codbairro": 125,
        "value": 193
    },
    {
        "codbairro": 52,
        "value": 839
    },
    {
        "codbairro": 79,
        "value": 985
    },
    {
        "codbairro": 137,
        "value": 344
    },
    {
        "codbairro": 78,
        "value": 97
    },
    {
        "codbairro": 70,
        "value": 599
    },
    {
        "codbairro": 145,
        "value": 972
    },
    {
        "codbairro": 147,
        "value": 8
    },
    {
        "codbairro": 155,
        "value": 380
    },
    {
        "codbairro": 65,
        "value": 720
    },
    {
        "codbairro": 124,
        "value": 947
    },
    {
        "codbairro": 12,
        "value": 950
    },
    {
        "codbairro": 66,
        "value": 21
    },
    {
        "codbairro": 10,
        "value": 63
    },
    {
        "codbairro": 158,
        "value": 973
    },
    {
        "codbairro": 146,
        "value": 824
    },
    {
        "codbairro": 64,
        "value": 127
    },
    {
        "codbairro": 51,
        "value": 207
    },
    {
        "codbairro": 68,
        "value": 770
    },
    {
        "codbairro": 58,
        "value": 909
    },
    {
        "codbairro": 63,
        "value": 979
    },
    {
        "codbairro": 2,
        "value": 164
    },
    {
        "codbairro": 3,
        "value": 155
    },
    {
        "codbairro": 5,
        "value": 802
    },
    {
        "codbairro": 60,
        "value": 387
    },
    {
        "codbairro": 59,
        "value": 111
    },
    {
        "codbairro": 1,
        "value": 746
    },
    {
        "codbairro": 57,
        "value": 180
    },
    {
        "codbairro": 61,
        "value": 860
    },
    {
        "codbairro": 11,
        "value": 256
    },
    {
        "codbairro": 123,
        "value": 867
    },
    {
        "codbairro": 122,
        "value": 610
    },
    {
        "codbairro": 67,
        "value": 802
    },
    {
        "codbairro": 62,
        "value": 991
    },
    {
        "codbairro": 120,
        "value": 238
    },
    {
        "codbairro": 8,
        "value": 148
    },
    {
        "codbairro": 32,
        "value": 49
    },
    {
        "codbairro": 36,
        "value": 955
    },
    {
        "codbairro": 35,
        "value": 772
    },
    {
        "codbairro": 16,
        "value": 115
    },
    {
        "codbairro": 7,
        "value": 146
    },
    {
        "codbairro": 14,
        "value": 565
    },
    {
        "codbairro": 9,
        "value": 453
    },
    {
        "codbairro": 33,
        "value": 172
    },
    {
        "codbairro": 6,
        "value": 463
    },
    {
        "codbairro": 38,
        "value": 966
    },
    {
        "codbairro": 121,
        "value": 325
    },
    {
        "codbairro": 37,
        "value": 925
    },
    {
        "codbairro": 18,
        "value": 655
    },
    {
        "codbairro": 15,
        "value": 493
    },
    {
        "codbairro": 17,
        "value": 835
    },
    {
        "codbairro": 151,
        "value": 861
    },
    {
        "codbairro": 131,
        "value": 299
    },
    {
        "codbairro": 34,
        "value": 770
    },
    {
        "codbairro": 19,
        "value": 922
    },
    {
        "codbairro": 119,
        "value": 779
    },
    {
        "codbairro": 20,
        "value": 398
    },
    {
        "codbairro": 22,
        "value": 467
    },
    {
        "codbairro": 118,
        "value": 442
    },
    {
        "codbairro": 150,
        "value": 70
    },
    {
        "codbairro": 116,
        "value": 219
    },
    {
        "codbairro": 115,
        "value": 955
    },
    {
        "codbairro": 129,
        "value": 484
    },
    {
        "codbairro": 21,
        "value": 436
    },
    {
        "codbairro": 117,
        "value": 243
    },
    {
        "codbairro": 28,
        "value": 866
    },
    {
        "codbairro": 130,
        "value": 408
    },
    {
        "codbairro": 24,
        "value": 298
    },
    {
        "codbairro": 23,
        "value": 958
    },
    {
        "codbairro": 27,
        "value": 48
    },
    {
        "codbairro": 127,
        "value": 409
    },
    {
        "codbairro": 29,
        "value": 811
    },
    {
        "codbairro": 128,
        "value": 685
    },
    {
        "codbairro": 26,
        "value": 506
    },
    {
        "codbairro": 25,
        "value": 663
    },
    {
        "codbairro": 31,
        "value": 855
    },
    {
        "codbairro": 154,
        "value": 798
    },
    {
        "codbairro": 153,
        "value": 751
    },
    {
        "codbairro": 132,
        "value": 328
    },
    {
        "codbairro": 30,
        "value": 24
    },
    {
        "codbairro": 126,
        "value": 946
    },
    {
        "codbairro": 152,
        "value": 270
    },
    {
        "codbairro": 133,
        "value": 906
    },
    {
        "codbairro": 4,
        "value": 398
    },
    {
        "codbairro": 134,
        "value": 226
    },
    {
        "codbairro": 161,
        "value": 794
    },
    {
        "codbairro": 144,
        "value": 833
    },
    {
        "codbairro": 141,
        "value": 370
    },
    {
        "codbairro": 160,
        "value": 613
    },
    {
        "codbairro": 163,
        "value": 865
    },
    {
        "codbairro": 162,
        "value": 856
    },
    {
        "codbairro": 164,
        "value": 747
    }
  ];

  return (
    <Container>
      <NavBar />
      <Content>
        <Cards>
          <Card>
            <FiArrowUpCircle />
            <div>
              <strong>Máximo</strong>
              <p>Magalhães Bastos</p>
              <p>1050</p>
            </div>
          </Card>
          <Card>
            <FiArrowDownCircle />
            <div>
              <strong>Mínimo</strong>
              <p>Recreio dos Bandeirantes</p>
              <p>1050</p>
            </div>
          </Card>
          <Card>
            <FiBarChart2 />
            <div>
              <strong>Média</strong>
              <p>1050</p>
            </div>
          </Card>
          <Card>
            <FiPlusCircle />
            <div>
              <strong>Total</strong>
              <p>10000</p>
            </div>
          </Card>
        </Cards>
        <Map>
          <NeighborhoodsMap name={'Legenda'} captionColors={captionColors} data={data} captionItems={captionItems} regionType="neighborhood" />
        </Map>
      </Content>
    </Container>
  );
}