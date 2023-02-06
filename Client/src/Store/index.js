import { configureStore } from "@reduxjs/toolkit";
import { categorieSlice } from "../Slice/Filter/categorieSlice";
import { authSlice } from "../Slice/LoginForm/LoginFormSlice";
import { registerSlice } from "../Slice/CreateUse/CreateUserSlice";
import { UserSlice } from "../Slice/User/UserSlice"
import { eventsSlice } from "../Slice/Events/EventsSlice";
import { eventSlice } from "../Slice/CreateEvent/CreateEvent";
import { forgot } from "../Slice/ForgotPass/ForgotPassSlice";
import { recover } from "../Slice/RecoverPass/RecoverPassSlice";
import eventDetailSlice from "../Slice/EventDetail/EventDetailSlice";

const store = configureStore({
  reducer: {
    categories: categorieSlice.reducer,
    auth: authSlice.reducer,
    register:registerSlice.reducer,
    user:UserSlice.reducer,
    events: eventsSlice.reducer,
    event: eventSlice.reducer,
    forgot: forgot.reducer,
    recover: recover.reducer,
    eventDetail: eventDetailSlice,
  },
});

export default store;

//RECUERDA AVISARLE AL STORECOMMITER DE LOS CAMBIOS REALIZADOS EN ESTE ARCHIVO PARA QUE SUBA EL STORE DE FORMA CORRECTA.