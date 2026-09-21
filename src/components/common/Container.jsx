const Container = ({ children, className = "" }) => {
    return (
        <div className={`px-2 sm:px-5 md:px-10 ${className}`}>
            {children}
        </div>
    );
};

export default Container;