import Image from 'next/image';
import Link from 'next/link';

export default function Footer(){
    return <footer className="bg-slate-200 text-black py-2">
        <div className="max-w-6xl mx-auto px-6 text-center pb-5">
            <p className="mt-8 text-center text-sm tracking-wide mb-5">©2026 Hao Lin Chen</p>
            <div className="flex justify-center mx-auto gap-5">
                <Link href="https://github.com/haolinc">
                    <Image src='github.svg' alt='github' width={25} height={25}/>
                </Link>
                <Link href="https://www.linkedin.com/in/hao-lin-chen-633796192/">
                    <Image src='linkedin.svg' alt='linkedin' width={25} height={25}/>
                </Link>
            </div>
        </div>
    </footer>
}