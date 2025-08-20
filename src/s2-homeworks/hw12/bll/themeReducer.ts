const initState = {
    themeId: 1,
}

export type ThemeState = {
    themeId: number
}

type ThemeAction = {
    type: 'SET_THEME_ID'
    id: number
}

export const themeReducer = (state: ThemeState = initState, action: ThemeAction): ThemeState => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}

        default:
            return state
    }
}

export const changeThemeId = (id: number): any => ({type: 'SET_THEME_ID', id}) // fix any
