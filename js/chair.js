(function () {
  const seen = new Set();
  const clues = {
    leg: {
      title: "椅腳",
      say: "四隻腳。有一隻好像沒有平平貼在地上。先看完，再想為什麼。",
      honest: "真的那邊是一張真的椅子的腳。不是我們家那把會晃的，可是椅腳就是這樣站在地上。",
      draw: "../../art/clue-leg.png",
      photo: "../../photos/real-chair-leg.jpg",
      photoAlt: "真的：一張椅子的木頭腳站在地板上，不是會晃的那一把"
    },
    screw: {
      title: "螺絲",
      say: "接的地方有一顆螺絲鬆了。椅子晃，常常是這裡沒鎖緊。",
      honest: "真的那邊是木頭上沒鎖好的螺絲。不是這把椅子接縫那一顆，可是螺絲鬆了就是這樣露出來。",
      draw: "../../art/clue-screw.png",
      photo: "../../photos/real-loose-screw.jpg",
      photoAlt: "真的：木頭上沒鎖好的螺絲，不是椅腳接縫"
    },
    floor: {
      title: "地板",
      say: "地板看起來平平的。這次比較不像地板在作怪。",
      honest: "真的那邊是一塊真的木地板。不是我們家客廳，可是可以看到地板是平的。",
      draw: "../../art/clue-floor.png",
      photo: "../../photos/real-floor.jpg",
      photoAlt: "真的：一塊平平的木地板，不是我們家那間"
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
      if (who.getAttribute("data-who") === "tighten") {
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
