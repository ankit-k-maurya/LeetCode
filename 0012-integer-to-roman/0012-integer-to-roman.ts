function intToRoman(num: number): string {
    const intValues: number[] = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const rom: string[] = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    let result = "";

    for (let i = 0; i < intValues.length; i++) {
        while (num >= intValues[i]) {
            result += rom[i];
            num = num - intValues[i];
        }
    }
    return result;
}
