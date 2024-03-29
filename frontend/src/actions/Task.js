import * as taskAPI from "../api/Task.js";

export const changeDisp =  (task)=> async (dispatch) => {
    try{
        dispatch({type: "OPENTASK", payload: task});
    }catch(err){
        console.log(err);
    }
};

export const changeStatus =  (task)=> async (dispatch) => {
    try{
        const assigneeEmail = task.task.task.assigneeEmail
        const taskId = task.task.task.taskId
        const status = task.status
        const data = {taskId, status}
        dispatch({type: "CHANGESTATUS", payload: data});
    }catch(err){
        console.log(err);
    }
};

export const getEmployees  = () => async(dispatch) => {
    try{
        const {data} = await taskAPI.getEmployees();
        dispatch({type: "GETEMPLOYEE", payload: data});
    }catch(err){
        console.log(err);
    }
};

export const createTrainingTask = (formData) => async() => {
    try{
        await taskAPI.createTrainingTask(formData);
    }catch(err){
        console.log(err);
    }
};

export const getTrainingTask = () => async(dispatch) => {
    try{
        const {email} = JSON.parse(localStorage.getItem("profile")).user;
        const {data} = await taskAPI.getTrainingTask({requestorEmail : email});
        dispatch({type: "GETTASK", payload: data});
    }catch(err){
        console.log(err);
    }
};
