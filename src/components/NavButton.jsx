export default function NavButton({ isNavVisible, setIsNavVisible }) {
    function handleNavButton() {
        setIsNavVisible((currentNavVisibility) => {
            return !currentNavVisibility;
        })
    }

    const styleNaVButtonLastDiv = {
        transform: isNavVisible ? "translateX(-50%) rotate(90deg)" : "translateX(-50%) rotate(0deg)"
    }

    return (
        <div id="nav-button" onClick={handleNavButton}>
            <div></div>
            <div style={styleNaVButtonLastDiv}></div>
        </div>
    )
}