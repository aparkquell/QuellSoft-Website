const basePath = process.env.NODE_ENV === "production" ? "/QuellSoft-Website" : "";

export function withBasePath(path: string) {
  return `${basePath}${path}`;
}
