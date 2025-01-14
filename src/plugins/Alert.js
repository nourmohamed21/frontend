import Swal from 'sweetalert2';
import { useToast } from 'vue-toast-notification';
// Get the toast instance
  const toast = useToast();
// Alert function to show toast notifications
function Alert(msg, type = 'i', timeout = 4000) {
  // Determine the type of toast
  let toastType;
  switch (type) {
    case 'e':
      toastType = 'error';
      break;
    case 's':
      toastType = 'success';
      break;
    case 'w':
      toastType = 'warning';
      break;
    default:
      toastType = 'info';
      break;
  }

  // Show the toast with the determined type and message
  toast[toastType](msg, { duration: timeout, position: 'top-right' });
}

function Error(msg,timeout){
  if (msg==1) {
    Swal.fire({
        icon: "error",
        title: "",
        text: '',
        background: "transparent",
        timer: 1000, // Auto-close after 3 seconds
        timerProgressBar: false,
        showConfirmButton: false,
    });
  }else{
    // Show the toast with the determined type and message
    toast['error'](msg, { duration: timeout, position: 'top-right' });
  }

}
function Warning(msg,timeout){
  // Show the toast with the determined type and message
  toast['warning'](msg, { duration: timeout, position: 'top-right' });
}
function Success(msg,timeout){
  if (msg==1) {
    Swal.fire({
        icon: "success",
        title: "",
        text: '',
        background: "transparent",
        timer: 1000, // Auto-close after 3 seconds
        timerProgressBar: false,
        showConfirmButton: false,
    });
  }else{
    // Show the toast with the determined type and message
    toast['success'](msg, { duration: timeout, position: 'top-right' });
  }

}
function Info(msg,timeout){
  // Show the toast with the determined type and message
  toast['info'](msg, { duration: timeout, position: 'top-right' });
}

// Export the Alert function
export  {Alert, Error,Warning,Info,Success} ;
