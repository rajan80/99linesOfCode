let friends = ["Sam", "John", "Beth", "Josh", "Jake"];

for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);

  {
    let num = 99;
    for (let num =99; num >0; num--)
      if (num === 2) {
        console.log(
          num +
            " lines of code in the file," +
            num +
            " lines of code;" +
            "John strikes one out," +
            " clears it all out," +
            (num - 1) +
            " lines of code in the file, etc..."
        );
      } else if (num === 1) {
        console.log(
          num +
            " line of code in the file," +
            num +
            " line of code;" +
            "John strikes one out," +
            " clears it all out," +
            (num - 1) +
            " line of code in the file, etc..."
        );
      } else {
        console.log(
          num +
            " lines of code in the file," +
            num +
            " lines of code;" +
            "John strikes one out," +
            " clears it all out," +
            (num - 1) +
            " lines of code in the file, etc ..."
        );
      }
  }
}
