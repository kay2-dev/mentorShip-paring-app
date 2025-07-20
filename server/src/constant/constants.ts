import { CookieOptions } from "express"

const person = {
    name: 'John Doe',
    age: 30,
    occupation: 'Software Engineer'
}




export const API_END_POINTS = {

    authEndPoints: {
        register: '/auth/register',
        login: '/auth/login',
        logout: '/auth/logout',
        me: '/auth/me',
    },

    userProfilesEndPoints: {
        createUserProfile: '/users/create-profile',
        userProfile: '/users/me',
        getUser: '/users/:id',
        updateProfile: '/users/me/profile'
    },

    mentorShipRequestsEndPoints: {
        mentors: '/all-mentors',
        request: '/requests',
        requestSent: '/requests/sent',
        requestReceived: '/requests/recevied',
        requestStatusUpdate: '/requests/:id'
    },

    sessionsEndPoints: {
        sessions: '/sessions',
        getAllSessionsForMentor: '/sessions/mentor',
        getAllSessionsForMentee: '/sessions/mentee',
        sessionsFeedbacks: '/sessions/:id/feedback'
    },

    adminEndPoint: {
        getAllUser: '/admin/users',
        updateUserRole: '/admin/users/:id/role'
    }
}

export const cookieOption: CookieOptions = {
    httpOnly: true,
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 100
} 