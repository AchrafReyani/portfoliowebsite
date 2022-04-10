function toggleLanguage(language) {
    let introduction = document.getElementById("introduction");
    if (language == "Nederlands") {
      introduction.innerHTML = "Hallo";
    }
    else if (language == "日本語") {
      introduction.innerHTML = "こんにちは";
    }
    else if (language == "English") {
      introduction.innerHTML = "Hello";
    }
  }
