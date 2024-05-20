

import classes from './Notification.module.css';

//define the interface for props
type MyProps = {
    message: string,
    status: string, //
}
const Notification = ({message, status}:MyProps) => {
    let specialClasses = '';
    if(status === 'error'){
        specialClasses = classes.error
    }
    if(status === 'success'){
        specialClasses = classes.success
    }
    return <>
     <div className={`${specialClasses}`}>{message}</div>
    </>
}

export default Notification;