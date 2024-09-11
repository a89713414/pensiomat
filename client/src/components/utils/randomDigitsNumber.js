export function generateRandomNumber() {
    // Generate a random number between 100 and 999 for the last three digits
    const lastThreeDigits = Math.floor(Math.random() * 900) + 100;

    // Concatenate '572' with the random last three digits
    const randomNumber = '572' + lastThreeDigits;

    return randomNumber;
}
