const User = require('../../models/userSchema');


export const cookieOptions = {
    expires : new Date(Date.now + 3*24*60*60*1000),
    httpOnly: true,
}

exports.createUser = async (req,res) => {

    // fetch user details from body
    const {name, email, password} = req.body;
    
    //  checking for all fields
    if(!(name || email || password)){
        return res.status(400).json({
            error: 'All the fields are mandatory to create a User'
        });
    }

    //  check if already the user exists
    const existingUser = await User.findOne({email});
    
    if(existingUser){
        return res.status(400).json({
            error: 'User already exists'
        });
    }

    const user = await User.create({
        name,
        email,
        password
    });

    const token = user.getJwtToken();

    console.log(token);

    user.password = undefined;

    res.cookie('token', token, cookieOptions);

    res.status(201).json({
        success: true,
        user,
        token
    })


}