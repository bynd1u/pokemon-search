import dom from "../dom.js"

const validateInputEvent = () => {
    dom.input.addEventListener('input', () => {
        dom.input.value = dom.input.value.replace(/\D/g, '');
        let value = parseInt(dom.input.value);

        if (value < 1) {
            value = 1;
        } else if (value > 1025) {
            value = 1025;
        }

        dom.input.value = value;
    });
}


export default validateInputEvent;