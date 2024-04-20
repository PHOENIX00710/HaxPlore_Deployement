import jwt from 'jsonwebtoken'

const genTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '15d'
    })
    console.log("Token: ", token);
    res.cookie("jwt", token, {
        httpOnly: true,
        sameSite: 'None',
        secure: true,//prevents CSRF(Cross Site Request Forgery) attacks
    })
    console.log("Done!!");
    return
}

export default genTokenAndSetCookie;