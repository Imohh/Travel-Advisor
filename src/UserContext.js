import { createContext, useState } from 'react'

const UserContext = createContext(undefined)

export const UserProvider = ({children}) => {
	const [user] = useState({
		name: "john",
		email: "john@ecample.com",
		dob: "01/01/2000"
	})

	return <UserContext.Provider value={{user}}></UserContext.Provider>
}

export const useUser = () => useContext(UserContext)