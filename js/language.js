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
      bio.innerHTML ="俺はアシュラフだ";
      contact.innerHTML ="連絡を取り合う";
    }
    else if (language == "English") {

      about.innerHTML ="About me";
      bio.innerHTML ="I am achraf";
      contact.innerHTML ="Contact me!";
    }
  }
