import styled from 'styled-components/native'
import { SIZES } from './theme'

export const Container = styled.ScrollView`
	background-color: ${props => props.theme.BACKGROUND_COLOR};
`

export const ViewContainerModal = styled.View`
	background-color: ${props => props.theme.BACKGROUND_COLOR_MODAL};
`
export const ViewContainer = styled.View`
	background-color: ${props => props.theme.BACKGROUND_COLOR};
`

export const Text = styled.Text`
	color: ${props => props.theme.TEXT_COLOR};
	margin-top: ${SIZES.marginLarge}px;
`

export const TextInput = styled.TextInput`
	color: ${props => props.theme.TEXT_COLOR};
`

export const HeaderContainer = styled.SafeAreaView`
	background-color: ${props => props.theme.BACKGROUND_COLOR_NAV};
`
