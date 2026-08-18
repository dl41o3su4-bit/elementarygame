(function () {
  const seen = new Set();
  const clues = {
    soil: {
      title: "用手摸土",
      say: "土還是濕的，手指按下去會涼涼的。",
      honest: "真的那邊是有人在澆水、土還濕。不是我們家那一盆，可是就是這樣摸。",
      draw: "../../art/wet-soil.png",
      photo: "../../photos/real-wet-pot.jpg",
      photoAlt: "真的：有人在澆植物，土是濕的"
    },
    pot: {
      title: "看看盆底",
      say: "下面還有水。水太多的時候，根會喘不過氣，葉子就軟掉。",
      honest: "真的那邊是乾裂的地。我們沒找到「盆底積水」的照片，所以這張只拿來對「土的乾濕不一樣」。盆底那件事，回家看自己的盆。",
      draw: "../../art/dry-soil.png",
      photo: "../../photos/real-dry-soil.jpg",
      photoAlt: "真的：乾裂的地，不是花盆底"
    },
    place: {
      title: "它站在哪",
      say: "這盆有光。不是躲在沙發後面那種暗。",
      honest: "真的那邊是窗邊有太陽的植物。不是陰暗角落。這次兇手比較不像「太暗」。",
      draw: "../../art/shade-plant.png",
      photo: "../../photos/real-shade.jpg",
      photoAlt: "真的：窗邊有光的植物"
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
    if (seen.size >= 3) {
      go.disabled = false;
      go.textContent = "那現在要做什麼？";
    } else {
      go.disabled = true;
      go.textContent = "先把三個線索看完（" + seen.size + "/3）";
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
      if (who.getAttribute("data-who") === "wait") {
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
