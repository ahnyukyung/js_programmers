// const TEMPLATE = '<input type="text">';

isDarkMode = null;

class DarkModeToggle {
  constructor({ $target }) {
    const $DarkModeToggle = document.createElement("input");
    this.$DarkModeToggle = $DarkModeToggle;
    this.$DarkModeToggle.type = "checkbox";

    $DarkModeToggle.className = "DarkModeToggle";
    $target.appendChild($DarkModeToggle);

    $DarkModeToggle.addEventListener("change", (e) => {
      // console.dir(e.target.checked);
      document.documentElement.setAttribute(
        "color-mode",
        e.target.checked ? "dark" : "light"
      );
    });

    /******* 다크모드 초기화 (isDarkMode state, checkbox 상태, HTML attr) *******/
    // matchMedia() 함수는 MediaQueryList를 반환하는데 이 객체는 media와 matches라는 두 프로퍼티가 존재한다.
    // media는 사용한 미디어쿼리 문자열을 반환하고 matches는 현재 화면에 미디어쿼리의 범위에 들어가면 true를 반환하고 아니면 false를 반환한다.
    // 사용자 pc가 다크모드이면 true, 라이트모드이면 false
    this.isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    this.$DarkModeToggle.checked = this.isDarkMode;
    document.documentElement.setAttribute(
      "color-mode",
      this.isDarkMode ? "dark" : "light"
    );

    // console.log("DarkModeToggle created.", this);
  }
  // render() {}
}
