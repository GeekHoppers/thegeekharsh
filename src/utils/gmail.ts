/**
 * Build a Gmail compose URL that opens a new compose window in Gmail.
 * Replaces `mailto:` links so the user never falls through to Outlook / the system default.
 */
export function gmailComposeUrl(
  to: string,
  subject?: string,
  body?: string,
): string {
  const params = new URLSearchParams({ view: 'cm', fs: '1', to })
  if (subject) params.set('su', subject)
  if (body) params.set('body', body)
  return `https://mail.google.com/mail/?${params.toString()}`
}
