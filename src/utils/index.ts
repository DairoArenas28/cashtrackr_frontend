
export function formatCurrent(quantity: number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(quantity)
}

export function formatDate(isoString: string) {
    const date = new Date(isoString)

    const formatter = new Intl.DateTimeFormat('es-ES', {
        year: 'numeric',
        month: 'long',
        day: '2-digit',

    })

    return formatter.format(date)
}