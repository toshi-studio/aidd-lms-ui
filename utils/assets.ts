const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function getAssetPath(path: string): string {
  return `${basePath}${path}`;
}