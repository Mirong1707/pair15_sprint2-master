startPage()

function changeStyle(style_path) {
    $('link[rel=stylesheet]').remove()
    $('head').append(`<link rel="stylesheet" type="text/css" href="${style_path}">`)
}

function endOfTheGame() {
    let content = $('#content');
    content.html(' ')
    changeStyle("templates/css/endOfTheGame.css")
    content.load("templates/startPage.html")
}
function settingsPage() {
    let content = $('#content');
    content.html(' ')
    changeStyle("templates/css/gameSettings.css")
    content.load("templates/gameSettings.html")
}

function optionsPage() {
    let content = $('#content');
    content.html(' ')
    changeStyle("templates/css/options.css")
    content.load("templates/options.html")
}

function startPage(){
    let content = $('#content');
    content.html(' ')
    changeStyle("templates/css/startPage.css")
    content.load("templates/startPage.html")
}

function gamePage(){
    let content = $('#content');
    content.html(' ')
    changeStyle("templates/css/gamePage.css")
    $('head').append(`<link rel="stylesheet" type="text/css" href="templates/css/redButtons.css">`)
    content.load("templates/gamePage.html")
}

function quitPage(){
    let content = $('#content');
    content.html(' ')
    changeStyle("templates/css/startPage.css")
    $('head').append(`<link rel="stylesheet" type="text/css" href="templates/css/redButtons.css">`)
    content.load("templates/quit.html")
}
