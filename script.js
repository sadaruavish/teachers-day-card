function showMessage() {

    const message = document.getElementById("specialMessage");

    if (message.classList.contains("hidden")) {

        message.classList.remove("hidden");

    } else {

        message.classList.add("hidden");

    }
}
    function sendWhatsApp() {

    const message =
        "Happy Teachers' Day! 🌸\n\n" +
        "Thank you for your guidance, kindness and support. " +
        "You have made a wonderful difference in my life. ❤️\n\n" +
        "Wishing you a very Happy Teachers' Day! 💐";

    const whatsappURL =
        "https://wa.me/?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
}