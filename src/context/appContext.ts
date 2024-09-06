import { createContext } from "react";

  type AppContextType = {
    users: any;
    loading: boolean;
    error: string | null;
    setUsers: any;
  };

  
const AppContext = createContext<AppContextType>({
    users: [],
    loading : false,
    error : null,
    setUsers:  ()=>{},
})

export default AppContext;
