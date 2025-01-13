import { configureStore } from '@reduxjs/toolkit'
import  postApi  from './features/post/postApi'


const store = configureStore({
    reducer : {
        [postApi.reducerPath ] : postApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postApi.middleware),
});

export default store;