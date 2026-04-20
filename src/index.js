function pow(x, n) {
    if (n === 0) return 1;
    if (n < 0) return 1 / pow(x, -n);
    if (n % 2 === 0) return pow(x * x, Math.floor(n / 2));
    return x * pow(x * x, Math.floor(n / 2));
}
