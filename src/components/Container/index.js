import React, { PureComponent } from 'react'

import { Wrap } from './styles'

export default class Container extends PureComponent {
	render() {
		return <Wrap {...this.props}>{this.props.children}</Wrap>
	}
}
