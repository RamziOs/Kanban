import React from 'react'
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { logout, selectUser } from '../../features/userSlice';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import * as IoIcons from 'react-icons/io';

const Logout = () => {
    const user = useSelector(selectUser);

    const dispatch = useDispatch();

    const handlelogout = (e) => {
        e.preventDefault();
        dispatch(logout());
    }
    return (
        <div>
            <b>Wellcome<span className='user__name'>{user.name}  </span></b> 
            <IoIcons.IoIosUndo onClick={(e) => handlelogout(e)} />
        </div>
    )
}

export default Logout
