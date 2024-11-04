export default function addHeaderBg(){
    const header = document.querySelector("#header");    
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        header?.classList?.add("bgChange");
        header?.classList?.remove("bg-bgHero");
      } else {
        header?.classList?.remove("bgChange");
        header?.classList?.add("bg-bgHero");
      }
    });
}
 