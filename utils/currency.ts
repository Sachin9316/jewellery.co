export async function getConversionRate(from: string, to: string): Promise<number> {
    const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
    if (!res.ok) throw new Error('Failed to fetch conversion rate');
    const data = await res.json();
    const rate = data.rates[to];
    if (!rate) throw new Error(`No rate found for ${to}`);
    return rate;
}
