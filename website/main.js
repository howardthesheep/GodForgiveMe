/*
 * The main javascript controller for the site
 */
function main() {
    let button = document.querySelector("button")
    if (button == null) {
        Debug("Button couldn't be found on page")
        return
    }

    // Button Event Listener
    button.addEventListener("click", function (ev) {
        let inputText = document.querySelector("input").value

        // Fade out section

        // Fade In Load Animation

        // Fade Out Load Animation

        // Fade in Results
        BestowJudgement(inputText)
        let confessMore = document.querySelector("#results button")
        confessMore.addEventListener("click", function (event) {
            document.querySelector("#results").setAttribute("hidden", "")
            document.querySelector("#main").removeAttribute("hidden")
        })
    })
}

window.onload = main

/* Helper Functions */

// Wrapper function for logging to console
function Debug(...data) {
    console.log(...data)
}

// Used to determine how many "Our Father's"
// and "Hail Mary's" one must do to be atoned
function BestowJudgement(inputText) {
    let hailMary = Math.floor((Math.random() * 15) + 1)
    let ourFather = Math.floor((Math.random() * 15) + 1)

    let hm = document.querySelector("#hM")
    let of = document.querySelector("#oF")

    hm.innerHTML = hailMary + " Hail Mary's"
    of.innerHTML = ourFather + " Our Father's"

    document.querySelector("#results").removeAttribute("hidden")
    document.querySelector("#main").setAttribute("hidden", "")
}

function beginAnew() {

}

Object.defineProperty(String.prototype, 'hashCode', {
    value: function() {
        var hash = 0, i, chr;
        for (i = 0; i < this.length; i++) {
            chr   = this.charCodeAt(i);
            hash  = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    }
});

