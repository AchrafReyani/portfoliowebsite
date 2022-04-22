function toggleLanguage(language) {

    let about = document.getElementById("about");
    let bio = document.getElementById("bio");
    let contact = document.getElementById("contact");

    if (language == "Nederlands") {

      about.innerHTML ="Over mij";
      bio.innerHTML ="ik ben achraf";
      contact.innerHTML ="Contact";
    }
    else if (language == "日本語") {

      about.innerHTML ="俺様について";
      bio.innerHTML ="ヤッホー、名前はアシュラフ。コンピューター科学の三年生です。現在ロッテルダムに住んでる。趣味はバレーボールと履歴書も見てください。ちなみによくその秘密のボタンを見つけたね。じゃあ、これで失礼します。バイバイ。";
      contact.innerHTML ="連絡を取り合う";
    }
    else if (language == "English") {

      about.innerHTML ="About me";
      bio.innerHTML ="I am achraf";
      contact.innerHTML ="Contact me!";
    }
  }
