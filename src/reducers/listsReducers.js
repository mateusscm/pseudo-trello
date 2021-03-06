import { CONSTANTS } from "../actions";

let listID = 2;
let cardID = 9;

const initialState = [
  // {
  //   title: "Bem-vindo",
  //   id: `list-${0}`,
  //   cards: [
  //     {
  //       id: `card-${0}`,
  //       text:
  //         "Velit deserunt irure irut sunt anim ex. Aliqua ex veniam irure deserunt excepteur aliquip laborum aute exercitation."
  //     }
  //     // {
  //     //   id: `card-${1}`,
  //     //   text:
  //     //     "sufbhse jfbwe fdsbfkj basfkeewf wef wefwefwefwecxzvdrgvs baerg er a "
  //     // }
  //   ]
  // },
  // {
  //   title: "TODO",
  //   id: `list-${1}`,
  //   cards: [
  //     {
  //       id: `card-${2}`,
  //       text: "pteur aliquip laborum aute exercitation."
  //     },
  //     {
  //       id: `card-${3}`,
  //       text:
  //         "Alguma coisa muito legal que possa agregar muito na tarefa pois testou tentando fazer isso bacana."
  //     },
  //     {
  //       id: `card-${4}`,
  //       text:
  //         "Isso é uma cópia descarada do trello que estou treinandotreinandotreinando treinandotreinandotrei."
  //     },
  //     {
  //       id: `card-${5}`,
  //       text: "pteur aliquip laborum aute exercitation."
  //     },
  //     {
  //       id: `card-${6}`,
  //       text:
  //         "Alguma coisa muito legal que possa agregar muito na tarefa pois testou tentando fazer isso bacana."
  //     },
  //     {
  //       id: `card-${7}`,
  //       text:
  //         "Isso é uma cópia descarada do trello que estou treinandotreinandotreinando treinandotreinandotrei."
  //     },
  //     {
  //       id: `card-${8}`,
  //       text: "pteur aliquip laborum aute exercitation."
  //     },
  //     {
  //       id: `card-${9}`,
  //       text:
  //         "Alguma coisa muito legal que possa agregar muito na tarefa pois testou tentando fazer isso bacana."
  //     },
  //     {
  //       id: `card-${10}`,
  //       text:
  //         "Isso é uma cópia descarada do trello que estou treinandotreinandotreinando treinandotreinandotrei."
  //     }
  //   ]
  // }
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: `list-${listID}`
      };
      listID += 1;
      return [...state, newList];
    case CONSTANTS.ADD_CARD: {
      const newCard = {
        text: action.payload.text,
        id: `card-${cardID}`
      };
      cardID += 1;
      const newState = state.map(list => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard]
          };
        } else {
          return list;
        }
      });
      return newState;
    }
    case CONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
        type
      } = action.payload;
      const newState = [...state];

      // dragging list around
      if (type === "list") {
        const list = newState.splice(droppableIndexStart, 1);
        newState.splice(droppableIndexEnd, 0, ...list);
        return newState;
      }

      //na mesma lista
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find(list => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }

      // em outra lista
      if (droppableIdStart !== droppableIdEnd) {
        // procura a lista onde o drag aconteceu
        const listStart = state.find(list => droppableIdStart === list.id);

        // retira o card da lista
        const card = listStart.cards.splice(droppableIndexStart, 1);

        // procura a lista onde o drag termina
        const listEnd = state.find(list => droppableIdEnd === list.id);

        // coloca o card em uma nova lista
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }

      return newState;
    default:
      return state;
  }
};

export default listsReducer;
