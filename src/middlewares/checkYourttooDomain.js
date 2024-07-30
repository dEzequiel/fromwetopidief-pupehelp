
const checkYourttooDomain = (req, res, next) => {
    //const allowedHosts = ['www.yourttoo.com', 'yourtoo.com']; 
    const allowedHosts = ['localhost', 'www.yourttoo.com', 'yourtoo.com'];  // Testing purpose. Change to the commented line when deploying
    if (allowedHosts.includes(req.hostname)) {
        next(); 
    } else {
        res.status(403).send('Access forbidden: unkown host');
    }
};

export default checkYourttooDomain;