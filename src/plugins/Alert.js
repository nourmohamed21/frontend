import { useToast } from 'vue-toast-notification';

// Alert function to show toast notifications
function Alert(msg, type = 'i', timeout = 4000) {
  // Get the toast instance
  const toast = useToast();

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

// Export the Alert function
export default Alert;
