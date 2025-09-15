import {
    updateUserWithWorker,
    checkLoginWithWorker,
    previewRivalsWithWorker,
    clearIllegalTicketsWithWorker,
    previewStockedTicketsWithWorker,
} from "./updateUser";

export const updateUser = updateUserWithWorker;
export const checkLogin = checkLoginWithWorker;
export const previewRivals = previewRivalsWithWorker;
export const clearIllegalTickets = clearIllegalTicketsWithWorker;
export const previewStockedTickets = previewStockedTicketsWithWorker;
