export default function SvgIcon(props) {
	const {
		child,
		height=24, 
		width=24, 
		viewBox="0 0 256 256", 
		classNames, 
		overrideDefaults,
	} = props

	const defaultClassNames = `fill-neutral-800 dark:fill-neutral-200 ${classNames ?? ""}`

	return (
		<svg 
			xmlns="http://www.w3.org/2000/svg"
			className={overrideDefaults ? classNames : defaultClassNames}
			height={height}
			width={width}
			viewBox={viewBox}
		>
			{child}
		</svg>
	)
}