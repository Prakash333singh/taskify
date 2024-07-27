// const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
// const BASE_URL = "http://localhost:5000";

// AUTH ENDPOINTS
export const endpoints = {
  // SENDOTP_API: BASE_URL + "/auth/sendotp",
  SENDOTP_API: "http://localhost:5000/api/v1/auth/sendotp",
  SIGNUP_API: "http://localhost:5000/api/v1/auth/signup",
  LOGIN_API: "http://localhost:5000/api/v1/auth/login",
  USER_ALL_TASKS: "http://localhost:5000/api/v1/todo/all-todos",
  DELETE_TASK: "http://localhost:5000/api/v1/todo/delete-todo",
  UPDATE_TASK: "http://localhost:5000/api/v1/todo/update-todo",
  CREATE_TASK: "http://localhost:5000/api/v1/todo/create-todo",
  IMPORTANT_TASK: "http://localhost:5000/api/v1/todo/important-todos",
  COMPLETED_TASK: "http://localhost:5000/api/v1/todo/completed-todos",
  INCOMPLETE_TASK: "http://localhost:5000/api/v1/todo/incomplete-todos",
  TASK_DETAILS: "http://localhost:5000/api/v1/todo/todo-details",
  FORGOT_PASSWORD_TOKEN_API:
    "http://localhost:5000/api/v1/auth/forgot-password-token",
  FORGOT_PASSWORD_API: "http://localhost:5000/api/v1/auth/forgot-password",
};
// DELETE_TASK: BASE_URL + "/todo/delete-todo",
// UPDATE_TASK: BASE_URL + "/todo/update-todo",
// CREATE_TASK: BASE_URL + "/todo/create-todo",
// IMPORTANT_TASK: BASE_URL + "/todo/important-todos",
// COMPLETED_TASK: BASE_URL + "/todo/completed-todos",
// INCOMPLETE_TASK: BASE_URL + "/todo/incomplete-todos",
// TASK_DETAILS: BASE_URL + "/todo/todo-details",
// FORGOT_PASSWORD_TOKEN_API: BASE_URL + "/auth/forgot-password-token",
// FORGOT_PASSWORD_API: BASE_URL + "/auth/forgot-password",
