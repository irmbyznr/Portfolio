const Spacer = ({ height = 100,id }) => {
	return <div style={{ height: `${height}px` }}  id={`${id}`}></div>;
};

export default Spacer;