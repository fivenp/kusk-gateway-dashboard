import Colors from 'src/styles/colors';

export const GlobalScrollbarStyle = `
  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    background: ${Colors.grey2};
  }

  ::-webkit-scrollbar-thumb {
    background: ${Colors.grey5};
  }
`;
