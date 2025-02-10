export const intlDateTimeFormat = (timestamp: string) => {
    return (new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit'
                  }).format(new Date(timestamp)))
}