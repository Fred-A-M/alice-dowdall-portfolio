import Link from 'next/link';
import Image from 'next/image';
export default function NavBar() {
  return (
    <div className="flex h-24 px-20 relative items-center z-50">
      {/* Left div - positioned at the start */}
      <div className="flex items-center antique-olive text-4xl text-background bg-foreground px-4 py-2 absolute left-20">
        <Link href="/">ALICE DOWDALL</Link>
      </div>
      
      {/* Middle div - centered */}
      <div className="flex items-center radio-canada-big text-2xl gap-8 mx-auto h-full">
        <Link href="/">Client Work</Link>
        <Link href="/projects">More Stuff</Link>
        <Link href="/contact">Contact</Link>
      </div>
      
      {/* Right div - positioned at the end */}
      <div className="flex items-center quicksand-light text-2xl gap-8 absolute right-20">
        <Link href="https://www.instagram.com/alice_dowdall/">
          <Image src="/IG.png" alt="Instagram" width={20} height={20} />
        </Link>
        <Link href="https://www.linkedin.com/in/alice-dowdall-342237101/">
          <Image src="/linkedin.png" alt="LinkedIn" width={20} height={20} />
        </Link>
      </div>
    </div>
  );
}