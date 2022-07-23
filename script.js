const check = document.querySelector(".check");
const doc = document.querySelector(".doc");
const btn = document.querySelector(".button-common");
const norobot = document.querySelector(".not-robot");

const loader = document.querySelector(".loader");

check.addEventListener("click", function () {
    setTimeout(() => {
        check.checked = false;
        norobot.classList.add("inactive");
        btn.classList.remove("inactive");

        btn.addEventListener("click", function () {
                if (!doc.classList.contains("inactive")) {
                    doc.classList.add("inactive");
                }
                loader.classList.remove("inactive");
                setTimeout(() => {
                    loader.style.setProperty(
                        "--width",
                        loader.clientWidth + "px"
                    );
                    setTimeout(() => {
                        loader.classList.add("inactive");
                        doc.classList.remove("inactive");

                        norobot.classList.remove("inactive");
                        btn.classList.add("inactive");
                    }, 3000);
                });
            },0);
    }, 1000);
});
