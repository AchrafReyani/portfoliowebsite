function toggleLanguage(language) {

    let about = document.getElementById("about");
    let bio = document.getElementById("bio");
    let contact = document.getElementById("contact");
    let phone = document.getElementById("phone");

    if (language == "Nederlands") {

      about.innerHTML ="Over mij";
      bio.innerHTML ="Hallo, mijn naam is Achraf, ben 23 jaar oud en ben wonend in Rotterdam. Ik studeer momenteel technische informatica aan de hogeschool rotterdam en zit alweer in mijn derde jaar. Hobbies zijn onder andere volleyball en in mijn vrije tijd meer leren over game engine architecture. Voor meer informatie neem ook zeker een kijkje op mijn CV. Bedankt voor het lezen!";
      contact.innerHTML ="Contact";
      phone.innerHTML = "06 87 25 20 97";
    }
    else if (language == "日本語") {

      about.innerHTML ="俺様について";
      bio.innerHTML ="ヤッホー、名前はアシュラフ。コンピューター科学の三年生です。年齢は23歳です。血液型は分かりません。現在ロッテルダムに住んでる。趣味はバレーボールとゆき。履歴書も見てください。ちなみによくその秘密のボタンを見つかりましたね。じゃあ、これで失礼します。バイバイ。";
      contact.innerHTML ="連絡を取り合う";
      phone.innerHTML = "+31 6 87 25 20 97";
    }
    else if (language == "English") {

      about.innerHTML ="About me";
      bio.innerHTML ="My name is Achraf. I enjoy programming. I currently live in the netherlands and am a third year computer science student. My hobbies include volleyball and learning about game engine architecture. Thanks for taking a look, feel free to check out my resume.";
      contact.innerHTML ="Contact me!";
      phone.innerHTML = "+31 6 87 25 20 97";
    }
  }
