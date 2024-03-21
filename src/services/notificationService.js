import Swal from 'sweetalert2'

const NotificationService = {
  success(message, options = {}, callback) {
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: message,
      showConfirmButton: false,
      timer: 1500,
      ...options
    }).then(callback)
  },
  error(message, options = {}, callback) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: message,
      ...options
    }).then(callback)
  },
  warning(message, options = {}, callback) {
    Swal.fire({
      icon: 'warning',
      title: 'Warning',
      text: message,
      ...options
    }).then(callback)
  },
  info(message, options = {}, callback) {
    Swal.fire({
      icon: 'info',
      title: 'Info',
      text: message,
      ...options
    }).then(callback)
  }
}

export default NotificationService
