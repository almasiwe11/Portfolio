export default function Footer({ showFooter }: { showFooter: boolean }) {
  return (
    <div
      className={`fixed left-0 right-0 h-16 bg-black ${
        showFooter ? "block footer" : "hidden"
      }`}
    >
      Footer
    </div>
  )
}
