
exports.renderUser = (user) => {
    if (!user) return null;

    return {
        id: user.id,
        email: user.email,
        name: user.name
    
    };
};

exports.renderUsers = (users) => {
    return users.map(user => exports.renderUser(user));
};

exports.error = (message) => {
    return { error: message };
};