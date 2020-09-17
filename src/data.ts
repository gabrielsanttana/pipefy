export function loadLists() {
  return [
    {
      title: 'Backlog',
      creatable: true,
      done: false,
      cards: [
        {
          id: 1,
          description: 'Estudar módulo 03 de React Native',
          labels: ['#7159c1'],
          userAvatar: 'https://github.com/gabrielsanttana.png',
        },
        {
          id: 2,
          description:
            'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"',
          labels: ['#54e1f7'],
          userAvatar: 'https://github.com/gabrielsanttana.png',
        },
        {
          id: 3,
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
          id: 1,
          description: 'Bug ao mover um card para uma lista vazia',
          labels: ['#7159c1'],
          userAvatar: 'https://github.com/gabrielsanttana.png',
        },
        {
          id: 2,
          description: 'Bug ao mover um card na última posição de uma lista',
          labels: ['#7159c1'],
          userAvatar: 'https://github.com/gabrielsanttana.png',
        },
        {
          id: 6,
          description: 'Configurar pipeline de CI/CD',
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
          description: 'Clonar a interface do Pipefy',
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
          description: 'Configurar ambiente com Expo',
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
          description: 'Bug na tabela',
          labels: ['#7159c1'],
          userAvatar: 'https://github.com/gabrielsanttana.png',
        },
      ],
    },
  ];
}
