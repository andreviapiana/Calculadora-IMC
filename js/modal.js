export const Modal = {
    wrapper: document.querySelector(".modal-wrapper"),
    message: document.querySelector(".modal .title span"),
    buttonClose: document.querySelector(".modal button.close"),
    weightMessage: document.querySelector(".modal .title p"),

    // Essa linha abaixo é a mesma coisa que isso -> open: function() {}
    open() {
        Modal.wrapper.classList.add("open");
    },
    close() {
        Modal.wrapper.classList.remove("open");
    }
}

Modal.buttonClose.onclick = () => {
    Modal.close();
}

window.addEventListener("keydown", handleKeyDown);

function handleKeyDown(event) {
    if (event.key === "Escape") {
        Modal.close();
    }
}