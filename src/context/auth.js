import { createContext ,useEffect,useState} from  'react'
export const AuthContext = createContext()

const AuthProvider = ({children})=>{
    const[user,setUser]  = useState(null);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{

    },[])
    return  <AuthContext.Provider>
        {children}
    </AuthContext.Provider>

}
export default AuthProvider