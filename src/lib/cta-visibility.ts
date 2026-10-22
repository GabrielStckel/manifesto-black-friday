export function shouldShowFloatingCta(heroVisible: boolean, plansVisible: boolean, otherCtaVisible: boolean) {
  return !heroVisible && !plansVisible && !otherCtaVisible;
}