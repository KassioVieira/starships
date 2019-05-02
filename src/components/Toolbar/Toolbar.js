import React from 'react'
import { View } from 'react-native'

import { WrapToolbar, WrapTitle, Title } from './styles'

const Toolbar = ({ title, LeftComponent, RightComponent, ...rest }) => (
	<WrapToolbar {...rest}>
		<WrapTitle>
			<Title>{title}</Title>
		</WrapTitle>
		{LeftComponent}
		<View />
		{RightComponent}
	</WrapToolbar>
)

export default Toolbar
