// using promises
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
        .catch((err) => next(err))
    }
}


export {asyncHandler}

// using try catch

/*
// const asyncHandler = (func) => {
    async() => {
        
    }
}       
const asyncHandler = (fn) => async(req, res, next) => {       // above code can also be written in this wat
    try {
        await fn(req, res, next)
    } catch (error) {
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        })
    }
}       
*/