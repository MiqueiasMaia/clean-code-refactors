const [FACTOR_DIGIT_1, FACTOR_DIGIT_2] = [10, 11];

const validate = (cpfRaw) => {
    if (!cpfRaw) return false;
    const cpf = cpfCleaner(cpfRaw);
    if (!cpfSizeValidator(cpf)) return false;
    if (cpfEqualsDigitsValidator(cpf)) return false;
    const digit1 = calculateDigit(cpf, FACTOR_DIGIT_1);
    const digit2 = calculateDigit(cpf, FACTOR_DIGIT_2);
    const actualDigit = extractActualDigit(cpf);
    const calculatedDigit = `${digit1}${digit2}`;
    return actualDigit === calculatedDigit;
};

const cpfCleaner = (rawCpf) => {
    return rawCpf.replace(/[\.\-]*/g, "");
};

const cpfSizeValidator = (cpf) => {
    return cpf.length === 11;
};

const cpfEqualsDigitsValidator = (cpf) => {
    const [firstDigit] = cpf;
    return [...cpf].every(digit => digit === firstDigit);
};

const calculateDigit = (cpf, factor) => {
    let total = 0;
    for (const digit of cpf) {
        if (factor > 1)
            total += parseInt(digit) * factor--;
    }
    const rest = total % 11;
    return rest < 2 ? 0 : 11 - rest;
};

const extractActualDigit = (cpf) => {
    return cpf.slice(9);
};

module.exports = {
    validate
};