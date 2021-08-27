import React, { useState, useContext, createContext } from 'react'
import axios from 'axios'
import { LoaderContext } from './Loading'

export const CinemaContext = createContext()

export const CinemaContextController = ({ children }) => {

	const { toggleLoading } = useContext(LoaderContext);

	const initialState = { data: null }
	const [cinemas, setCinemas] = useState(initialState)

	const getCinemaList = () => {
		toggleLoading(true);

		axios.get(`catalogue/cinema/movies`)
			.then(res => {
				toggleLoading(false);
				setCinemas(res.data)
			})
	}

	return (
		<CinemaContext.Provider value={{
			getCinemaList,
			cinemas
		}}
		>
			{children}
		</CinemaContext.Provider>
	)
}
