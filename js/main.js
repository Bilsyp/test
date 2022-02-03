const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const aboutcontent = document.querySelector(".About");
const contactcontent = document.querySelector(".Contact");

about.addEventListener("click", () => {
  //   new WinBox();
  const Box = new WinBox({
    title: "About Me",
    background: "rgb(21, 177, 21)",
    width: "50%",
    height: "400px",
    // top: 50,
    // right: 50,
    // left: 50,
    // bottom: 50,
    mount: aboutcontent,
  });
});
contact.addEventListener("click", () => {
  //   new WinBox();
  const Boxs = new WinBox({
    title: "About Me",
    background: "rgb(21, 177, 21)",
    modal: true,
    width: "50%",
    height: "400px",
    // top: 50,
    // right: 50,
    // left: 50,
    // bottom: 50,
    mount: contactcontent,
  });
});
