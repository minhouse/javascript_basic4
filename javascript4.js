//JavaScript basic 4

function displayTasks() {
  console.log("==========================\n");
  console.log("現在の持っているタスクの一覧\n");
  console.log("==========================\n");

  let cat = ["[内容]机を片付ける、", "[内容]牛乳を買う、", "[内容]散歩する、"];

  let genre = ["[ジャンル]掃除", "[ジャンル]買い物", "[ジャンル]運動"];

  for (let i = 0; i < cat.length; i++) {
    console.log(cat[i] + genre[i] + "\n");
  }

  const userinput = prompt(
    "「確認、追加、削除、終了」の４つのいずれかを入力してください"
  );

  const userinput2 = prompt("新しいタスクを入力してください");
  const userinput3 = prompt("新しいジャンルを入力してください");

  if (userinput2 !== null && userinput2 !== "") {
    if (userinput3 !== null && userinput3 !== "") {
      cat.push("[内容]" + userinput2 + "、");
      genre.push("[ジャンル]" + userinput3);

      const userinput4 = prompt("新しいタスクを追加致しました");
      console.log("==========================\n");
      console.log("現在の持っているタスクの一覧\n");
      console.log("==========================\n");
      for (let i = 0; i < cat.length; i++) {
        console.log(cat[i] + genre[i] + "\n");
      }
    }
  }
}

displayTasks();
