module.exports = function toReadable(number) {
    const Number = number.toString()
    const Translit = {
        null:['zero'],
        a1: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        a10: ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        a20: ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
        a100: ['hundred'],
    }
    if (Number.length == 1) {
        if (Number[0] == 0) {
            number = `${Translit.null}`;
        }
        else if (Number <= 9) {
            number = `${Translit.a1[Number - 1]}`
        }
    }
    else if (Number.length == 2 && Number[0] == 1) {
        if (Number[0] == 1 && Number[1] <= 9) {

            number = `${Translit.a10[Number[1]]}`;
        }
    }
    else if (Number.length == 2) {
        for (let i = 0; i <= 0; i++)
            if (Number[0] >= 2 && Number[0] <= 9 && Number[1] <= 9) {
                if (Number[1] == 0) {
                    number = `${Translit.a20[Number[i] - 2]}`;
                } else {
                    number = `${Translit.a20[Number[i] - 2]} ` + `${Translit.a1[Number[1] - 1]}`;
                }
            }
    }
    else if (Number.length == 3) {
        for (let i = 0; i <= 0; i++)
            if (Number[0] >= 1 && Number[0] <= 9 && Number[1] >= 0 && Number[1] <= 9 && Number[2] <= 9) {
                if (Number[1] == 0 && Number[2] == 0) {
                    number = `${Translit.a1[Number[i] - 1]} ` + `${Translit.a100}`;
                }
                else if (Number[0] >= 1 && Number[1] == 0 && Number) {
                    number = `${Translit.a1[Number[i] - 1]} ` + `${Translit.a100} ` + `${Translit.a1[Number[2] - 1]}`;
                }
                else if (Number[0] >= 1 && Number[1] == 1 && Number[2] <= 9) {
                    number = `${Translit.a1[Number[0]-1]} ` + `${Translit.a100} ` + `${Translit.a10[Number[2]]}`;
                }
                else if (Number[0] >=0 && Number[0] <= 9 && Number[1] >= 2 && Number[1] <= 9 && Number[2] == 0) {
                    console.log(Number[0])
                    number = `${Translit.a1[Number[i] - 1]} ` + `${Translit.a100} ` + `${Translit.a20[Number[1]-2]}`;
                    }
                else if (Number[0] >= 1 && Number[0] <= 9 && Number[1] >= 2 && Number[1] <= 9 && Number[2] <= 9) {

                    number =`${Translit.a1[Number[i] - 1]} `+ `${Translit.a100} `+ `${Translit.a20[Number[1]-2]} `+`${Translit.a1[Number[2]-1]}`;
                }
                }

    }
    return number
    }










