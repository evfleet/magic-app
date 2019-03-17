const urlRegex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|svg)/g;

export default function(url: string): boolean {
  return urlRegex.test(url);
}
