export default function ({ app }) {
  // Load Midtrans script
  const script = document.createElement('script')
  script.src = 'https://app.sandbox.midtrans.com/snap/snap.js'
  script.async = true
  script.defer = true
  script.setAttribute('data-client-key', 'SB-Mid-client-8MLsiDgKLXuAPY76') // Assuming you have stored your client key in environment variables
  document.head.appendChild(script)
}
