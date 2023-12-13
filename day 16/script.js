function printRange(num = 0, action = () => {}) {
    if (num === 0) {
      document.getElementById('countdown').textContent = 'Happy Independence Day!';
      const img = new Image(500, 200); // width, height
img.src = "https://media3.giphy.com/media/V9Ik229WOI6WSQK5KN/giphy.gif?cid=ecf05e47cq0vbtczufo786fxhvkjsl78q8fprumgtwpqkjf7&ep=v1_gifs_search&rid=giphy.gif&ct=g";
document.body.appendChild(img);
      return;
    }
  
    document.getElementById('countdown').textContent = num;
    setTimeout(() => {
      printRange(num - 1);
    }, 1000);
  }
  
  printRange(10, (num) => {
    printRange(num, (num) => {
      printRange(num, (num) => {
        printRange(num, (num) => {
          printRange(num, (num) => {
            printRange(num, (num) => {
              printRange(num, (num) => {
                printRange(num, (num) => {
                  printRange(num, (num) => {
                    printRange(num);
                  });
                });
              });
            });
          });
        });
      });
    });
  });
  