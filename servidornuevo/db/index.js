import users from '../resources/users';

export default {
    getUsers: function(){
        return users;
    },
    getUserById(id){
        return users.filter(user=>user._id===id);
    }
};