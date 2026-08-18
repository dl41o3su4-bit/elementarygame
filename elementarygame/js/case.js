(function () {
  const seen = new Set();
  const clues = {
    pink: {
      title: "粉粉的白衣服",
      say: "這件本來是白的，洗完變粉紅了。",
      honest: "真的那邊是一件真的粉紅衣服。不是「白的洗壞」那一張，先拿來對顏色。",
      draw: "../../art/clue-pink.jpg",
      photo: "../../photos/real-pink-tee.jpg",
      photoAlt: "真的粉紅衣服"
    },
    red: {
      title: "新的紅衣服",
      say: "這件紅衣服是新的，顏色好亮。新衣服有時候會把顏色跑出來。",
      honest: "真的那邊是一件真的紅衣服，顏色很亮。",
      draw: "../../art/clue-red.jpg",
      photo: "../../photos/real-red-new.jpg",
      photoAlt: "真的新紅衣服"
    },
    dark: {
      title: "舊的深色衣服",
      say: "這件深色的，洗過好多次了。舊的比較不會亂跑顏色。",
      honest: "真的那邊是舊牛仔褲。深，可是已經洗很久了。",
      draw: "../../art/clue-dark.jpg",
      photo: "../../photos/real-dark-old.jpg",
      photoAlt: "真的舊牛仔褲"
    },
    water: {
      title: "水也紅紅的",
      say: "水裡面有一點紅紅的。顏色是從衣服跑到水裡，再跑到白衣服上。",
      honest: "真的那邊是染料進水裡的照片。洗衣水變紅，也是顏色跑出來。",
      draw: "../../art/clue-water.jpg",
      photo: "../../photos/real-dye-water.jpg",
      photoAlt: "真的染料在水裡"
    }
  };

  function $(sel) { return document.querySelector(sel); }
  function $all(sel) { return Array.from(document.querySelectorAll(sel)); }

  function show(id) {
    $all(".screen").forEach((el) => el.classList.toggle("on", el.id === id));
    window.scrollTo(0, 0);
    hideToast();
  }

  function hideToast() {
    $all(".toast").forEach((el) => el.classList.remove("on"));
  }

  function toast(id) {
    const el = document.getElementById(id);
    if (el) el.classList.add("on");
  }

  function markSeen(key) {
    seen.add(key);
    const card = document.querySelector('[data-clue="' + key + '"]');
    if (card) card.classList.add("seen");
    const go = $("#go-who");
    if (seen.size >= 4) {
      go.disabled = false;
      go.textContent = "是誰做的？";
    } else {
      go.disabled = true;
      go.textContent = "先把四個線索看完（" + seen.size + "/4）";
    }
  }

  function openClue(key) {
    const c = clues[key];
    if (!c) return;
    markSeen(key);
    $("#clue-title").textContent = c.title;
    $("#clue-say").textContent = c.say;
    $("#clue-honest").textContent = c.honest;
    $("#clue-draw").setAttribute("src", c.draw);
    $("#clue-draw").setAttribute("alt", "圖畫：" + c.title);
    $("#clue-photo").setAttribute("src", c.photo);
    $("#clue-photo").setAttribute("alt", c.photoAlt);
    show("screen-clue");
  }

  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-go]");
    if (t) {
      if (t.hasAttribute("disabled") || t.disabled) return;
      show(t.getAttribute("data-go"));
      return;
    }
    const clue = e.target.closest("[data-clue]");
    if (clue) {
      openClue(clue.getAttribute("data-clue"));
      return;
    }
    const who = e.target.closest("[data-who]");
    if (who) {
      hideToast();
      if (who.getAttribute("data-who") === "red") {
        show("screen-rule");
      } else {
        toast("who-again");
      }
      return;
    }
    const rule = e.target.closest("[data-rule]");
    if (rule) {
      hideToast();
      if (rule.getAttribute("data-rule") === "ok") {
        show("screen-end");
      } else {
        toast("rule-again");
      }
    }
  });

  show("screen-story");
})();
