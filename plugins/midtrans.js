export default function ({ app }) {
  // Load Midtrans script
  const script = document.createElement('script')
  script.src = 'https://app.midtrans.com/snap/snap.js'
  script.async = true
  script.defer = true
  script.setAttribute('data-client-key', 'Mid-client-rftm07W6eAa8iQQT') // Assuming you have stored your client key in environment variables
  document.head.appendChild(script)
}
