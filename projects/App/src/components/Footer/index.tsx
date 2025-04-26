
export default function Footer() {
  return (
    <footer className="p-3">
      <h6 className="text-2xl font-bold">
        Hash<span className="text-turquoise-blue-400">Send</span>
      </h6>

      <p className="faded-text text-sm">&copy; {new Date().getFullYear()} HashSend. All rights reserved.</p>
    </footer>
  )
}

