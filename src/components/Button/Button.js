import "./Button.css";

const Button = (props) => {
  let className = props.className;
  let styles = props.styles;
  let customedClass = props.customedClass;

  if (customedClass === undefined) {
    customedClass = "";
  }

  styles.display = "flex";
  styles.justifyContent = "center";
  styles.alignItems = "center";
  styles.background = "linear-gradient(90deg, #D59E19 0%, #BB7E2F 100%)";
  styles.cursor = "pointer";

  return (
    <div className={className} style={styles} onClick={props.handleClick}>
      {props.content}

      {props.icon && <img src={props.icon} alt=""></img>}
    </div>
  );
};

export default Button;
