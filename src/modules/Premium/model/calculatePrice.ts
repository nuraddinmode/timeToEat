type CalculatePriceProps = {
  daysInWeek: 7 | 14 | 21 | 28;
  mealsCount: number;
};

export function calculatePrice({
  daysInWeek,
  mealsCount,
}: CalculatePriceProps): number {
  const prices: Record<number, number> = {
    7: 570,
    14: 530,
    21: 505,
    28: 480,
  };

  const pricePerMeal = prices[daysInWeek] ?? 0;

  return pricePerMeal * mealsCount;
}
