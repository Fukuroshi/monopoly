
export const Players = [
        {
            id: 0,
            bank: 20000,
            penalty: 0,
            name: "Player 1",
            tile: 1,
        },
        {
            id: 1,
            bank: 20000,
            penalty: 0,
            name: "Player 2",
            tile: 1,
        },
        {
            id: 2,
            bank: 20000,
            penalty: 0,
            name: "Player 3",
            tile: 1,
        },
        {
            id: 3,
            bank: 20000,
            penalty: 0,
            name: "Player 4",
            tile: 1,
        }
    ];

export const PlayerCount = (number) => {
        let result = [];
        Players.forEach((x) => {
          if (x.id<number) {
            result.push(x);
          }
        });
        return result;
      };
      