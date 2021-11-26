export const UserProfileSetType = "USER_PROFILE_SET";

//payload definition
export interface UserProfilePayload {
    id: string;
    userName: string;
}

//actions use a TYPE and PAYLOAD
export interface UserProfileAction {
    type: string;
    payload: UserProfilePayload | null;
}

//reducers use STATE and ACTION
export const UserReducer = (
    state: any = null,
    action: UserProfileAction
): UserProfilePayload | null => {
    switch (action.type) {
        case UserProfileSetType:
            return action.payload;
        default:
            return state;
    }
};
