
export const goToLogin = (history) => {
    history.push("/")
}

export const goToSubscribe = (history) => {
    history.push("/subscribe")
}

export const goToHome = (history) => {
    history.push("/home")
}

export const goToBack = (history) => {
    history.goBack()
}