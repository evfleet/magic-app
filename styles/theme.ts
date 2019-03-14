export interface Theme {
  colors: {
    background: string;
  };
  sizing: {
    content: {
      max: number;
    };
  };
}

const theme: Theme = {
  colors: {
    background: 'red'
  },
  sizing: {
    content: {
      max: 1200
    }
  }
};

export default theme;
