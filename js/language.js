function toggleLanguage(language) {
    let introduction = document.getElementById("introduction");
    let about = document.getElementById("about");
    let bio = document.getElementById("bio");
    let contact = document.getElementById("contact");
    let resume = document.getElementById("resume");

    if (language == "Nederlands") {
      introduction.innerHTML = "Hallo";
      about.innerHTML ="Over mij";
      bio.innerHTML ="ik ben achraf";
      resume.innerHTML ="Curriculum vitae";
      contact.innerHTML ="Contact";
    }
    else if (language == "日本語") {
      introduction.innerHTML = "こんにちは";
      about.innerHTML ="俺様について";
      bio.innerHTML ="俺はアシュラフだ";
      resume.innerHTML ="履歴書";
      contact.innerHTML ="連絡を取り合う";
    }
    else if (language == "English") {
      introduction.innerHTML = "Hello";
      about.innerHTML ="About me";
      bio.innerHTML ="I am achraf";
      resume.innerHTML ="My resume";
      contact.innerHTML ="Contact me!";
    }
  }
