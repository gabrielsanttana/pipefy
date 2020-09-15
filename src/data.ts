export function loadLists() {
  return [
    {
      title: 'Backlog',
      creatable: true,
      done: false,
      cards: [
        {
          id: 1,
          description: 'Estudar módulo 01 de NodeJS',
          labels: ['#7159c1'],
          userAvatar: 'https://github.com/gabrielsanttana.png',
        },
        {
          id: 2,
          description:
            'Criar vídeo para o Youtube ensinando a recriar a interface do Pipefy',
          labels: ['#7159c1'],
          userAvatar: 'https://github.com/gabrielsanttana.png',
        },
        {
          id: 3,
          description: 'Estudar módulo 03 de React Native',
          labels: ['#7159c1'],
          userAvatar: 'https://github.com/gabrielsanttana.png',
        },
        {
          id: 4,
          description:
            'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"',
          labels: ['#54e1f7'],
          userAvatar: 'https://github.com/gabrielsanttana.png',
        },
        {
          id: 5,
          description: 'Gravar testes e deploy ReactJS',
          labels: ['#54e1f7'],
          userAvatar: 'https://github.com/gabrielsanttana.png',
        },
      ],
    },
    {
      title: 'To Do',
      creatable: false,
      done: false,
      cards: [
        {
          id: 6,
          description: 'Recriando clone do Pipefy',
          labels: [],
          userAvatar: 'https://github.com/gabrielsanttana.png',
        },
      ],
    },
    {
      title: 'Doing',
      creatable: false,
      done: false,
      cards: [
        {
          id: 7,
          description: 'Gravar sobre Geolocalização e mapas com React Native',
          labels: ['#7159c1'],
          userAvatar: 'https://github.com/gabrielsanttana.png',
        },
        {
          id: 8,
          description: 'Gravar testes e deploy ReactJS',
          labels: ['#54e1f7'],
          userAvatar: 'https://github.com/gabrielsanttana.png',
        },
        {
          id: 9,
          description: 'Ajustes na biblioteca unform',
          labels: [],
          userAvatar: 'https://github.com/gabrielsanttana.png',
        },
      ],
    },
    {
      title: 'Done',
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          description: 'Gravar aula sobre deploy e CI com React Native',
          labels: [],
          userAvatar: 'https://github.com/gabrielsanttana.png',
        },
        {
          id: 12,
          description: 'Gravar testes e deploy ReactJS',
          labels: ['#54e1f7'],
          userAvatar: 'https://github.com/gabrielsanttana.png',
        },
        {
          id: 13,
          description:
            'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
          labels: ['#7159c1'],
          userAvatar: 'https://github.com/gabrielsanttana.png',
        },
      ],
    },
  ];
}
