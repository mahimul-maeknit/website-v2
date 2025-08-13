import Link from "next/link"

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-inner">
        <p className="small">&copy; {new Date().getFullYear()} MAEKNIT. All rights reserved.</p>
        <ul className="footer-links">
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/labs">Labs</Link></li>
          <li><Link href="/contact">Book a consultation</Link></li>
        </ul>
      </div>
    </footer>
  )
}
