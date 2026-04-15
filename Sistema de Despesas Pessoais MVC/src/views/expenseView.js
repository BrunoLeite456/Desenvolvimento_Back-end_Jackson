export default class ExpenseView {

    static success(res, data) {
        return res.json({
            status: "success",
            data
        });
    }

    static error(res, message, status = 400) {
        return res.status(status).json({
            status: "error",
            message
        });
    }
}