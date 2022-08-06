
export const generarId = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)

    return random + fecha
}

export const settingDate = date => {
    const nnewDate = new Date(date);

    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    }
    
    return nnewDate.toLocaleDateString('en-US', options)

}