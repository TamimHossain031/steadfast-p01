export default function addHeaderBg(){
    const header = document.querySelector("#header");    
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        header?.classList?.add("bgChange");
      } else {
        header?.classList?.remove("bgChange");
      }
    });
}
 