
export const goToLogin = (history) => {
    history.push("/")
}

export const goToSubscribe = (history) => {
    history.push("/subscribe")
}

export const goToFeed = (history) => {
    history.push("/feed")
}

export const goToPost = (history) => {
    history.push("/post")
}

export const goToBack = (history) => {
    history.goBack()
}