const registerUser = async (req, res) => {
    try {
        res.status(201).json({
            success: true,
            message: "Register API working",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const loginUser = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Login API working",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    registerUser,
    loginUser,
};