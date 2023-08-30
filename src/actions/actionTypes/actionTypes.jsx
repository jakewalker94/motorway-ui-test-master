export const fullScreenStateAction = (fullScreen, image) => {
    return {
        type: 'images/fullscreen',
        fullScreen: fullScreen,
        image: image,
    }
}

export const formStateAction = (submitState) => {
    return {
        type: 'forms/exampleForm',
        submitState: submitState,
    }
}