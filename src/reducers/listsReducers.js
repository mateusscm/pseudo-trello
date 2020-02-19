const initialState = [
  {
    title: "Documentos",
    id: 0,
    cards: [
      {
        id: 0,
        text:
          "Velit deserunt irure irut sunt anim ex. Aliqua ex veniam irure deserunt excepteur aliquip laborum aute exercitation."
      },
      {
        id: 1,
        text:
          "sufbhse jfbwe fdsbfkj basfkeewf wef wefwefwefwecxzvdrgvs baerg er a "
      }
    ]
  },
  {
    title: "TODO",
    id: 1,
    cards: [
      {
        id: 0,
        text: "pteur aliquip laborum aute exercitation."
      },
      {
        id: 1,
        text:
          "Alguma coisa muito legal que possa agregar muito na tarefa pois testou tentando fazer isso bacana."
      },
      {
        id: 2,
        text:
          "Isso é uma cópia descarada do trello que estou treinandotreinandotreinando treinandotreinandotrei."
      },
      {
        id: 3,
        text: "pteur aliquip laborum aute exercitation."
      },
      {
        id: 4,
        text:
          "Alguma coisa muito legal que possa agregar muito na tarefa pois testou tentando fazer isso bacana."
      },
      {
        id: 5,
        text:
          "Isso é uma cópia descarada do trello que estou treinandotreinandotreinando treinandotreinandotrei."
      },
      {
        id: 6,
        text: "pteur aliquip laborum aute exercitation."
      },
      {
        id: 7,
        text:
          "Alguma coisa muito legal que possa agregar muito na tarefa pois testou tentando fazer isso bacana."
      },
      {
        id: 8,
        text:
          "Isso é uma cópia descarada do trello que estou treinandotreinandotreinando treinandotreinandotrei."
      }
    ]
  }
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default listsReducer;
