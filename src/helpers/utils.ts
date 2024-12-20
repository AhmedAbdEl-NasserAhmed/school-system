export function formatTime(
  Date: Date,
  options: Intl.DateTimeFormatOptions = {}
) {
  return new Intl.DateTimeFormat("en-US", options).format(Date);
}
