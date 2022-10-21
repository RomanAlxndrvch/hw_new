type themeType = {
    themeId: number
}

const initState = {
    themeId: 1,
}

export const themeReducer = (state: themeType = initState, action: ReturnType<typeof changeThemeId>): themeType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID': {
            return {...state, themeId: action.id}
        }

        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({type: 'SET_THEME_ID', id}) // fix any
