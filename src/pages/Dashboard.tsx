import { useAppDispatch, useAppSelector } from "../app/hooks"

const Dashboard = () => {
    const dispatch = useAppDispatch();
    const selector = useAppSelector();

    // const actions = {
    //     createDiary: {
    //       type: "create",
    //       payload: "",
    //     },
    //     readDiary: {
    //       type: "read",
    //       payload: "",
    //     },
    //     updateDiary: {
    //         type: "update",
    //         payload: ""
    //     },
    //     deleteDiary: {
    //         type: "delete",
    //         payload: ""
    //     }
    //   };

    //const getNotes = dispatch(getDiary());

    return <h1>Dashboard</h1>
}

export default Dashboard