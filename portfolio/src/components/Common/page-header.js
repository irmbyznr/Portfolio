import "./page-header.scss"
const PageHeader = ({ title }) => {
    return (
      <h2 className="page-header" >
        <span>{title}</span>
      </h2>
    );
  };
  
  export default PageHeader;