// build slider bubble
export const buildSlider = () => {
    const setBubble = (range, bubble) => {
        const val = range.value;
        const min = range.min ? range.min : 0;
        const max = range.max ? range.max : 100;
        const newVal = Number(((val - min) * 100) / (max - min));
        bubble.innerHTML = "£" + val + "k";
        bubble.style.left = "calc(${newVal}% + (${8 - newVal * 0.15}px))";
    }

    window.addEventListener("load", function() {
        const range = document.querySelector("#input__slider");
        const bubble = document.querySelector("#input__slider_bubble");

        setBubble(range, bubble);
        range.addEventListener("input", () => {
            setBubble(range, bubble);
        });

        window.removeEventListener("load", this.handleLoad);
    }); 
}

// get color of text
export const isColor = (colourValue) => {
    const isSupported = CSS.supports("color", colourValue);
    const colourInput = document.querySelector("#input__colour");

    if (isSupported) {
        colourInput.setAttribute("style", "color:"+ colourValue + ";")
        return isSupported;
    } else {
        colourInput.removeAttribute("style");
        return "Please pick a better colour and I'll show you a trick..."
    }
}

// check date is valid
export const isValidDate = (dateValue) => {
    const now = new Date();
    const eighteenYearsAgo = new Date(new Date().setFullYear(new Date().getFullYear() - 18));
    const longTimeAgo = new Date(new Date().setFullYear(new Date().getFullYear() - 116));
    let date = new Date(dateValue);

    if (!isNaN(date)) {
        if (date > now) {
            return "This date is in the future";
        } else if (date > eighteenYearsAgo) {
            return "You need to be at least 18 years of age";
        } else if (longTimeAgo > date) {
            return "Are you the oldest person on earth?";
        } else {
            return true;
        }
    } else {
        return "Not a valid date";
    }
} 