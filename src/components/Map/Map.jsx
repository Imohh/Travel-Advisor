import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab'
import useStyles from './styles'

const Map = () => {
	// GOOGLE MAPS API KEY = AIzaSyDhKS2xj_QcvtA1o2l3d-kD_PDwNT4s1KI
	// GOOGLE MAP API = AIzaSyA0oYubMrdb6DLd9iXF1Kr__IbIVoAU7MY

	const classes = useStyles()
	const isMobile = useMediaQuery('(min-width:600px)')
	const coordinates = { lat: 0, lng: 0 }

	return (
		<div className={classes.mapContainer}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: 'AIzaSyA0oYubMrdb6DLd9iXF1Kr__IbIVoAU7MY' }} 
				defaultCenter={coordinates}
				center={coordinates}
				defaultZoom={14}
				margin={[50, 50, 50, 50]}
				options={''}
				onChange={''}
				onChildClick={''}>

			</GoogleMapReact>
		</div>
	)
}

export default Map