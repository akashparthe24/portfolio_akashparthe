function Button({ as = "button", variant = "primary", className = "", children, ...props }) {
  const classes = `btn btn-${variant} ${className}`.trim();

  if (as === "a") {
    return (
      <a className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
