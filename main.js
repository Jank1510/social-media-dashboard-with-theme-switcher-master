var theme = "dark"

function btn() {
    if (theme == 'dark') {

        var botom = document.getElementsByClassName("btn-theme-off")[0];
        botom.className = "btn-theme-on";

        var body = document.getElementsByClassName("dark-theme-body")[0];
        body.className = "white-theme-body ";



        for (let index = 0; index < 12; index++) {
            var cardBbackground = document.getElementsByClassName("dark-mode-card")[0];
            cardBbackground.className = "white-mode-card";
        }
        theme = 'white'
    } else {
        if (theme == 'white') {


            var botom = document.getElementsByClassName("btn-theme-on")[0];
            botom.className = "btn-theme-off";
            var body = document.getElementsByClassName("white-theme-body")[0];
            body.className = "dark-theme-body ";



            for (let index = 0; index < 12; index++) {
                var cardBbackground = document.getElementsByClassName("white-mode-card")[0];
                cardBbackground.className = "dark-mode-card";
            }
            theme = 'dark'
        }
    }

}