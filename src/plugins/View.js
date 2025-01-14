class View {
    constructor() {
        // You can initialize class-level properties here if needed
    }

    /**
     * Determines if the current device is mobile based on screen width.
     * @returns {boolean} True if the device is mobile, otherwise false.
     */
    static isMobile() {
        return window.matchMedia("(max-width: 768px)").matches;
    }

    /**
     * Determines if the current device is desktop based on screen width.
     * @returns {boolean} True if the device is desktop, otherwise false.
     */
    static isDesktop() {
        return window.matchMedia("(min-width: 769px)").matches;
    }
}

export default View;
