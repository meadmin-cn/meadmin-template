export function normalizeDynamicComponentName(component?: unknown) {
  if (typeof component !== 'string') {
    return component;
  }
  const normalized = component.trim();
  if (!normalized || normalized === '#') {
    return '';
  }
  return normalized;
}
